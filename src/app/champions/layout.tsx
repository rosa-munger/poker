import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AA POKER Champions - World-Class Poker Players | Joe Hachem, Jungleman, Zhou Quan",
  description: "Meet our world-class poker champions including Joe Hachem (2005 WSOP Main Event Champion), Jungleman, Zhou Quan, Chen Dong, Bryn Kenney, and more. Join the AA POKER community.",
  keywords: ["poker champions", "Joe Hachem", "Jungleman", "Zhou Quan", "Chen Dong", "Bryn Kenney", "WSOP champion", "poker players", "AA Poker team"],
  openGraph: {
    title: "AA POKER Champions - World-Class Poker Players",
    description: "Meet our world-class poker champions including Joe Hachem, Jungleman, Zhou Quan, and more.",
    url: "https://www.aapoker.top/champions",
    siteName: "AA POKER",
    type: "website",
  },
};

export default function ChampionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SEO Content - Hidden but crawlable by Google */}
      <div className="sr-only">
        <h1>AA POKER Champions - World-Class Poker Players</h1>
        <p>The Peak Showdown Venue - The Birthplace of Legends. AA Friends Circle brings the world&apos;s top poker masters and new forces together.</p>
        <h2>Featured Champions</h2>
        <ul>
          <li>Bryn Kenney - All-time money list leader with over $57 million in tournament earnings</li>
          <li>Jungleman (Dan Cates) - High stakes legend and multiple bracelet winner</li>
          <li>Joe Hachem - 2005 WSOP Main Event Champion from Australia</li>
          <li>Zhou Quan - Chinese poker superstar and AA POKER Global Ambassador</li>
          <li>Chen Dong - Rising star in Asian poker circuit</li>
          <li>Didier Guerin - European poker professional</li>
        </ul>
        <h2>TLPT - The Luxury Poker Tournament</h2>
        <p>TLPT originated in Sydney, Australia and is a global elite event aimed at promoting the globalization of international competitive poker.</p>
      </div>
      {children}
    </>
  );
}
