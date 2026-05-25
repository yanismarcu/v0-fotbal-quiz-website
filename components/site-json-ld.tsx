const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.romaniastie.com"

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "România Știe",
  url: siteUrl,
  description:
    "Quiz fotbal live în România. Înscrie-te, răspunde la întrebări și concurează pentru premii în bani.",
  inLanguage: "ro-RO",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "România Știe",
  url: siteUrl,
}

export function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  )
}
