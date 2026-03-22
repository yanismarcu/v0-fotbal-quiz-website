import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const competitionDetails = [
  { label: "Taxa de participare", value: "19.99 RON" },
  { label: "Număr participanți", value: "300 (limitat)" },
  { label: "Format quiz", value: "20 întrebări" },
  { label: "Durată", value: "15 minute" },
  { label: "Premiu Locul 1", value: "400€" },
  { label: "Premiu Locul 2", value: "60€" },
  { label: "Premiu Locul 3", value: "40€" },
]

const premiumPackage = [
  { label: "Întrebări de antrenament", value: "50 întrebări + răspunsuri" },
  { label: "Similitudine", value: "Similar cu quiz-ul oficial" },
  { label: "Preț", value: "9.99 RON" },
  { label: "Status", value: "Opțional" },
]

export function AboutSection() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2937]">
          Despre Noi
        </h2>
        <p className="text-center text-muted-foreground max-w-[700px] mx-auto mb-10 text-pretty">
          Suntem o platformă dedicată competițiilor interactive online, creată pentru pasionații
          de fotbal care vor să-și testeze cunoștințele și să câștige premii reale.
        </p>

        {/* Football Competition Table */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4 flex items-center gap-2">
            <span>⚽</span> Detalii Competiție Quiz Fotbal
          </h3>
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#22C55E]/10">
                  <TableHead className="text-[#1F2937] font-semibold">Caracteristică</TableHead>
                  <TableHead className="text-[#1F2937] font-semibold text-right">Valoare</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competitionDetails.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-[#1F2937]">{item.label}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Premium Package Table */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4 flex items-center gap-2">
            <span>🎓</span> Pachet Premium de Antrenament
            <span className="text-xs bg-[#0EA5E9]/10 text-[#0EA5E9] px-2 py-1 rounded-full font-medium">
              Opțional
            </span>
          </h3>
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0EA5E9]/10">
                  <TableHead className="text-[#1F2937] font-semibold">Caracteristică</TableHead>
                  <TableHead className="text-[#1F2937] font-semibold text-right">Detalii</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {premiumPackage.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-[#1F2937]">{item.label}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Focus Points */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Ne concentrăm pe:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full border border-border text-sm text-[#1F2937]">
              ✅ Transparență totală
            </span>
            <span className="bg-white px-4 py-2 rounded-full border border-border text-sm text-[#1F2937]">
              ✅ Experiență simplă și rapidă
            </span>
            <span className="bg-white px-4 py-2 rounded-full border border-border text-sm text-[#1F2937]">
              ✅ Competiții corecte
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
