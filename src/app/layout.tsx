import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
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
  title: "AAPoker | AA Poker Official - aapoker官网 · AA扑克下载 · Poker AA App",
  description: "AAPoker (AA Poker) official website - aapoker.top. Download AAPoker app for iOS & Android. AAPoker是全球领先的在线扑克平台，提供德州扑克、奥马哈等玩法。aapoker官网支持AApoker联盟、AA扑克俱乐部，采用RNG随机数生成器，公平竞技，拒绝AI作弊。立即aapoker下载！",
  keywords: ["AAPoker", "aapoker", "AA Poker", "aa poker", "poker aa", "Poker AA", "aapoker官网", "AApoker官网", "AA扑克", "AA扑克官网", "aapoker下载", "AApoker下载", "AA扑克下载", "AApoker联盟", "AApoker俱乐部", "AA扑克联盟", "AA扑克俱乐部", "德州扑克", "奥马哈", "online poker", "poker app"],
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
    locale: "zh_CN",
    url: "https://www.aapoker.top",
    siteName: "AAPoker",
    title: "AAPoker | AA Poker Official - aapoker官网下载",
    description: "AAPoker (AA Poker) - aapoker.top official site. Download AAPoker for free. 全球领先在线扑克平台，支持AApoker联盟、AA扑克俱乐部，公平竞技。",
    images: [
      {
        url: "https://www.aapoker.top/image/icon.png",
        width: 512,
        height: 512,
        alt: "AAPoker Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAPoker | AA Poker - aapoker官网下载 · Poker AA App",
    description: "AAPoker (AA Poker) official - aapoker.top. Free download for iOS & Android. 公平竞技在线扑克平台。",
    images: ["https://www.aapoker.top/image/icon.png"],
  },
  alternates: {
    canonical: "https://www.aapoker.top",
    languages: {
      "en": "https://www.aapoker.top/",
      "zh-CN": "https://www.aapoker.top/?lang=cn",
      "zh-TW": "https://www.aapoker.top/?lang=tw",
    },
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AAPoker",
  alternateName: ["AA Poker", "aapoker", "aa poker", "Poker AA"],
  url: "https://www.aapoker.top",
  logo: {
    "@type": "ImageObject",
    url: "https://www.aapoker.top/image/icon.png",
    width: "121",
    height: "23"
  },
  description: "AAPoker (AA Poker) official website - aapoker.top. AAPoker is the world's leading online poker platform. Download aapoker app for iOS & Android. AAPoker（AA Poker）官网 - 全球领先的在线扑克平台，支持aapoker联盟、AA扑克俱乐部。",
  sameAs: [
    "https://www.youtube.com/@aapoker",
    "https://www.facebook.com/aapoker",
    "https://www.instagram.com/aapoker"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "mixue66@outlook.com",
    contactType: "customer service"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AAPoker",
  alternateName: ["AA Poker", "aapoker"],
  url: "https://www.aapoker.top",
  description: "AAPoker (AA Poker) - aapoker.top official website. The world's leading online poker platform. aapoker官网 - 全球领先AA Poker在线扑克平台。",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.aapoker.top/news?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AAPoker",
  alternateName: ["AA Poker App", "aapoker app"],
  operatingSystem: "iOS, Android",
  applicationCategory: "GameApplication",
  description: "AAPoker (AA Poker) app - Download aapoker for iOS & Android. Play Texas Hold'em, Omaha and tournaments. AAPoker（AA Poker）应用 - aapoker下载，德州扑克、奥马哈等玩法。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  downloadUrl: "https://www.aapoker.top/download"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Preconnect to critical third-party origins for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.aapoker.top" />
        
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href="https://www.aapoker.top/" />
        <link rel="alternate" hrefLang="zh-CN" href="https://www.aapoker.top/?lang=cn" />
        <link rel="alternate" hrefLang="zh-TW" href="https://www.aapoker.top/?lang=tw" />
        <link rel="alternate" hrefLang="x-default" href="https://www.aapoker.top/" />
        
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
          <ServiceWorkerRegister />
          <Header />
          <main>{children}</main>
          <Footer />
          <ContactButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
