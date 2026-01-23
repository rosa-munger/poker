import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AA POKER News - Latest Poker Updates & Tournament Results",
  description: "Stay updated with the latest poker news, tournament results, and AA POKER updates. Read about WSOP, TLPT, APT events and our world-class players.",
  keywords: ["poker news", "tournament results", "WSOP news", "TLPT", "APT", "poker updates", "AA Poker news", "poker tournament"],
  openGraph: {
    title: "AA POKER News - Latest Poker Updates & Tournament Results",
    description: "Stay updated with the latest poker news, tournament results, and AA POKER updates.",
    url: "https://www.aapoker.top/news",
    siteName: "AA POKER",
    type: "website",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SEO Content - Hidden but crawlable by Google */}
      <div className="sr-only">
        <h1>AA POKER News - Latest Poker Updates & Tournament Results</h1>
        <p>The latest brand information, all here. Stay updated with poker tournament results, player achievements, and AA POKER announcements.</p>
        <h2>Featured News Categories</h2>
        <ul>
          <li>WSOP - World Series of Poker coverage and results</li>
          <li>TLPT - The Luxury Poker Tournament updates</li>
          <li>APT - Asian Poker Tour news</li>
          <li>Player Achievements - Championship wins and milestones</li>
          <li>AA POKER Updates - Platform features and announcements</li>
        </ul>
      </div>
      {children}
    </>
  );
}
