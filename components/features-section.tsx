import { Trophy, Video, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Trophy,
    title: "Premii Garantate",
    description: "Câștigă bani reali dacă ajungi în top 3.",
    color: "#22C55E",
  },
  {
    icon: Video,
    title: "Extragere Live",
    description: "Totul este transparent, vezi rezultatele în timp real.",
    color: "#0EA5E9",
  },
  {
    icon: Zap,
    title: "Rapid și Distractiv",
    description: "Doar 15 minute de competiție intensă.",
    color: "#22C55E",
  },
  {
    icon: Shield,
    title: "Corectitudine 100%",
    description: "Sistem securizat, fără trișări.",
    color: "#0EA5E9",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1F2937]">
          De ce să participi?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border border-border shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-200"
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#1F2937]">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
