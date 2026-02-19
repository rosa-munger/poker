"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SEOSection() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "AAPoker - The World's Leading AA Poker Platform",
      subtitle: "Welcome to AAPoker Official Website (aapoker.top)",
      description: "AAPoker (AA Poker) is the premier online poker platform trusted by millions of players worldwide. Experience fair play, instant withdrawals, and the best Poker AA games.",
      features: [
        {
          title: "Download AAPoker",
          desc: "Get aapoker download for iOS & Android. Play AA Poker anytime, anywhere."
        },
        {
          title: "AAPoker Clubs & Leagues",
          desc: "Join aapoker clubs and leagues for social poker experience with friends."
        },
        {
          title: "Fair Play Guaranteed",
          desc: "AAPoker uses RNG technology. No bots, no cheating - pure Poker AA skill."
        },
        {
          title: "Instant Withdrawals",
          desc: "Get your AA Poker winnings fast with USDT and multiple payment options."
        }
      ],
      cta: "Download AAPoker Now",
      ctaDesc: "Join millions of AA Poker players on aapoker.top"
    },
    cn: {
      title: "AAPoker - 全球领先的AA Poker在线扑克平台",
      subtitle: "欢迎来到AAPoker官网 (aapoker.top)",
      description: "AAPoker（AA Poker）是全球数百万玩家信赖的顶级在线扑克平台。体验公平游戏、即时提款和最佳的Poker AA游戏。",
      features: [
        {
          title: "aapoker下载",
          desc: "获取aapoker下载，支持iOS和安卓。随时随地畅玩AA Poker。"
        },
        {
          title: "aapoker联盟与俱乐部",
          desc: "加入aapoker联盟和AA扑克俱乐部，与好友享受社交扑克体验。"
        },
        {
          title: "公平游戏保障",
          desc: "AAPoker采用RNG技术。无机器人、无作弊 - 纯粹的Poker AA技术。"
        },
        {
          title: "即时提款",
          desc: "通过USDT和多种支付方式快速获取您的AA Poker奖金。"
        }
      ],
      cta: "立即下载AAPoker",
      ctaDesc: "加入aapoker.top上数百万AA Poker玩家"
    },
    tw: {
      title: "AAPoker - 全球領先的AA Poker線上撲克平台",
      subtitle: "歡迎來到AAPoker官網 (aapoker.top)",
      description: "AAPoker（AA Poker）是全球數百萬玩家信賴的頂級線上撲克平台。體驗公平遊戲、即時提款和最佳的Poker AA遊戲。",
      features: [
        {
          title: "aapoker下載",
          desc: "獲取aapoker下載，支援iOS和安卓。隨時隨地暢玩AA Poker。"
        },
        {
          title: "aapoker聯盟與俱樂部",
          desc: "加入aapoker聯盟和AA撲克俱樂部，與好友享受社交撲克體驗。"
        },
        {
          title: "公平遊戲保障",
          desc: "AAPoker採用RNG技術。無機器人、無作弊 - 純粹的Poker AA技術。"
        },
        {
          title: "即時提款",
          desc: "通過USDT和多種支付方式快速獲取您的AA Poker獎金。"
        }
      ],
      cta: "立即下載AAPoker",
      ctaDesc: "加入aapoker.top上數百萬AA Poker玩家"
    }
  };

  const t = content[language] || content.cn;

  if (!mounted) {
    return (
      <section className="bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content.cn.title}
            </h2>
            <p className="text-xl text-[#c9a962] mb-4">{content.cn.subtitle}</p>
            <p className="text-gray-300 max-w-3xl mx-auto">{content.cn.description}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-[#c9a962] mb-4">{t.subtitle}</p>
          <p className="text-gray-300 max-w-3xl mx-auto">{t.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1f1f3a]/50 border border-[#c9a962]/20 rounded-xl p-6 hover:border-[#c9a962]/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#c9a962] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/download"
            className="inline-block bg-gradient-to-r from-[#c9a962] to-[#d4b876] text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            {t.cta}
          </Link>
          <p className="text-gray-500 mt-4 text-sm">{t.ctaDesc}</p>
        </div>

        {/* SEO Text Block - Visible but styled subtly */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-xs leading-relaxed space-y-2">
            <p>
              <strong className="text-gray-300">AAPoker</strong> (also known as <strong className="text-gray-300">AA Poker</strong>, <strong className="text-gray-300">aapoker</strong>, or <strong className="text-gray-300">Poker AA</strong>) is the official online poker platform at aapoker.top. 
              AAPoker provides Texas Hold&apos;em, Omaha, and tournament games for players worldwide.
            </p>
            <p>
              Visit the <strong className="text-gray-300">aapoker官网</strong> (AAPoker official website) for <strong className="text-gray-300">aapoker下载</strong> (AAPoker download) on iOS and Android devices. 
              Join <strong className="text-gray-300">aapoker联盟</strong> (AAPoker leagues) and <strong className="text-gray-300">AA扑克俱乐部</strong> (AA Poker clubs) for the best social poker experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
