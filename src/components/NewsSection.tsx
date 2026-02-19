"use client";

import Link from "next/link";
import Image from "next/image";
import { getLatestNews } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function NewsSection() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get latest 6 news articles
  const allNews = getLatestNews(6);
  const featuredNews = allNews[0];
  const sideNews = allNews.slice(1);

  // Get translated title based on language
  const getTitle = (news: typeof featuredNews) => {
    if (language === "cn") return news.title_cn || news.title;
    if (language === "tw") return news.title_tw || news.title;
    return news.title;
  };

  // Format date based on language
  const formatDate = (dateString: string) => {
    if (language === "en") return dateString;
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      
      return `${year}年${month}月${day}日`;
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section 
      className="py-4 sm:py-16 bg-[#0a1f14]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-10">
          <h2 className="text-[#f2e29e] text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">
            {mounted ? t("news.title") : "新闻资讯"}
          </h2>
          <p className="text-white text-sm tracking-[0.3em] font-medium uppercase">
            {mounted ? t("news.subtitle") : "所有资讯，尽在AA POKER"}
          </p>
        </div>

        {/* News Grid Layout - Sử dụng items-stretch để các cột cao bằng nhau */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Cột Trái: Tin nổi bật chính */}
          <div className="lg:col-span-7 flex">
            <Link href={`/news/${featuredNews.slug}`} className="group flex flex-col w-full overflow-hidden bg-[#052e16]">
              <div className="relative overflow-hidden bg-[#052e16] aspect-video">
                <Image
                  src={featuredNews.image}
                  alt="Featured News"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  quality={95}
                />
              </div>
              {/* Nội dung tin chính */}
              <div className="p-6 flex-1 flex flex-col justify-center border-t border-[#14532d]">
                <h3 suppressHydrationWarning className="text-white text-lg md:text-xl font-medium leading-snug group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                  {getTitle(featuredNews)}
                </h3>
                <p className="text-[#86efac] text-sm mt-4 font-light italic">
                  {formatDate(featuredNews.date)}
                </p>
              </div>
            </Link>
          </div>

          {/* Cột Phải: Danh sách tin phụ - Tự động dàn đều chiều cao */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {sideNews.map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.slug}`} 
                className="group flex flex-1 bg-[#052e16] hover:bg-[#064e3b] transition-all duration-300 border border-[#14532d]/30 overflow-hidden"
              >
                {/* Ảnh thumbnail tin phụ */}
                <div className="relative w-32 md:w-40 h-20 md:h-24 flex-shrink-0 overflow-hidden bg-[#052e16]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="160px"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Nội dung tin phụ */}
                <div className="flex flex-col justify-center p-3 flex-1 min-w-0">
                  <h4 suppressHydrationWarning className="text-white text-[13px] md:text-sm font-medium leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                    {getTitle(news)}
                  </h4>
                  <p className="text-[#86efac] text-[11px] mt-1 italic">
                    {formatDate(news.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}