import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  icons: { icon: "/img/favicon.png" },
  openGraph: {
    siteName,
    type: "website",
    locale: "en",
    images: [{ url: "/img/symbol.png", alt: "Synx" }],
  },
  twitter: { card: "summary" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Synx",
            url: siteUrl,
            logo: `${siteUrl}/img/symbol.png`,
            description: siteDescription,
            founder: [
              { "@type": "Person", name: "Paal Kristian Levang", jobTitle: "Founder and CEO" },
              { "@type": "Person", name: "Henrik Silverkant" },
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
