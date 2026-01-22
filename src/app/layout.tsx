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
    title: "AA POKER - Premium Online Poker Platform",
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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    languages: {
      "en": "/",
      "zh-CN": "/?lang=cn",
      "zh-TW": "/?lang=tw",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
