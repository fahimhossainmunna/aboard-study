"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, ArrowRight, AlertCircle, BookOpen, Languages, FileText, GraduationCap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const levels = [
  {
    level: "Foundation / Diploma",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    bar: "bg-blue-600",
    requirements: [
      "SSC / O-Level with minimum 3 B grades",
      "Age: 17 years and above",
      "English: IELTS 5.0 or equivalent",
      "No entrance exam required (most universities)",
    ],
    duration: "1–1.5 years",
    note: "Best pathway for students straight from school.",
  },
  {
    level: "Undergraduate (Bachelor's)",
    icon: GraduationCap,
    color: "bg-green-50 text-green-600",
    bar: "bg-green-500",
    requirements: [
      "HSC / A-Level with minimum 2 principal passes",
      "Or Diploma/Foundation completion",
      "English: IELTS 5.5–6.0 or equivalent",
      "Specific subject requirements vary by course",
    ],
    duration: "3–4 years",
    note: "Most popular choice. Direct entry with A-Level or Diploma.",
  },
  {
    level: "Postgraduate (Master's)",
    icon: FileText,
    color: "bg-purple-50 text-purple-600",
    bar: "bg-purple-500",
    requirements: [
      "Bachelor's degree with minimum CGPA 2.5",
      "Relevant work experience (some programs)",
      "English: IELTS 6.0–6.5 or equivalent",
      "Research proposal (for research programs)",
    ],
    duration: "1–2 years",
    note: "Available in coursework or research modes.",
  },
  {
    level: "PhD / Doctorate",
    icon: Languages,
    color: "bg-amber-50 text-amber-600",
    bar: "bg-amber-500",
    requirements: [
      "Master's degree from a recognized institution",
      "CGPA 3.0 or above recommended",
      "English: IELTS 6.5+ or equivalent",
      "Detailed research proposal required",
    ],
    duration: "3–5 years",
    note: "Requires a confirmed supervisor before applying.",
  },
];

const documents = [
  { icon: FileText, title: "Academic Transcripts", desc: "Original SSC, HSC, or degree transcripts with certified translations." },
  { icon: Languages, title: "English Test Results", desc: "IELTS, TOEFL, or equivalent English proficiency certificate." },
  { icon: ClipboardList, title: "Valid Passport", desc: "Passport valid for at least 18 months from the date of application." },
  { icon: CheckCircle2, title: "Personal Statement", desc: "A written statement about your academic goals and motivation." },
  { icon: AlertCircle, title: "Recommendation Letters", desc: "2 academic or professional reference letters (for postgraduate)." },
  { icon: BookOpen, title: "Medical Certificate", desc: "Health clearance certificate from a registered doctor." },
];

export default function EntryRequirementsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <ClipboardList size={12} /> Entry Requirements
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Do You Meet The <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Requirements?</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 320 10" fill="none">
                <path d="M2 7C65 2 240 1 318 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl mb-8"
          >
            Entry requirements vary by university and program level. Here's a clear
            breakdown to help you understand exactly what you need to get in.
          </motion.p>

          <motion.div {...fadeUp(0.2)}>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-2.5 rounded-[5px] text-sm font-semibold">
              <CheckCircle2 size={15} />
              Don't worry — we help you meet every requirement, step by step.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEVEL REQUIREMENTS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">By Study Level</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Requirements by Program Level</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels.map((lvl, i) => (
              <motion.div key={lvl.level} {...fadeUp(i * 0.1)} className="bg-white border border-slate-100 rounded-[5px] p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-[5px] ${lvl.color} flex items-center justify-center flex-shrink-0`}>
                    <lvl.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-lg leading-tight">{lvl.level}</h3>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Duration: {lvl.duration}</span>
                  </div>
                </div>

                <div className={`w-10 h-1 rounded-full ${lvl.bar} mb-5`} />

                <ul className="flex flex-col gap-2.5 mb-5">
                  {lvl.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-50 border border-slate-100 rounded-[5px] px-4 py-2.5 text-[12px] text-slate-500 font-medium flex items-start gap-2">
                  <AlertCircle size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  {lvl.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Checklist</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">Required Documents</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc, i) => (
              <motion.div key={doc.title} {...fadeUp(i * 0.08)} className="group flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-[5px] hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-[5px] bg-blue-100 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <doc.icon size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 group-hover:text-white text-[14px] mb-1 transition-colors duration-300">{doc.title}</h3>
                  <p className="text-slate-400 group-hover:text-blue-100 text-sm leading-relaxed transition-colors duration-300">{doc.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">Not Sure If You Qualify?</h2>
            <p className="text-slate-400 text-sm mb-8">Send us your documents and our team will assess your eligibility for free — within 24 hours.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Check My Eligibility Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}