"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, ArrowUpRight, ArrowRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useUniversityData } from "@/hooks/useUniversityData";

const UniversityGrid = () => {
  const { universities } = useUniversityData();

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[80px] opacity-40 translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-5">
            <GraduationCap size={15} />
            Top Institutions
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Study in Top{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Universities</span>
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 240 10" fill="none">
                <path d="M2 7C50 2 150 1 238 6" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="mt-5 text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Explore globally recognized campuses in Malaysia offering world-class
            education and affordable tuition fees.
          </p>
        </motion.div>

        {/* ── University Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/universities/${uni.name.toLowerCase().replace(/[\s()]/g, "-").replace(/-+/g, "-")}`}
                className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                  {/* Ranking badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    <Trophy size={11} className="text-yellow-500" />
                    <span className="text-[11px] font-bold text-slate-700">{uni.ranking}</span>
                  </div>

                  {/* Country flag or tag bottom right */}
                  <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Malaysia
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-[15px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                    {uni.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <MapPin size={13} className="text-blue-400 flex-shrink-0" />
                    <span>{uni.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">View Details</span>
                    <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                      <ArrowUpRight size={14} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── View All Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/universities"
            className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Explore All Universities
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default UniversityGrid;