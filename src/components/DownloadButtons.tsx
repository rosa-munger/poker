"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DownloadButtons() {
  return (
    <section className="py-8 bg-[#0a1f14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {/* iOS Button - Links to download page */}
          <Link href="/download">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center px-8 md:px-12 py-6 md:py-8 bg-[#0d1f17] border border-[#3d5a4d]/60 rounded-xl hover:border-white/40 transition-all min-w-[180px] md:min-w-[220px] cursor-pointer"
            >
              <Image
                src="/image/home/logo-android/ios.png"
                alt="iOS"
                width={170}
                height={170}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                quality={100}
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
            className="flex items-center justify-center px-8 md:px-12 py-6 md:py-8 bg-[#0d1f17] border border-[#3d5a4d]/60 rounded-xl hover:border-white/40 transition-all min-w-[180px] md:min-w-[220px] cursor-pointer"
          >
            <Image
              src="/image/home/logo-android/download.png"
              alt="Android"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              quality={100}
            />
          </motion.a>

          {/* Backup Android Button - Links to external APK download */}
          <motion.a
            href="https://alb-aliyuncs.scjzsjw.com/lazrjk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-8 md:px-12 py-6 md:py-8 bg-[#0d1f17] border border-[#3d5a4d]/60 rounded-xl hover:border-white/40 transition-all min-w-[200px] md:min-w-[280px] cursor-pointer"
          >
            <Image
              src="/image/home/logo-android/backAndroidDownload_en-D6RLQzvZ.png"
              alt="Backup Android Download"
              width={240}
              height={60}
              className="h-14 md:h-16 w-auto object-contain"
              quality={100}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
