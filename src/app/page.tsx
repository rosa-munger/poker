import Hero from "@/components/Hero";
import DownloadButtons from "@/components/DownloadButtons";
import NewsSection from "@/components/NewsSection";
import AATeamSection from "@/components/AATeamSection";
import FriendsSection from "@/components/FriendsSection";
import AAPokerSection from "@/components/AAPokerSection";
import SEOSection from "@/components/SEOSection";
import { Metadata } from "next";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AAPoker | AA Poker Official - aapoker官网 · aapoker下载 · Poker AA",
  description: "AAPoker (AA Poker) official site - aapoker.top. Download AAPoker free for iOS & Android. AAPoker是全球领先的AA Poker在线扑克平台，aapoker官网提供德州扑克、奥马哈等玩法。支持aapoker联盟、AA扑克俱乐部，采用RNG公平竞技。立即aapoker下载！",
  keywords: ["AAPoker", "aapoker", "AA Poker", "aa poker", "poker aa", "aapoker官网", "AA扑克", "aapoker下载", "AApoker联盟", "AApoker俱乐部"],
  openGraph: {
    title: "AAPoker | AA Poker - aapoker官网下载",
    description: "AAPoker官网 (AA Poker) - aapoker.top official. 全球领先AA Poker在线扑克平台，支持aapoker联盟、AA扑克俱乐部。",
    url: "https://www.aapoker.top",
    siteName: "AAPoker",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO H1 - Visible but styled to blend with design */}
      <h1 className="sr-only">AAPoker | AA Poker Official - aapoker官网 · 全球领先在线扑克平台</h1>
      
      {/* SEO Content Block - Hidden but crawlable */}
      <section className="sr-only" aria-label="AAPoker SEO Content">
        <h2>AAPoker (AA Poker) - aapoker官网</h2>
        <p>Welcome to AAPoker (AA Poker) official website - aapoker.top. AAPoker is the world's leading online poker platform. Download AAPoker app for iOS and Android devices. 欢迎来到AAPoker（AA Poker）官网 - aapoker.top。AAPoker是全球领先的在线扑克平台。</p>
        <h2>aapoker下载 - Download AAPoker App</h2>
        <p>aapoker下载支持安卓和iOS设备。AAPoker app download is available for Android and iOS. 立即下载aapoker，体验最优质的AA Poker在线扑克游戏。</p>
        <h2>aapoker联盟 与 AA扑克俱乐部</h2>
        <p>aapoker联盟和AA扑克俱乐部为玩家提供社交扑克体验。Join AAPoker clubs and leagues for the best AA Poker experience. 平台采用RNG随机数生成器，拒绝AI作弊，确保公平竞技。</p>
        <h2>Poker AA - 德州扑克与奥马哈</h2>
        <p>AAPoker提供Poker AA经典玩法：德州扑克（Texas Hold'em）、奥马哈（Omaha）、锦标赛等。Play Poker AA games including Texas Hold'em, Omaha, and tournaments on AAPoker.</p>
        <h2>为什么选择AAPoker (AA Poker)?</h2>
        <p>AAPoker是最值得信赖的AA Poker平台。aapoker官网提供安全、公平、纯粹的扑克体验。Choose AAPoker for the most trusted AA Poker experience. Visit aapoker.top today!</p>
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

      {/* SEO Section - Visible content for Google ranking */}
      <SEOSection />
    </>
  );
}
