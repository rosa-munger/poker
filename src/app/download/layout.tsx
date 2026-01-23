import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download AA POKER - iOS & Android Poker App | Free Download",
  description: "Download AA POKER app for iOS and Android. Premium poker platform with anti-cheat protection. Play Texas Hold'em, Omaha and more. Free download with installation tutorial.",
  keywords: ["download AA Poker", "poker app", "iOS poker", "Android poker", "mobile poker", "poker download", "Texas Holdem app"],
  openGraph: {
    title: "Download AA POKER - iOS & Android Poker App",
    description: "Download AA POKER app for iOS and Android. Premium poker platform with anti-cheat protection.",
    url: "https://www.aapoker.top/download",
    siteName: "AA POKER",
    type: "website",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SEO Content - Hidden but crawlable by Google */}
      <div className="sr-only">
        <h1>Download AA POKER - iOS and Android Poker App</h1>
        <p>Scan to download AA POKER. Available on App Store and Android. Premium poker platform with anti-cheat protection.</p>
        <h2>Download Options</h2>
        <ul>
          <li>App Store - Official iOS download</li>
          <li>iOS Backup - Alternative iOS download with long-term signature</li>
          <li>Android - Official Android APK download</li>
          <li>Android Backup - Alternative Android download</li>
        </ul>
        <h2>Installation Tutorial</h2>
        <p>iOS Installation: Download the app, trust the developer certificate in Settings, and start playing.</p>
        <p>Android Installation: Enable unknown sources, download APK, install and enjoy.</p>
        <h2>FAQ</h2>
        <p>What should I do if the software cannot be turned on after installing? Uninstall and re-install from the download page, then trust the APP in Settings.</p>
        <p>What is a long-term signature package? iOS enterprise certificate signing that prevents expiration issues.</p>
      </div>
      {children}
    </>
  );
}
