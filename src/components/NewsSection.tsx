"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getLatestNews } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsSection() {
  const { t, language } = useLanguage();
  
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

  return (
    <section 
      className="py-16 bg-[#0a1f14]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#f2e29e] text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">
            {t("news.title")}
          </h2>
          <p className="text-white text-sm tracking-[0.3em] font-medium uppercase">
            {t("news.subtitle")}
          </p>
        </div>

        {/* News Grid Layout - Sử dụng items-stretch để các cột cao bằng nhau */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Cột Trái: Tin nổi bật chính */}
          <div className="lg:col-span-7 flex">
            <Link href={`/news/${featuredNews.slug}`} className="group flex flex-col w-full overflow-hidden bg-[#052e16]">
              <div className="relative overflow-hidden bg-[#052e16]">
                <img
                  src={featuredNews.image}
                  alt="Featured News"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Nội dung tin chính */}
              <div className="p-6 flex-1 flex flex-col justify-center border-t border-[#14532d]">
                <h3 className="text-white text-lg md:text-xl font-medium leading-snug group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                  {getTitle(featuredNews)}
                </h3>
                <p className="text-[#4ade80]/60 text-sm mt-4 font-light italic">
                  {featuredNews.date}
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
                <div className="relative w-32 md:w-40 flex-shrink-0 overflow-hidden bg-[#052e16]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Nội dung tin phụ */}
                <div className="flex flex-col justify-center p-3 flex-1 min-w-0">
                  <h4 className="text-white text-[13px] md:text-sm font-medium leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                    {getTitle(news)}
                  </h4>
                  <p className="text-[#4ade80]/60 text-[11px] mt-1 italic">
                    {news.date}
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