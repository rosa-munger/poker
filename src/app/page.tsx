import Hero from "@/components/Hero";
import DownloadButtons from "@/components/DownloadButtons";
import NewsSection from "@/components/NewsSection";
import AATeamSection from "@/components/AATeamSection";
import FriendsSection from "@/components/FriendsSection";
import AAPokerSection from "@/components/AAPokerSection";

export default function Home() {
  return (
    <>
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
