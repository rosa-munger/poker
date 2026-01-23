import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AA POKER - Premium Online Poker Platform | Texas Hold'em & Omaha",
  description: "AA POKER - A World With No Cheating. Join the premium online poker platform with AA Green Shield Plus anti-cheat protection. Play Texas Hold'em, Omaha, and more with players worldwide. Download now!",
  keywords: ["poker", "online poker", "texas holdem", "AA Poker", "green shield", "poker app", "mobile poker", "poker tournament", "TLPT", "omaha poker", "poker club", "fair poker", "anti-cheat poker"],
  authors: [{ name: "AA POKER" }],
  creator: "AA POKER",
  publisher: "AA POKER",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aapoker.top",
    siteName: "AA POKER",
    title: "AA POKER",
    description: "AA POKER - A World With No Cheating. Premium anti-cheat system with AA Green Shield Plus protection.",
    images: [
      {
        url: "/image/home/logo/logotext-XjxNBhSC.png",
        width: 800,
        height: 600,
        alt: "AA POKER Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AA POKER - Premium Online Poker Platform",
    description: "AA POKER - A World With No Cheating. Premium anti-cheat system with AA Green Shield Plus protection.",
    images: ["/image/home/logo/logotext-XjxNBhSC.png"],
  },
  icons: {
    icon: "/image/icon-logo-tab.png",
    apple: "/image/icon-logo-tab.png",
    shortcut: "/image/icon-logo-tab.png",
  },
  alternates: {
    languages: {
      "en": "/",
      "zh-CN": "/?lang=cn",
      "zh-TW": "/?lang=tw",
    },
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AA POKER",
  url: "https://www.aapoker.top",
  logo: "https://www.aapoker.top/image/home/logo/logotext-XjxNBhSC.png",
  description: "AA POKER - Premium Online Poker Platform with Anti-Cheat Protection. Play Texas Hold'em, Omaha, and more.",
  sameAs: [
    "https://www.youtube.com/@aapoker",
    "https://www.facebook.com/aapoker",
    "https://www.instagram.com/aapoker"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@aapoker.app",
    contactType: "customer service"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AA POKER",
  url: "https://www.aapoker.top",
  description: "Premium Online Poker Platform with Anti-Cheat Protection",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.aapoker.top/news?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AA POKER",
  operatingSystem: "iOS, Android",
  applicationCategory: "GameApplication",
  description: "Premium online poker app with Texas Hold'em, Omaha, and anti-cheat protection.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ContactButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
