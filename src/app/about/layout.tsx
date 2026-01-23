import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AA POKER - Premium Online Poker Platform | Fair Gaming",
  description: "Learn about AA POKER, the premium online poker platform with anti-cheat protection. We provide a safe and fair game platform for all poker enthusiasts worldwide.",
  keywords: ["about AA Poker", "poker platform", "fair poker", "anti-cheat", "online poker company"],
  openGraph: {
    title: "About AA POKER - Premium Online Poker Platform",
    description: "Learn about AA POKER, the premium online poker platform with anti-cheat protection.",
    url: "https://www.aapoker.top/about",
    siteName: "AA POKER",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SEO Content - Hidden but crawlable by Google */}
      <div className="sr-only">
        <h1>About AA POKER - Premium Online Poker Platform</h1>
        <p>In AA POKER, we strive to provide a safe and fair game platform for all poker enthusiasts. Using AA POKER, you can play poker with friends anytime, anywhere, to create your own club or create a fast card, select your favorite poker game from our popular options.</p>
        <h2>Contact AA POKER</h2>

        <p>Brand Cooperation: mixue66@outlook.com</p>

      </div>
      {children}
    </>
  );
}
