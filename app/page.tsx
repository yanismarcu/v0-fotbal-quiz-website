import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StepsSection } from "@/components/steps-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
