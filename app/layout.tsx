import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | NLP for Underrepresented Languages`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | NLP for Underrepresented Languages`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | NLP for Underrepresented Languages`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Computational Linguistics Student",
  affiliation: { "@type": "CollegeOrUniversity", name: "Universit\u00e9 Paris Cit\u00e9" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "China West Normal University" },
    { "@type": "CollegeOrUniversity", name: "Kabul University" },
  ],
  knowsLanguage: ["fa", "en", "fr"],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-canvas text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
