"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getChampionBySlug, Champion } from "@/data/champions";

export default function ChampionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const champion = getChampionBySlug(slug);

  if (!champion) {
    return (
      <div className="min-h-screen pt-24 bg-[#0a1f14] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Champion not found</h1>
          <Link href="/champions" className="text-aa-gold hover:underline">
            ← Back to Champions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#0a1f14]">
      {/* Hero Banner with Player Image - No overlay, sharp and larger */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={champion.bannerImage}
          alt={champion.name}
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Minimal gradient only at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1f14] to-transparent" />
        
        {/* Thin gold bar at bottom - 1.5px */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-aa-gold" />
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-aa-gold" />
              <h1 className="text-3xl md:text-4xl font-bold text-aa-gold tracking-wider">
                INTRODUCTION
              </h1>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-aa-gold" />
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Player Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="relative bg-gradient-to-b from-[#1a4d2e] to-[#0d2818] rounded-2xl overflow-hidden border border-[#2d5a3d]/30 p-4">
                {/* Player Image - Full display, larger, no overlays */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={champion.image}
                    alt={champion.name}
                    fill
                    className="object-cover object-top"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Stats */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-2">
                    <span className="text-aa-gold text-lg">○</span>
                    <div>
                      <p className="text-aa-gold text-sm font-semibold">TOTAL LIVE EARNINGS</p>
                      <p className="text-white text-lg font-bold">{champion.totalLiveEarnings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-aa-gold text-lg">○</span>
                    <div>
                      <p className="text-aa-gold text-sm font-semibold">BEST LIVE CASH</p>
                      <p className="text-white text-lg font-bold">{champion.bestLiveCash}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-aa-gold text-lg">○</span>
                    <div>
                      <p className="text-aa-gold text-sm font-semibold">ALL TIME MONEY LIST</p>
                      <p className="text-white text-lg font-bold">{champion.allTimeMoneyList}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-aa-gold text-lg">○</span>
                    <div>
                      <p className="text-aa-gold text-sm font-semibold">GLOBAL POKER INDEX RANKING</p>
                      <p className="text-white text-lg font-bold">{champion.globalPokerIndexRanking}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Introduction Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8"
            >
              {/* Introduction Paragraphs */}
              <div className="space-y-6 mb-8">
                {champion.introduction.map((paragraph, index) => (
                  <p key={index} className="text-aa-gray leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Players' Highlights */}
              {champion.playersHighlights && champion.playersHighlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">PLAYERS&apos; HIGHLIGHTS:</h3>
                  <div className="space-y-2">
                    {champion.playersHighlights.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-aa-gold hover:text-aa-gold/80 transition-colors text-sm break-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Links */}
              {champion.socialLinks && Object.keys(champion.socialLinks).length > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  {champion.socialLinks.youtube && (
                    <a
                      href={champion.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {champion.socialLinks.instagram && (
                    <a
                      href={champion.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-pink-500 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {champion.socialLinks.facebook && (
                    <a
                      href={champion.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {champion.socialLinks.tiktok && (
                    <a
                      href={champion.socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Table */}
      {champion.events && champion.events.length > 0 && (
        <section className="py-8 border-t border-[#2d5a3d]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2d5a3d]/50">
                    <th className="py-4 px-4 text-left text-aa-gray text-sm font-medium">Event name</th>
                    <th className="py-4 px-4 text-center text-aa-gray text-sm font-medium">Region</th>
                    <th className="py-4 px-4 text-center text-aa-gray text-sm font-medium">Date</th>
                    <th className="py-4 px-4 text-center text-aa-gray text-sm font-medium">Rank</th>
                    <th className="py-4 px-4 text-right text-aa-gray text-sm font-medium">Prize</th>
                  </tr>
                </thead>
                <tbody>
                  {champion.events.map((event, index) => (
                    <tr key={index} className="border-b border-[#2d5a3d]/30">
                      <td className="py-4 px-4 text-white text-sm">{event.name}</td>
                      <td className="py-4 px-4 text-aa-gray text-sm text-center">{event.region}</td>
                      <td className="py-4 px-4 text-aa-gray text-sm text-center">{event.date}</td>
                      <td className="py-4 px-4 text-aa-gold text-sm text-center font-medium">{event.rank}</td>
                      <td className="py-4 px-4 text-aa-gold text-sm text-right font-bold">{event.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/champions"
            className="inline-flex items-center gap-2 text-aa-gold hover:text-aa-gold/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Champions
          </Link>
        </div>
      </section>
    </div>
  );
}
