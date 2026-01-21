"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { mainChampions, secondRowChampions, thirdRowChampions, Champion } from "@/data/champions";

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
          {/* Player Image - Larger aspect ratio */}
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src={champion.image}
              alt={champion.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/90 via-transparent to-transparent z-10" />
          </div>

          {/* Player Name & Flag */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center gap-2">
              <span className="text-lg">{champion.countryFlag}</span>
              <h3 className="text-white font-bold text-sm tracking-wider uppercase">
                {champion.name}
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ChampionsPage() {
  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      {/* Hero Banner - No overlay, sharp image with borders */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden border-t-2 border-b-2 border-aa-gold/50">
        <Image
          src="/image/champions/sliders/aateambanner-DpojSoww.png"
          alt="AA Team Banner"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
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
              THE PEAK SHOWDOWN VENUE • THE BIRTHPLACE OF LEGENDS
            </h1>
            <p className="text-aa-gray text-sm max-w-3xl mx-auto leading-relaxed">
              AA Friends Circle brings the world&apos;s top poker masters and new forces together.
              They inject competitive charm into each game, making it more passionate and energetic.
              Go to AA POKER and log on now. Between wins and losses, legends are being born.
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
