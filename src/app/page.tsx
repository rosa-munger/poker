import Hero from "@/components/Hero";
import DownloadButtons from "@/components/DownloadButtons";
import NewsSection from "@/components/NewsSection";
import AATeamSection from "@/components/AATeamSection";
import FriendsSection from "@/components/FriendsSection";
import AAPokerSection from "@/components/AAPokerSection";
import { Metadata } from "next";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AAPoker丨AApoker官网丨AApoker联盟｜AA扑克官网 · AA扑克俱乐部 · AApoker下载",
  description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。AApoker官网提供德州扑克、奥马哈等多种玩法，支持 AApoker联盟、AApoker俱乐部、AA扑克联盟、AA扑克俱乐部 等模式，采用随机数生成器（RNG），拒绝 AI，杜绝作弊。提供 AApoker下载、AA扑克下载，安卓 iOS 均可畅玩。",
  keywords: ["AAPoker", "AApoker官网", "AApoker联盟", "AApoker俱乐部", "AApoker下载", "AA扑克", "AA扑克官网", "AA扑克联盟", "AA扑克俱乐部", "AA扑克下载", "德州扑克", "奥马哈"],
  openGraph: {
    title: "AAPoker丨AApoker官网丨AA扑克官网 · AApoker下载",
    description: "AAPoker（AA扑克）是专注于公平竞技的在线扑克平台。采用随机数生成器（RNG），拒绝 AI，杜绝作弊。",
    url: "https://www.aapoker.top",
    siteName: "AAPoker",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO H1 - Hidden visually but crawlable by Google */}
      <h1 className="sr-only">AAPoker｜AApoker官网 · 公平安全的在线扑克平台</h1>
      
      {/* SEO Content Block - Real text for Google to crawl */}
      <section className="sr-only" aria-label="SEO Content">
        <h2>AAPoker｜AApoker官网 · 公平安全的在线扑克平台</h2>
        <p>AAPoker（AA扑克） 是一个专注于打造公平游戏环境的在线扑克平台，致力于为玩家提供安全爱好者提供稳定流畅的游戏系统和多样化的扑克玩法。</p>
        <h2>AApoker联盟 与 AA扑克联盟</h2>
        <p>平台所有游戏结果均由 随机数生成器（RNG） 控制，确保牌局结果的公正性与随机性，拒绝 AI，杜绝任何作弊行为的发生。无论是在 AApoker联盟 还是 AA扑克联盟 体系中，玩家都可以安心参与每一场对局，专注竞技本身。</p>
        <h2>AApoker俱乐部 与 AA扑克俱乐部</h2>
        <p>AApoker俱乐部 与 AA扑克俱乐部 功能，为玩家提供更具社交属性的扑克体验。你可以加入不同俱乐部，与好友同桌对战，参与俱乐部专属赛事，提升互动性与游戏乐趣。平台覆盖 德州扑克、奥马哈、锦标赛等经典玩法，适合休闲玩家与竞技玩家长期参与。</p>
        <h2>AA扑克官网 与 AApoker下载</h2>
        <p>作为专业的 AA扑克官网，AAPoker 持续优化系统性能与安全防护机制，为用户提供稳定可靠的服务体验。玩家可通过 AApoker下载 或 AA扑克下载，在安卓与 iOS 设备上随时随地开启牌局，畅享高质量的在线扑克竞技。</p>
        <h2>选择 AAPoker</h2>
        <p>选择 AAPoker，就是选择一个 公平、安全、纯粹 的扑克平台。</p>
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
