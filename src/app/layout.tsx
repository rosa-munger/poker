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
  title: "AAPoker - AApoker官网 | AA扑克官网 · AApoker下载 · Poker AA",
  description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。AApoker官网提供德州扑克、奥马哈等多种玩法，支持 AApoker联盟、AApoker俱乐部、AA扑克联盟、AA扑克俱乐部 等模式，采用随机数生成器（RNG），拒绝 AI，杜绝作弊。提供 AApoker下载、AA扑克下载，安卓 iOS 均可畅玩。",
  keywords: ["AAPoker", "aapoker", "poker aa", "AApoker官网", "AA扑克", "AA扑克官网", "AApoker下载", "AA扑克下载", "AApoker联盟", "AApoker俱乐部", "AA扑克联盟", "AA扑克俱乐部", "德州扑克", "奥马哈", "在线扑克平台", "poker app", "online poker"],
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
    title: "AAPoker - AApoker官网 | AA扑克官网 · AApoker下载 · Poker AA",
    description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。AApoker官网提供德州扑克、奥马哈等多种玩法，支持 AApoker联盟、AApoker俱乐部、AA扑克联盟、AA扑克俱乐部 等模式，采用随机数生成器（RNG），拒绝 AI，杜绝作弊。",
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
    title: "AAPoker - AApoker官网 | AA扑克官网下载 · Poker AA",
    description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。提供德州扑克、奥马哈等多种玩法，拒绝 AI，杜绝作弊。",
    images: ["https://www.aapoker.top/image/icon.png"],
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
  name: "AAPoker",
  url: "https://www.aapoker.top",
  logo: {
    "@type": "ImageObject",
    url: "https://www.aapoker.top/image/icon.png",
    width: "121",
    height: "23"
  },
  description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。AApoker官网提供德州扑克、奥马哈等多种玩法，支持 AApoker联盟、AApoker俱乐部、AA扑克联盟、AA扑克俱乐部 等模式，采用随机数生成器（RNG），拒绝 AI，杜绝作弊。提供 AApoker下载、AA扑克下载，安卓 iOS 均可畅玩。",
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
  url: "https://www.aapoker.top",
  description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台，支持 AApoker联盟、AA扑克俱乐部。",
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
  operatingSystem: "iOS, Android",
  applicationCategory: "GameApplication",
  description: "AAPoker（AA扑克）在线扑克应用，提供德州扑克、奥马哈等玩法，采用RNG随机数生成器，拒绝 AI，杜绝作弊。",
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
    <html lang="zh-CN">
      <head>
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
