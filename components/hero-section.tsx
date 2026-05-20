import Link from "next/link"
import { Trophy, Users, HelpCircle, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#16A34A] px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span>✨</span>
          <span>1000 locuri limitate</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          <span className="text-[#22C55E]">România Știe</span>
          <br />
          <span className="text-[#1F2937]">Quiz Fotbal</span>
        </h1>

        {/* Prizes */}
        <div className="flex justify-center gap-6 md:gap-12 mb-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#22C55E]">400€</div>
            <div className="text-sm text-muted-foreground">Locul 1</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#1F2937]">60€</div>
            <div className="text-sm text-muted-foreground">Locul 2</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#1F2937]">40€</div>
            <div className="text-sm text-muted-foreground">Locul 3</div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
          Testează-ți cunoștințele despre fotbal și câștigă premii în bani.
          <br />
          Competiție live cu extragere transparentă.
        </p>

        {/* CTA */}
        <Link
          href="/plateste"
          className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold px-8 py-4 rounded-[14px] shadow-lg transition-all hover:shadow-xl text-lg"
        >
          <span>👉</span>
          <span>Participă acum</span>
        </Link>
        <p className="text-sm text-muted-foreground mt-3">doar 14.99 RON</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Trophy className="w-6 h-6 text-[#22C55E]" />
            <span className="font-semibold">500€</span>
            <span className="text-sm text-muted-foreground">premii totale</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-6 h-6 text-[#0EA5E9]" />
            <span className="font-semibold">1000</span>
            <span className="text-sm text-muted-foreground">locuri</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#22C55E]" />
            <span className="font-semibold">20</span>
            <span className="text-sm text-muted-foreground">întrebări</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-6 h-6 text-[#0EA5E9]" />
            <span className="font-semibold">15</span>
            <span className="text-sm text-muted-foreground">minute</span>
          </div>
        </div>
      </div>
    </section>
  )
}
