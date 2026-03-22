const steps = [
  {
    number: 1,
    title: "Înscriere",
    description: "Completezi datele și plătești taxa de participare.",
  },
  {
    number: 2,
    title: "Acces competiție",
    description: "Primești acces la quiz în ziua concursului.",
  },
  {
    number: 3,
    title: "Răspunzi la întrebări",
    description: "20 de întrebări în 15 minute.",
  },
  {
    number: 4,
    title: "Clasament",
    description: "Scorul este calculat automat.",
  },
  {
    number: 5,
    title: "Câștigi premii",
    description: "Top 3 primesc bani reali 💸",
  },
]

export function StepsSection() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1F2937]">
          Cum funcționează?
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1 relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-[#E5E7EB]" />
              )}
              {/* Number circle */}
              <div className="w-12 h-12 rounded-full bg-[#22C55E] text-white flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="font-semibold text-[#1F2937] mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[180px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
