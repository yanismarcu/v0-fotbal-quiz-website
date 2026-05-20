import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  searchParams: Promise<{ session_id?: string }>
}

export default async function PlatesteSuccesPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-lg mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#1F2937] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Înapoi la pagina principală</span>
        </Link>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#22C55E]" />
            </div>
            <CardTitle className="text-xl text-[#1F2937]">
              Plata a fost realizată cu succes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center text-muted-foreground">
            <p>
              Ești înscris în competiție. Vei primi detaliile pe email după confirmarea plății de la Stripe.
            </p>
            {sessionId ? (
              <p className="text-xs font-mono break-all opacity-70">
                Referință: {sessionId}
              </p>
            ) : null}
            <Button asChild className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white">
              <Link href="/">Înapoi acasă</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
