"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe2, ShieldCheck, Star, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[100px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
                <GraduationCap size={16} />
                Expert Consultancy in Bangladesh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Shape Your <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Global Future</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C60 3 180 1 298 8" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <br /> With Us.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-slate-500 max-w-[480px] leading-relaxed"
            >
              We simplify your study abroad journey — from university selection to visa approval.
              Join thousands of students studying in Malaysia, USA, UK, and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Apply for 2026 Intake
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold text-[15px] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Free Consultation
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100"
            >
              {[
                { icon: <Users size={18} className="text-blue-600" />, value: "5,000+", label: "Students Placed" },
                { icon: <Globe2 size={18} className="text-blue-600" />, value: "12+", label: "Countries" },
                { icon: <ShieldCheck size={18} className="text-blue-600" />, value: "98%", label: "Visa Success" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-slate-800 leading-none">{s.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Star rating */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  { bg: "bg-blue-400", letter: "R" },
                  { bg: "bg-cyan-400", letter: "S" },
                  { bg: "bg-indigo-400", letter: "A" },
                  { bg: "bg-blue-500", letter: "T" },
                ].map((a, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white ${a.bg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {a.letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Trusted by 5,000+ families</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] max-h-[620px] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={heroImg}
                alt="Aboard Study Students"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
              className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 z-20 min-w-[150px]"
            >
              <p className="text-2xl font-extrabold text-blue-600 leading-none">98%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Visa Success Rate</p>
              <div className="mt-2 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
            </motion.div>

            {/* Floating card — top right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.45 }}
              className="absolute -top-5 -right-5 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 z-20"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                  <BookOpen size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[13px] font-extrabold text-slate-800 leading-none">50+ Universities</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">Partner Institutions</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative rings */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border-[16px] border-blue-50 opacity-70 pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full border-[10px] border-cyan-50 opacity-60 pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#F1F5F9" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;