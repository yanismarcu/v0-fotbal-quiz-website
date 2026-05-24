import { Trophy, Video, Zap, Shield } from "lucide-react"
const features = [
  {
    icon: Trophy,
    title: "Premii Garantate",
    description: "Câștigă bani reali dacă ajungi în top 3.",
    accent: "#22C55E",
  },
  {
    icon: Video,
    title: "Extragere Live",
    description: "Totul este transparent, vezi rezultatele în timp real.",
    accent: "#0EA5E9",
  },
  {
    icon: Zap,
    title: "Rapid și Distractiv",
    description: "Doar 15 minute de competiție intensă.",
    accent: "#22C55E",
  },
  {
    icon: Shield,
    title: "Corectitudine 100%",
    description: "Sistem securizat, fără trișări.",
    accent: "#0EA5E9",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #ECFDF5 0%, #F0F9FF 50%, #E0F2FE 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 md:h-40"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.9) 30%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 md:h-40"
        style={{
          background:
            "linear-gradient(to top, #F8FAFC 0%, rgba(248,250,252,0.92) 35%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-24 right-0 -z-10 h-64 w-64 rounded-full opacity-25 blur-3xl"
        style={{ background: "#22C55E" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 left-0 -z-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "#0EA5E9" }}
        aria-hidden
      />

      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-14 text-[#1F2937]">
          De ce să participi?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              <div
                className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 bg-white/60 backdrop-blur-sm shadow-sm"
                style={{ borderColor: feature.accent }}
              >
                <feature.icon
                  className="h-8 w-8"
                  style={{ color: feature.accent }}
                  strokeWidth={1.75}
                />
              </div>
              <h3
                className="mb-2 text-sm font-bold uppercase tracking-wide md:text-base"
                style={{ color: feature.accent }}
              >
                {feature.title}
              </h3>
              <p className="max-w-[220px] text-sm leading-relaxed text-[#64748B]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

