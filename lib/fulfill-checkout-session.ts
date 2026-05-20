import type Stripe from "stripe"

/**
 * Apelat doar după verificarea semnăturii webhook-ului.
 * Aici pui: înscriere în DB, email de confirmare, acces premium etc.
 * Pentru idempotență la retry-uri Stripe, salvează `session.id` sau `event.id` într-o tabelă.
 */
export async function fulfillCheckoutSession(session: Stripe.Checkout.Session): Promise<void> {
  const paid =
    session.payment_status === "paid" ||
    session.payment_status === "no_payment_required"

  if (!paid) {
    console.info(
      "[fulfill] Sesiune neplătită încă:",
      session.id,
      session.payment_status
    )
    return
  }

  const email = session.customer_details?.email ?? session.customer_email ?? ""
  const { nume, telefon, include_premium } = session.metadata ?? {}

  const amountTotal = session.amount_total
  const currency = session.currency

  console.info("[fulfill] Plată confirmată", {
    sessionId: session.id,
    paymentIntent: session.payment_intent,
    email,
    nume,
    telefon,
    includePremium: include_premium,
    amountTotal,
    currency,
  })

  // TODO: trimite email (Resend, SendGrid…), salvează în DB, activează contul etc.
}
