"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, GraduationCap, ExternalLink,
  Globe2, Building2, BookOpen, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useUniversityFilter, UniversityType } from "@/hooks/useUniversityFilter";
// import { universities } from "@/data/applyData"; 
import { universities } from "@/data/universitiesData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const tabs: { label: UniversityType; icon: React.ElementType; color: string }[] = [
  { label: "All", icon: Globe2, color: "text-blue-600" },
  { label: "Public", icon: Building2, color: "text-green-600" },
  { label: "Private", icon: GraduationCap, color: "text-purple-600" },
  { label: "Branch", icon: BookOpen, color: "text-amber-600" },
];

const typeStyles: Record<string, { badge: string; dot: string }> = {
  Public:  { badge: "bg-green-50 text-green-600 border-green-100",  dot: "bg-green-500" },
  Private: { badge: "bg-purple-50 text-purple-600 border-purple-100", dot: "bg-purple-500" },
  Branch:  { badge: "bg-amber-50 text-amber-600 border-amber-100",  dot: "bg-amber-500" },
};

// Initials avatar for university
const UniAvatar = ({ name, type }: { name: string; type: string }) => {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const bg =
    type === "Public"
      ? "bg-gradient-to-br from-green-500 to-emerald-600"
      : type === "Branch"
      ? "bg-gradient-to-br from-amber-500 to-orange-600"
      : "bg-gradient-to-br from-blue-500 to-blue-700";

  return (
    <div className={`w-full h-full flex items-center justify-center ${bg}`}>
      <span className="text-3xl font-extrabold text-white/90 tracking-tight">{initials}</span>
    </div>
  );
};

const UniversityPage = () => {
  const { search, setSearch, activeTab, setActiveTab, filtered, counts } =
    useUniversityFilter(universities);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <motion.span
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest mb-5 block w-fit"
              >
                <Globe2 size={12} /> Malaysian Universities
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
                className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]"
              >
                Explore{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Top Universities</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 380 10" fill="none">
                    <path d="M2 7C75 2 285 1 378 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" as const }}
                className="text-slate-500 text-[16px] leading-relaxed max-w-lg mt-4"
              >
                Browse {universities.length}+ top Malaysian universities — public, private, and
                international branch campuses. Find your perfect match.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4 flex-shrink-0">
              {[
                { val: counts.Public, label: "Public", color: "text-green-600" },
                { val: counts.Private, label: "Private", color: "text-purple-600" },
                { val: counts.Branch, label: "Branch", color: "text-amber-600" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3 text-center">
                  <p className={`text-2xl font-extrabold ${s.color}`}>{s.val}</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & FILTER ── */}
      <div className="sticky top-[70px] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search universities..."
                className="w-full pl-11 pr-4 py-3 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all"
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {tabs.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[5px] text-sm font-bold transition-all duration-200 ${
                    activeTab === label
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  <Icon size={13} />
                  {label}
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-[3px] font-bold ${
                    activeTab === label ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                  }`}>
                    {counts[label]}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Results count */}
          <motion.p {...fadeUp()} className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Showing {filtered.length} of {universities.length} universities
            {search && <span className="text-blue-600"> · "{search}"</span>}
          </motion.p>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeTab + search}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((uni, i) => {
                  const style = typeStyles[uni.type];
                  return (
                    <motion.div
                      key={uni.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" as const }}
                    >
                      <div className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:border-slate-200 hover:-translate-y-1 transition-all duration-300">

                        {/* Avatar */}
                        <div className="relative h-36 overflow-hidden flex-shrink-0">
                          <UniAvatar name={uni.name} type={uni.type} />
                          {/* Type badge */}
                          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-[5px] border ${style.badge}`}>
                            {uni.type}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="font-extrabold text-slate-800 text-[14px] leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                            {uni.name}
                          </h3>

                          <div className="flex items-center gap-1.5 text-[12px] text-slate-400 font-medium mb-4">
                            <MapPin size={11} className="text-blue-400 flex-shrink-0" />
                            {uni.location}, Malaysia
                          </div>

                          <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
                            <div className="flex items-center gap-1.5">
                              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                              <span className="text-[11px] font-bold text-slate-400">{uni.ranking}</span>
                            </div>
                            <Link
                              href={`/universities/${uni.name.toLowerCase().replace(/[\s()]/g, "-").replace(/-+/g, "-")}`}
                              className="w-8 h-8 rounded-[5px] bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-200"
                            >
                              <ExternalLink size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-[5px] bg-slate-100 flex items-center justify-center">
                  <Search size={24} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-700">No universities found</h3>
                <p className="text-slate-400 text-sm">Try a different search term or filter.</p>
                <button
                  onClick={() => { setSearch(""); setActiveTab("All"); }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2"
                >
                  Clear filters <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.18em] mb-3">Not Sure?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Let Us Help You Choose <br /> the Right University.
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Our expert advisors will match you with the best university based on your profile and goals — for free.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Get Free Guidance
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default UniversityPage;