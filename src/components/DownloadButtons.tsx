"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DownloadButtons() {
  const { language } = useLanguage();

  const getBackupAndroidImage = () => {
    if (language === "tw") {
      return "/image/home/logo-android/backAndroidDownload_tw.png";
    } else if (language === "cn") {
      return "/image/home/logo-android/backAndroidDownload_cn.png";
    }
    return "/image/home/logo-android/backAndroidDownload_en-D6RLQzvZ.png";
  };
  return (
    <section className="py-8 bg-[#0a1f14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4 md:gap-6">
          {/* iOS Button - Links to download page */}
          <Link href="/download">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center px-3 md:px-4 py-3 md:py-4 bg-[#0d1f17] rounded-xl hover:bg-[#1a3d2e] transition-all cursor-pointer"
            >
              <img
                src="/image/home/logo-android/ios.png"
                alt="iOS"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Android Button - Links to external APK download */}
          <motion.a
            href="https://alb-aliyuncs.scjzsjw.com/lazrjk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-3 md:px-4 py-3 md:py-4 bg-[#0d1f17] rounded-xl hover:bg-[#1a3d2e] transition-all cursor-pointer"
          >
            <img
              src="/image/home/logo-android/download.png"
              alt="Android"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Backup Android Button - Links to external APK download */}
          <motion.a
            href="https://alb-aliyuncs.scjzsjw.com/lazrjk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-3 md:px-4 py-3 md:py-4 bg-[#0d1f17] rounded-xl hover:bg-[#1a3d2e] transition-all cursor-pointer"
          >
            <img
              src={getBackupAndroidImage()}
              alt="Backup Android Download"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
