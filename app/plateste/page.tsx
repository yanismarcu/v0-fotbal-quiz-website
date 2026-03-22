"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export default function PlatestePageComponent() {
  const [includePremium, setIncludePremium] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const participationFee = 19.99
  const premiumFee = 9.99
  const total = includePremium ? participationFee + premiumFee : participationFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#1F2937] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Înapoi la pagina principală</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* Personal Data Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1F2937]">Date personale</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
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
                      <FieldLabel htmlFor="telefon">Telefon</FieldLabel>
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
                </form>
              </CardContent>
            </Card>

            {/* Card Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1F2937]">Detalii plată</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="cardNumber">Număr card</FieldLabel>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="expiry">Expirare</FieldLabel>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="cvv">CVV</FieldLabel>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        />
                      </Field>
                    </div>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <Card className="bg-[#F9FAFB] sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#1F2937]">Sumar comandă</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Items */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1F2937]">Taxă participare</span>
                    <span className="font-semibold text-[#1F2937]">{participationFee.toFixed(2)} RON</span>
                  </div>

                  {/* Premium Package Option */}
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

                {/* Security Badges */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-1 text-center p-2">
                    <Lock className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-xs text-muted-foreground">Plată securizată</span>
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

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-6 text-lg rounded-[14px]"
                >
                  <span>👉</span>
                  <span className="ml-2">Plătește și participă</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#22C55E]" />
            </div>
            <DialogTitle className="text-center text-xl text-[#1F2937]">
              Plata a fost realizată cu succes!
            </DialogTitle>
            <DialogDescription className="text-center">
              Ești înscris în competiție 🎉
              <br />
              Vei primi toate detaliile pe email.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
            >
              👉 Mergi la dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
