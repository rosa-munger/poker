"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mainChampions, secondRowChampions, thirdRowChampions, Champion } from "@/data/champions";
import { useLanguage } from "@/context/LanguageContext";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Champion Card Component
function ChampionCard({ champion }: { champion: Champion }) {
  return (
    <Link href={`/champions/${champion.slug}`}>
      <motion.div
        variants={cardVariants}
        className="group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative rounded-2xl overflow-hidden border border-[#2d5a3d]/30 hover:border-aa-gold/50 transition-all duration-300">
          {/* Player Image - Larger aspect ratio, no overlay */}
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src={champion.image}
              className="absolute inset-0 w-full h-full object-cover object-top scale-110 transition-transform duration-500 group-hover:scale-115"
            />
          </div>

          {/* Player Name & Flag */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold text-sm tracking-wider uppercase">
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ChampionsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      {/* Hero Banner - No overlay, sharp image with borders */}
      <section className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[450px] overflow-hidden border-t-2 border-b-2 border-aa-gold/50">
        <img
          src="/image/champions/sliders/aateambanner-DpojSoww.png"
          alt="AA Team Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-aa-gold mb-4">
              {t("champions.heroTitle")}
            </h1>
            <p className="text-aa-gray text-sm max-w-3xl mx-auto leading-relaxed">
              {t("champions.heroDesc")}
            </p>
          </motion.div>

          {/* First Row - 4 Main Champions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6"
          >
            {mainChampions.map((champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </motion.div>

          {/* Second Row - 4 Champions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6"
          >
            {secondRowChampions.map((champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </motion.div>

          {/* Third Row - 4 Champions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {thirdRowChampions.map((champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
