import Hero from "@/components/Hero";
import DownloadButtons from "@/components/DownloadButtons";
import NewsSection from "@/components/NewsSection";
import AATeamSection from "@/components/AATeamSection";
import FriendsSection from "@/components/FriendsSection";
import AAPokerSection from "@/components/AAPokerSection";
import { Metadata } from "next";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AA POKER - Premium Online Poker Platform | Texas Hold'em & Omaha",
  description: "AA POKER - A World With No Cheating. Join the premium online poker platform with AA Green Shield Plus anti-cheat protection. Play Texas Hold'em, Omaha, and more with players worldwide.",
  keywords: ["AA Poker", "online poker", "Texas Hold'em", "Omaha poker", "poker app", "mobile poker", "fair poker", "anti-cheat poker", "TLPT", "poker tournament"],
  openGraph: {
    title: "AA POKER - Premium Online Poker Platform",
    description: "AA POKER - A World With No Cheating. Premium anti-cheat system with AA Green Shield Plus protection.",
    url: "https://www.aapoker.top",
    siteName: "AA POKER",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO H1 - Hidden visually but crawlable by Google */}
      <h1 className="sr-only">AA POKER - Premium Online Poker Platform with Anti-Cheat Protection</h1>
      
      {/* SEO Content Block - Real text for Google to crawl */}
      <section className="sr-only" aria-label="SEO Content">
        <h2>Welcome to AA POKER - The World&apos;s Leading Online Poker Platform</h2>
        <p>AA POKER is the premium online poker platform featuring Texas Hold&apos;em, Omaha, and innovative game modes. With AA Green Shield Plus anti-cheat protection, we ensure a fair gaming environment for all players worldwide.</p>
        <h2>AA POKER Features</h2>
        <p>Experience the most comprehensive gameplay with Texas Hold&apos;em, Short Deck, Omaha, Squid Game Mode, Video Table, and more. Our platform offers diverse table styles including classic, theater, space, underwater, and beach themes.</p>
        <h2>World-Class Poker Champions</h2>
        <p>Join our community featuring world champions like Joe Hachem, Dan Cates, Zhou Quan, Jungleman, and Chen Dong. TLPT events originated in Sydney, Australia promote international competitive poker.</p>
        <h2>Multi-Dimensional Protection</h2>
        <p>GLI certified fair gameplay with GPS/IP protection, 24/7 anti-cheating team monitoring, prohibiting data collection tools, simulators, and AI bots.</p>
      </section>

      {/* Hero Slider Section - 4 images + 1 video, auto-scroll 2s */}
      <Hero />

      {/* Download Buttons - iOS, Android, Backup Android */}
      <DownloadButtons />

      {/* News Section */}
      <NewsSection />

      {/* AA Team Section */}
      <AATeamSection />

      {/* Friends with AA Section */}
      <FriendsSection />

      {/* AA POKER Section - 4 parts: aa poker, visual impact, experience, multi-dimensional */}
      <AAPokerSection />
    </>
  );
}
