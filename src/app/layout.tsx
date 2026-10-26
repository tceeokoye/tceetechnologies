import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tceetechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TCEE TECH - Engineering Digital Products",
  description: "Engineering Digital Products That Drive Business Growth",
  openGraph: {
    title: "TCEE TECH - Engineering Digital Products",
    description: "Engineering Digital Products That Drive Business Growth",
    url: siteUrl,
    siteName: "TCEE TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCEE TECH - Engineering Digital Products",
    description: "Engineering Digital Products That Drive Business Growth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${hedvigSerif.variable} font-sans antialiased`}>
        {children}
        {tawkPropertyId && tawkWidgetId && (
          <Script
            src={`https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`}
            strategy="lazyOnload"
          />
        )}

        
      </body>
    </html>
  );
}
