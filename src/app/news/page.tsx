"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

// Lấy dữ liệu từ file news data
const featuredNews = newsArticles[0];
const sideNews = newsArticles.slice(1, 6);
const moreNews = newsArticles.slice(6);

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div 
      className="min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #001d10, #011008)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f2e29e] mb-4 tracking-widest uppercase">
            {t("news.title")}
          </h1>
          <p className="text-white text-sm tracking-[0.3em] font-medium uppercase">
            {t("news.subtitle")}
          </p>
        </motion.div>

        {/* Main News Section - Featured + Side List */}
        {/* grid-stretch giúp 2 cột có chiều cao bằng nhau tự động */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-16 items-stretch">
          
          {/* Featured Article (Left - 7 Cột) */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex"
          >
            <Link href={`/news/${featuredNews.slug}`} className="group flex flex-col w-full overflow-hidden">
              <div className="relative overflow-hidden bg-[#052e16]">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Phần text của tin chính */}
              <div className="bg-[#052e16] p-6 border-t border-[#14532d]">
                <h2 className="text-white font-medium text-xl md:text-2xl leading-snug group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                  {featuredNews.title}
                </h2>
                <p className="text-[#4ade80]/60 text-sm mt-4 font-light italic">{featuredNews.date}</p>
              </div>
            </Link>
          </motion.article>

          {/* Side News List (Right - 5 Cột) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {sideNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-1"
              >
                <Link href={`/news/${news.slug}`} className="group flex flex-1 bg-[#052e16] hover:bg-[#064e3b] transition-all duration-300 border border-[#14532d]/30">
                  {/* Thumbnail Side */}
                  <div className="relative w-32 md:w-40 flex-shrink-0 overflow-hidden bg-[#052e16]">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-3 flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm md:text-base leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-[#4ade80]/60 text-[11px] mt-2 italic">{news.date}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* More Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-[#14532d] pt-12"
        >
          <h2 className="text-2xl font-bold text-[#f2e29e] mb-8 tracking-wider">{t("news.moreInfo")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/news/${news.slug}`} className="group block bg-[#052e16] p-0 overflow-hidden hover:border-[#f2e29e]/50 border border-transparent transition-all">
                  <div className="relative w-full overflow-hidden bg-[#052e16]">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-base leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-[#4ade80]/60 text-xs mt-3 italic">{news.date}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-10 py-3 border border-[#f2e29e] text-[#f2e29e] font-bold tracking-widest text-xs hover:bg-[#f2e29e] hover:text-black transition-all uppercase">
            Load More News
          </button>
        </div>
      </div>
    </div>
  );
}