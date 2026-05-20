import { NextResponse } from "next/server"
import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"

/** Sume în bani (RON). Valorile reale se calculează doar pe server. */
const PARTICIPATION_BANI = 1499 // 14.99 RON
const PREMIUM_BANI = 499 // 4.99 RON

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string
      nume?: string
      telefon?: string
      includePremium?: boolean
    }

    const email = typeof body.email === "string" ? body.email.trim() : ""
    const nume = typeof body.nume === "string" ? body.nume.trim() : ""
    const telefon = typeof body.telefon === "string" ? body.telefon.trim() : ""
    const includePremium = body.includePremium === true

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalid." }, { status: 400 })
    }
    if (!nume) {
      return NextResponse.json({ error: "Completează numele complet." }, { status: 400 })
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000"

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency: "ron",
          product_data: {
            name: "Taxă participare – Quiz Fotbal",
            description: "Înscriere în competiție",
          },
          unit_amount: PARTICIPATION_BANI,
        },
        quantity: 1,
      },
    ]

    if (includePremium) {
      lineItems.push({
        price_data: {
          currency: "ron",
          product_data: {
            name: "Pachet premium antrenament",
            description: "50 întrebări + răspunsuri similare cu quiz-ul oficial",
          },
          unit_amount: PREMIUM_BANI,
        },
        quantity: 1,
      })
    }

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: lineItems,
      success_url: `${origin}/plateste/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/plateste`,
      metadata: {
        nume,
        telefon,
        include_premium: includePremium ? "true" : "false",
      },
      locale: "ro",
    })

    if (!session.url) {
      return NextResponse.json(
        { error: "Nu s-a putut crea sesiunea de plată." },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error("[checkout]", e)
    return NextResponse.json(
      { error: "Eroare la inițializarea plății. Încearcă din nou." },
      { status: 500 }
    )
  }
}
