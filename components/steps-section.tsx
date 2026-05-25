import type { LucideIcon } from "lucide-react"
import { CreditCard, Users, Timer, Trophy } from "lucide-react"

type Step = {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const steps: Step[] = [
  {
    icon: CreditCard,
    title: "Înscriere",
    description:
      "Pe site completezi datele tale și alegi metoda de plată preferată (card, Apple Pay sau alte opțiuni disponibile). După ce plata este confirmată, ești adăugat automat într-un grup exclusiv pentru participanți — acolo vei primi confirmarea și pașii următori.",
    accent: "#22C55E",
  },
  {
    icon: Users,
    title: "Grup exclusiv & competiție",
    description:
      "În ziua concursului, toate detaliile importante — ora de start, linkul către quiz, regulile finale și reminder-ele — sunt trimise în același grup exclusiv. Nu trebuie să cauți informații pe email; totul e centralizat pentru participanți.",
    accent: "#0EA5E9",
  },
  {
    icon: Timer,
    title: "Răspunzi la întrebări",
    description:
      "La ora stabilită intri în quiz și ai 15 minute pentru 20 de întrebări despre fotbal. Răspunde cât mai corect și rapid: fiecare secundă contează pentru poziția ta în clasament.",
    accent: "#22C55E",
  },
  {
    icon: Trophy,
    title: "Clasament & premii",
    description:
      "După quiz, clasamentul se calculează automat. Câștigătorii sunt desemnați după cele mai multe răspunsuri corecte; la egalitate, câștigă participanul cu cel mai scurt timp. Top 3 primesc premii în bani reali.",
    accent: "#0EA5E9",
  },
]

export function StepsSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-10 md:h-14"
        style={{
          background:
            "linear-gradient(to bottom, #F8FAFC 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-14"
        style={{
          background:
            "linear-gradient(to top, #F8FAFC 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-white md:text-3xl mb-10 md:mb-12">
          Cum funcționează?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={index}
              className="flex h-full flex-col rounded-2xl border border-[#E5E7EB]/10 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${step.accent}18` }}
              >
                <step.icon
                  className="h-5 w-5"
                  style={{ color: step.accent }}
                  strokeWidth={2}
                />
              </div>
              <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-[#1F2937]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#64748B]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
