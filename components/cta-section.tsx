import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0EA5E9] to-[#22C55E]">
      <div className="max-w-[700px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Ești pregătit să câștigi?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Intră în competiție și demonstrează că știi fotbal.
        </p>
        <Link
          href="/plateste"
          className="inline-flex items-center gap-2 bg-white text-[#0EA5E9] font-semibold px-8 py-4 rounded-[14px] shadow-lg transition-all hover:shadow-xl hover:scale-105 text-lg"
        >
          <span>👉</span>
          <span>Participă acum</span>
        </Link>
      </div>
    </section>
  )
}
