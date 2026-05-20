"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PlatestePageComponent() {
  const [includePremium, setIncludePremium] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
  })

  const participationFee = 14.99
  const premiumFee = 4.99
  const total = includePremium ? participationFee + premiumFee : participationFee

  const handlePay = async () => {
    setError(null)
    if (!formData.nume.trim()) {
      setError("Completează numele complet.")
      return
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Introdu un email valid.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nume: formData.nume.trim(),
          email: formData.email.trim(),
          telefon: formData.telefon.trim(),
          includePremium,
        }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        setError(data.error ?? "Plata nu a putut fi pornită.")
        return
      }
      if (data.url) {
        window.location.href = data.url
        return
      }
      setError("Răspuns neașteptat de la server.")
    } catch {
      setError("Verifică conexiunea și încearcă din nou.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-[1000px] mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#1F2937] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Înapoi la pagina principală</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1F2937]">Date personale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="nume">Nume complet</FieldLabel>
                      <Input
                        id="nume"
                        placeholder="Ion Popescu"
                        value={formData.nume}
                        onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                        className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ion@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="telefon">Telefon (opțional)</FieldLabel>
                      <Input
                        id="telefon"
                        type="tel"
                        placeholder="0722 123 456"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </Field>
                  </FieldGroup>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-[#F9FAFB] sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#1F2937]">Sumar comandă</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {error ? (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ) : null}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1F2937]">Taxă participare</span>
                    <span className="font-semibold text-[#1F2937]">{participationFee.toFixed(2)} RON</span>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-[#E5E7EB]">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="premium"
                        checked={includePremium}
                        onCheckedChange={(checked) => setIncludePremium(checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <label htmlFor="premium" className="font-medium text-[#1F2937] cursor-pointer">
                          Pachet premium antrenament
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">
                          50 întrebări + răspunsuri similare cu quiz-ul oficial
                        </p>
                        <p className="text-sm font-semibold text-[#0EA5E9] mt-1">
                          +{premiumFee.toFixed(2)} RON
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E7EB] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#1F2937]">Total</span>
                      <span className="text-xl font-bold text-[#22C55E]">{total.toFixed(2)} RON</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1 text-center p-2">
                    <Lock className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-xs text-muted-foreground">Stripe securizat</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center p-2">
                    <MessageCircle className="w-5 h-5 text-[#0EA5E9]" />
                    <span className="text-xs text-muted-foreground">Suport 24/7</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center p-2">
                    <CheckCircle className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-xs text-muted-foreground">Tranzacții sigure</span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handlePay}
                  disabled={loading}
                  className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-6 text-lg rounded-[14px] disabled:opacity-70"
                >
                  <span>👉</span>
                  <span className="ml-2">{loading ? "Se deschide plata…" : "Plătește și participă"}</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
