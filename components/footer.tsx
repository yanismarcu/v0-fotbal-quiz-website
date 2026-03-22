import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] py-8">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-[#1F2937] transition-colors">
              Termeni și condiții
            </Link>
            <Link href="#" className="hover:text-[#1F2937] transition-colors">
              Politică de confidențialitate
            </Link>
            <Link href="#" className="hover:text-[#1F2937] transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-[#1F2937] transition-colors">
              Suport
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Quiz Fotbal România. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
