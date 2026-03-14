"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, MapPin, GraduationCap, ArrowRight, Star, Users } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const universities = [
  {
    name: "Universiti Malaya (UM)",
    location: "Kuala Lumpur",
    rank: "#1 in Malaysia",
    students: "22,000+",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
    courses: ["Engineering", "Medicine", "Law", "Business"],
    tag: "Top Ranked",
  },
  {
    name: "Universiti Putra Malaysia (UPM)",
    location: "Serdang, Selangor",
    rank: "#2 in Malaysia",
    students: "27,000+",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    courses: ["Agriculture", "Science", "Engineering", "Veterinary"],
    tag: "Research University",
  },
  {
    name: "Universiti Teknologi Malaysia (UTM)",
    location: "Johor Bahru",
    rank: "#3 in Malaysia",
    students: "25,000+",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
    courses: ["Technology", "Computing", "Architecture", "Engineering"],
    tag: "Tech Focus",
  },
  {
    name: "Universiti Kebangsaan Malaysia (UKM)",
    location: "Bangi, Selangor",
    rank: "#4 in Malaysia",
    students: "20,000+",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    courses: ["Medicine", "Social Science", "Dentistry", "Pharmacy"],
    tag: "National University",
  },
  {
    name: "Universiti Sains Malaysia (USM)",
    location: "Penang",
    rank: "#5 in Malaysia",
    students: "18,000+",
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop",
    courses: ["Sciences", "Engineering", "Arts", "Health Sciences"],
    tag: "Apex University",
  },
  {
    name: "Universiti Teknologi MARA (UiTM)",
    location: "Shah Alam, Selangor",
    rank: "#6 in Malaysia",
    students: "60,000+",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    courses: ["Business", "IT", "Engineering", "Art & Design"],
    tag: "Largest University",
  },
];

export default function PublicUniversitiesPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <Building2 size={12} /> Public Universities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Top Public <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Malaysian Universities</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 460 10" fill="none">
                <path d="M2 7C90 2 340 1 458 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl mb-10"
          >
            Malaysia's public universities are globally ranked institutions offering
            world-class education at affordable tuition fees for international students.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-5">
            {[
              { val: "20+", label: "Public Universities" },
              { val: "QS Ranked", label: "Globally Recognized" },
              { val: "Low Fees", label: "Affordable Tuition" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3">
                <p className="text-lg font-extrabold text-blue-600">{s.val}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── UNIVERSITIES GRID ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Our Partners</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Featured Public Universities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni, i) => (
              <motion.div key={uni.name} {...fadeUp(i * 0.07)} className="group bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={uni.img} alt={uni.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-[5px] uppercase tracking-wide">{uni.tag}</span>
                  <span className="absolute bottom-4 right-4 text-[11px] font-bold text-white bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-[5px]">{uni.rank}</span>
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
                  <a href="/contact" className="group/btn flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    Apply Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0F172B] mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">Get Into Your Dream University</h2>
            <p className="text-blue-100 text-sm mb-8">Our team will guide you through every step of the application process.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Free Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}