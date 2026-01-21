import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";

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
  title: "AA POKER - Premium Online Poker Platform",
  description: "AA POKER - A World With No Cheating. Premium anti-cheat system with AA Green Shield Plus protection.",
  keywords: ["poker", "online poker", "texas holdem", "AA Poker", "green shield"],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactButtons />
      </body>
    </html>
  );
}
