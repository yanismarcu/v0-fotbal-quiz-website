import { NextResponse } from "next/server"
import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"
import { fulfillCheckoutSession } from "@/lib/fulfill-checkout-session"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * Stripe trimite corpul brut; trebuie păstrat exact pentru verificarea semnăturii.
 * În Dashboard: Developers → Webhooks → Add endpoint → URL: https://domeniu.ro/api/webhooks/stripe
 * Evenimente recomandate: checkout.session.completed, checkout.session.async_payment_succeeded
 */
export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error("[stripe-webhook] STRIPE_WEBHOOK_SECRET lipsește")
    return NextResponse.json(
      { error: "Webhook neconfigurat pe server." },
      { status: 500 }
    )
  }

  const signature = request.headers.get("stripe-signature")
  if (!signature) {
    return NextResponse.json({ error: "Lipsește antetul stripe-signature." }, { status: 400 })
  }

  const rawBody = await request.text()

  let event: Stripe.Event
  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error("[stripe-webhook] Verificare semnătură eșuată:", err)
    return NextResponse.json({ error: "Semnătură invalidă." }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        await fulfillCheckoutSession(session)
        break
      }
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session
        await fulfillCheckoutSession(session)
        break
      }
      default:
        break
    }
  } catch (err) {
    console.error("[stripe-webhook] Eroare în handler:", err)
    return NextResponse.json({ error: "Procesare eșuată." }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
