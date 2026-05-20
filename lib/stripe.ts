import Stripe from "stripe"

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY lipsește din variabilele de mediu.")
  }
  return new Stripe(key)
}
