"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Users, ArrowRight, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const universities = [
  {
    name: "Taylor's University",
    location: "Subang Jaya, Selangor",
    rank: "5 Stars QS Rated",
    students: "12,000+",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
    courses: ["Business", "Hospitality", "Law", "Media"],
    tag: "Most Popular",
    fee: "RM 35,000/yr",
  },
  {
    name: "Sunway University",
    location: "Petaling Jaya, Selangor",
    rank: "Top 5 Private",
    students: "9,000+",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    courses: ["Business", "Computing", "Engineering", "Health"],
    tag: "Award Winning",
    fee: "RM 33,000/yr",
  },
  {
    name: "APU — Asia Pacific University",
    location: "Kuala Lumpur",
    rank: "Top 1% Globally",
    students: "11,000+",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
    courses: ["IT", "Engineering", "Business", "Design"],
    tag: "Tech Leader",
    fee: "RM 30,000/yr",
  },
  {
    name: "HELP University",
    location: "Kuala Lumpur",
    rank: "Top 10 Private",
    students: "7,000+",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop",
    courses: ["Psychology", "Business", "Law", "IT"],
    tag: "Psychology Hub",
    fee: "RM 28,000/yr",
  },
  {
    name: "City University Malaysia",
    location: "Petaling Jaya, Selangor",
    rank: "SETARA 5 Stars",
    students: "8,000+",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    courses: ["Engineering", "Architecture", "Business", "IT"],
    tag: "Engineering Focus",
    fee: "RM 27,000/yr",
  },
  {
    name: "Multimedia University (MMU)",
    location: "Cyberjaya, Selangor",
    rank: "Top Digital Uni",
    students: "17,000+",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    courses: ["IT", "Multimedia", "Engineering", "Management"],
    tag: "Digital Campus",
    fee: "RM 26,000/yr",
  },
];

export default function PrivateUniversitiesPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <GraduationCap size={12} /> Private Universities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Premier Private <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Universities in Malaysia</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 500 10" fill="none">
                <path d="M2 7C100 2 370 1 498 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl mb-10"
          >
            Malaysia's top private universities offer globally recognized degrees,
            modern campuses, and vibrant international student communities.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-5">
            {[
              { val: "30+", label: "Private Universities" },
              { val: "5 Star", label: "QS Rated Campuses" },
              { val: "English", label: "Medium of Instruction" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3">
                <p className="text-lg font-extrabold text-blue-600">{s.val}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Our Partners</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Partner Private Universities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, i) => (
              <motion.div key={uni.name} {...fadeUp(i * 0.07)} className="group bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={uni.img} alt={uni.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-[5px] uppercase tracking-wide">{uni.tag}</span>
                  <span className="absolute bottom-4 right-4 text-[11px] font-bold text-white bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-[5px]">{uni.fee}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-slate-800 text-[15px] mb-2 leading-snug">{uni.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-[12px] text-slate-400 font-medium"><MapPin size={11} /> {uni.location}</span>
                    <span className="flex items-center gap-1 text-[12px] text-slate-400 font-medium"><Users size={11} /> {uni.students}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {uni.courses.map((c) => (
                      <span key={c} className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-[5px]">{c}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-[12px] font-bold text-slate-400">{uni.rank}</span>
                    <a href="/contact" className="group/btn flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      Apply <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">Not Sure Which University to Choose?</h2>
            <p className="text-slate-400 text-sm mb-8">Our expert counsellors will match you with the best university based on your profile, budget, and goals.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Get Matched Free <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}