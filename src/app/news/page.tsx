"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/data/news";
import { useLanguage } from "@/context/LanguageContext";

// Lấy dữ liệu từ file news data
const featuredNews = newsArticles[0];
const sideNews = newsArticles.slice(1, 6);
const moreNews = newsArticles.slice(6);

export default function NewsPage() {
  const { t, language } = useLanguage();

  // Get translated title based on language
  const getTitle = (news: typeof featuredNews) => {
    if (language === "cn") return news.title_cn || news.title;
    if (language === "tw") return news.title_tw || news.title;
    return news.title;
  };

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (language === "cn") {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    }
    
    if (language === "tw") {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    }
    
    // English format
    return dateString;
  };

  return (
    <div 
      className="min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #001d10, #011008)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2e29e] mb-3 sm:mb-4 tracking-widest uppercase">
            {t("news.title")}
          </h1>
          <p className="text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-medium uppercase">
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
              <div className="relative overflow-hidden bg-[#052e16] aspect-video">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Phần text của tin chính */}
              <div className="bg-[#052e16] p-6 border-t border-[#14532d]">
                <h2 className="text-white font-medium text-xl md:text-2xl leading-snug group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                  {getTitle(featuredNews)}
                </h2>
                <p className="text-[#4ade80]/60 text-sm mt-4 font-light italic">{formatDate(featuredNews.date)}</p>
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
                  
                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-3 flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm md:text-base leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2">
                      {getTitle(news)}
                    </h3>
                    <p className="text-[#4ade80]/60 text-[11px] mt-2 italic">{formatDate(news.date)}</p>
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
                <Link href={`/news/${news.slug}`} className="group flex flex-col h-full bg-[#052e16] p-0 overflow-hidden hover:border-[#f2e29e]/50 border border-transparent transition-all">
                  <div className="relative w-full h-48 overflow-hidden bg-[#052e16] flex-shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-white font-medium text-base leading-tight group-hover:text-[#f2e29e] transition-colors line-clamp-2 flex-grow">
                      {getTitle(news)}
                    </h3>
                    <p className="text-[#4ade80]/60 text-xs mt-3 italic">{formatDate(news.date)}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Load More Button */}
        {/* <div className="flex justify-center mt-12">
          <button className="px-10 py-3 border border-[#f2e29e] text-[#f2e29e] font-bold tracking-widest text-xs hover:bg-[#f2e29e] hover:text-black transition-all uppercase">
            Load More News
          </button>
        </div> */}
      </div>
    </div>
  );
}