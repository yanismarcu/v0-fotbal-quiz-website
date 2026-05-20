(function () {
  function showError(el, message) {
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-visible");
  }

  function hideError(el) {
    if (!el) return;
    el.classList.remove("is-visible");
    el.textContent = "";
  }

  function initPayment() {
    var form = document.getElementById("quiz-payment-form");
    if (!form) return;

    var config = window.QUIZ_SHOPIFY;
    if (!config || !config.participationVariantId) return;

    var errorEl = document.getElementById("quiz-payment-error");
    var premiumCheck = document.getElementById("quiz-premium");
    var totalEl = document.getElementById("quiz-total-amount");
    var submitBtn = document.getElementById("quiz-pay-btn");

    var participationPrice = config.participationPrice || 14.99;
    var premiumPrice = config.premiumPrice || 4.99;

    function updateTotal() {
      var total =
        participationPrice + (premiumCheck && premiumCheck.checked ? premiumPrice : 0);
      if (totalEl) totalEl.textContent = total.toFixed(2) + " RON";
    }

    if (premiumCheck) {
      premiumCheck.addEventListener("change", updateTotal);
    }
    updateTotal();

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      hideError(errorEl);

      var nume = (document.getElementById("quiz-nume") || {}).value || "";
      var email = (document.getElementById("quiz-email") || {}).value || "";
      var telefon = (document.getElementById("quiz-telefon") || {}).value || "";
      var includePremium = premiumCheck && premiumCheck.checked;

      nume = nume.trim();
      email = email.trim();
      telefon = telefon.trim();

      if (!nume) {
        showError(errorEl, "Completează numele complet.");
        return;
      }
      if (!email || email.indexOf("@") === -1) {
        showError(errorEl, "Introdu un email valid.");
        return;
      }

      if (includePremium && !config.premiumVariantId) {
        showError(
          errorEl,
          "Pachetul premium nu este configurat. Debifează opțiunea sau setează produsul în tema Shopify."
        );
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Se pregătește comanda…";
      }

      try {
        await fetch("/cart/clear.js", { method: "POST" });

        var items = [
          {
            id: config.participationVariantId,
            quantity: 1,
            properties: {
              "Nume complet": nume,
              "Email înscriere": email,
            },
          },
        ];

        if (includePremium) {
          items.push({
            id: config.premiumVariantId,
            quantity: 1,
          });
        }

        var addRes = await fetch("/cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: items }),
        });

        if (!addRes.ok) {
          var addErr = await addRes.json().catch(function () {
            return {};
          });
          throw new Error(addErr.description || "Nu s-au putut adăuga produsele în coș.");
        }

        await fetch("/cart/update.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attributes: {
              Telefon: telefon || "—",
              "Email contact": email,
              "Nume participant": nume,
            },
          }),
        });

        window.location.href = "/checkout";
      } catch (err) {
        showError(
          errorEl,
          err.message || "Verifică conexiunea și încearcă din nou."
        );
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML =
            '<span>👉</span><span style="margin-left:0.5rem">Plătește și participă</span>';
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPayment);
  } else {
    initPayment();
  }
})();
