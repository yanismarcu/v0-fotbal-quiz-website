# Tema Shopify – Quiz Fotbal România

Această temă reproduce designul site-ului Next.js și folosește **plata prin Shopify Checkout** (nu Stripe).

## Ce conține

- Pagina principală (hero, avantaje, pași, despre, CTA, footer)
- Pagina de plată (`plateste`) – formular + coș + redirect la checkout Shopify
- Pagina de succes (`succes`) – mesaj după plată (opțional)

## Instalare pe Shopify

### Pasul 1 – Creează arhiva ZIP

1. Deschide folderul `shopify-theme` din acest proiect.
2. Selectează **toate fișierele din interior** (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`) — nu zip-ui folderul părinte gol.
3. Click dreapta → **Compress to ZIP** → salvează ca `quiz-fotbal-shopify.zip`.

### Pasul 2 – Încarcă tema

1. **Shopify Admin** → **Online Store** → **Themes**
2. **Add theme** → **Upload zip file**
3. Selectează `quiz-fotbal-shopify.zip`
4. După upload: **Publish** (sau Preview pentru test)

### Pasul 3 – Creează produsele (pentru plată)

În **Products** → **Add product**:

| Produs | Preț | Handle sugerat (opțional) |
|--------|------|---------------------------|
| Taxă participare – Quiz Fotbal | **14,99 RON** | `taxa-participare-quiz` |
| Pachet premium antrenament | **4,99 RON** | `pachet-premium-antrenament` |

- Fiecare produs: **un singur variant**, fără inventar obligatoriu (poți dezactiva „Track quantity” dacă e serviciu digital).
- Moneda magazinului trebuie să fie **RON** (Settings → Store details → Currency).

### Pasul 4 – Creează paginile

**Pages** → **Add page**:

| Titlu | Handle (URL) | Template |
|-------|----------------|----------|
| Plătește | `plateste` | `plateste` |
| Succes plată | `succes` | `succes` |

La fiecare pagină, în dreapta: **Theme template** → alege template-ul corespunzător.

### Pasul 5 – Setează pagina principală

1. **Online Store** → **Themes** → **Customize** (tema publicată)
2. Verifică că **Homepage** arată secțiunile quiz (hero, etc.)
3. La secțiunile **Quiz – Hero** și **Quiz – CTA**: la „Pagina de plată” selectează pagina **Plătește**
4. La secțiunea **Quiz – Plată** (pe pagina Plătește):
   - **Produs – Taxă participare** → produsul de 14,99 RON
   - **Produs – Pachet premium** → produsul de 4,99 RON
   - **Pagina principală** → pagina Home (sau lasă gol pentru `/`)

### Pasul 6 – Homepage

**Settings** → **Domains** sau **Online Store** → asigură-te că tema e **Published**.

Dacă magazinul arată alt homepage: **Online Store** → **Preferences** → poți seta o pagină custom ca home, sau lasă tema pe `index` (implicit).

## Cum funcționează plata

1. Clientul completează nume, email, telefon pe `/pages/plateste`
2. Apasă **Plătește și participă**
3. Produsele merg în coș (cu proprietăți: nume, email)
4. Redirect automat la **Shopify Checkout** (card, Apple Pay etc. – ce ai activat în Shopify Payments)
5. După plată, Shopify arată pagina **Thank you** nativă

Opțional: în **Settings → Checkout** poți personaliza mesajul de confirmare sau trimite clienții către `/pages/succes`.

## Comenzi – ce vezi în admin

La fiecare comandă vei vedea:

- Linia „Taxă participare” (+ premium dacă e bifat)
- Proprietăți linie: **Nume complet**, **Email înscriere**
- Atribute coș: **Telefon**, **Email contact**, **Nume participant**

## Dezvoltare locală (opțional)

Cu [Shopify CLI](https://shopify.dev/docs/themes/tools/cli):

```bash
cd shopify-theme
shopify theme dev
```

## Diferențe față de site-ul Next.js

- Nu mai folosește Stripe – totul prin Shopify
- Checkout-ul e pagina standard Shopify (nu custom pe `/plateste/succes` automat)
- Iconițe SVG în loc de Lucide React

## Suport

Dacă butonul de plată e dezactivat, verifică că ai selectat produsul de participare în customizer la secțiunea **Quiz – Plată**.
