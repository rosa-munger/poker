"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// AA Team data with actual images
const aaTeam = [
  {
    id: 1,
    name: "ZHOU QUAN",
    image: "/image/home/section-aateam/zhouquan-CUnLG1eQ.png",
    social: { youtube: false, facebook: false, instagram: false, weibo: true },
  },
  {
    id: 2,
    name: "JUNGLEMAN",
    image: "/image/home/section-aateam/juagleman-CxErrxpN.png",
    social: { youtube: true, facebook: true, instagram: true, weibo: false },
  },
];

export default function AATeamSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 pb-32 relative z-10 bg-[#0a1f14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            {t("aaTeam.title")}
          </h2>
          <p className="text-aa-gray text-sm tracking-wider">
            {t("aaTeam.subtitle")}
          </p>
        </motion.div>

        {/* Team Cards Grid - Images already have names on them */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {aaTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              {/* Card Container - Larger to show full image including bottom */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-visible">
                {/* Player Image - Full display without overlay text */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
