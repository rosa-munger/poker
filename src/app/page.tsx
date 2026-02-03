import Hero from "@/components/Hero";
import DownloadButtons from "@/components/DownloadButtons";
import NewsSection from "@/components/NewsSection";
import AATeamSection from "@/components/AATeamSection";
import FriendsSection from "@/components/FriendsSection";
import AAPokerSection from "@/components/AAPokerSection";
import { Metadata } from "next";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AAPoker - AApoker官网 | AA扑克官网 · AApoker下载 · AApoker联盟俱乐部",
  description: "AAPoker官网（aapoker.top）- AA扑克是专注公平竞技的在线扑克平台。AAPoker提供德州扑克、奥马哈等玩法，支持AApoker联盟、AApoker俱乐部模式。采用RNG随机数生成器，拒绝AI作弊。立即AApoker下载，安卓iOS畅玩！",
  keywords: ["AAPoker", "aapoker", "AApoker官网", "AA扑克", "AA扑克官网", "AApoker下载", "AApoker联盟", "AApoker俱乐部"],
  openGraph: {
    title: "AAPoker - AApoker官网 | AA扑克官网下载",
    description: "AAPoker官网 - AA扑克专注公平竞技的在线扑克平台。支持AApoker联盟、AApoker俱乐部，采用RNG，拒绝AI作弊。",
    url: "https://www.aapoker.top",
    siteName: "AAPoker",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO H1 - Hidden visually but crawlable by Google */}
      <h1 className="sr-only">AAPoker - AApoker官网 | AA扑克官网 - 公平安全的在线扑克平台</h1>
      
      {/* SEO Content Block - Real text for Google to crawl */}
      <section className="sr-only" aria-label="SEO Content">
        <h2>AAPoker是什么？</h2>
        <p>AAPoker（也称AA扑克）是一个专注于打造公平游戏环境的在线扑克平台。AAPoker官网（aapoker.top）致力于为玩家提供稳定流畅的游戏系统和多样化的扑克玩法。</p>
        <h2>AAPoker官网特色</h2>
        <p>AAPoker平台所有游戏结果均由随机数生成器（RNG）控制，确保牌局结果的公正性与随机性，拒绝AI，杜绝任何作弊行为。</p>
        <h2>AApoker联盟与AApoker俱乐部</h2>
        <p>无论是在AApoker联盟还是AA扑克联盟体系中，玩家都可以安心参与每一场对局。AApoker俱乐部与AA扑克俱乐部功能，为玩家提供更具社交属性的扑克体验。平台覆盖德州扑克、奥马哈、锦标赛等经典玩法。</p>
        <h2>AApoker下载</h2>
        <p>作为专业的AA扑克官网，AAPoker持续优化系统性能与安全防护机制。玩家可通过AApoker下载或AA扑克下载，在安卓与iOS设备上随时随地开启牌局，畅享高质量的在线扑克竞技。</p>
        <h2>为什么选择AAPoker？</h2>
        <p>选择AAPoker，就是选择一个公平、安全、纯粹的扑克平台。立即访问AAPoker官网 aapoker.top 开始您的扑克之旅！</p>
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
