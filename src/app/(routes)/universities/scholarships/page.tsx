"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, CheckCircle2, ArrowRight, Clock, FileText, Users, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const scholarships = [
  {
    name: "Malaysia International Scholarship (MIS)",
    provider: "Malaysian Government",
    amount: "Full Tuition + Living",
    level: "Postgraduate",
    deadline: "March 2025",
    tag: "Government",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    dot: "bg-blue-600",
    desc: "Fully funded scholarship for international students pursuing postgraduate studies at Malaysian public universities.",
    eligibility: ["Bachelor's degree with CGPA 3.5+", "Under 40 years old", "English proficiency (IELTS 6.5+)"],
  },
  {
    name: "Taylor's University Excellence Award",
    provider: "Taylor's University",
    amount: "Up to 50% Tuition",
    level: "Undergraduate",
    deadline: "Rolling Basis",
    tag: "Merit-Based",
    color: "bg-green-50 text-green-600 border-green-100",
    dot: "bg-green-500",
    desc: "Merit-based scholarship for outstanding students joining any undergraduate program at Taylor's University.",
    eligibility: ["SPM/A-Level results", "CGPA 3.0+ (if applicable)", "Interview may be required"],
  },
  {
    name: "APU Merit Scholarship",
    provider: "Asia Pacific University",
    amount: "Up to 100% Tuition",
    level: "Undergraduate & PG",
    deadline: "Ongoing",
    tag: "Full Scholarship",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-amber-500",
    desc: "Generous scholarship for academically excellent students joining computing, engineering or business programs at APU.",
    eligibility: ["Excellent academic results", "English proficiency", "Online application required"],
  },
  {
    name: "Sunway University Foundation Award",
    provider: "Sunway University",
    amount: "Up to 30% Tuition",
    level: "Undergraduate",
    deadline: "Per Intake",
    tag: "University Award",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    dot: "bg-purple-500",
    desc: "Awarded to top-performing students enrolling in Sunway University's foundation or degree programs.",
    eligibility: ["Strong academic record", "Letter of recommendation", "Personal statement"],
  },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "Talk to our scholarship advisor to identify which scholarships you qualify for." },
  { num: "02", title: "Document Preparation", desc: "We help you prepare all required documents — transcripts, essays, recommendations." },
  { num: "03", title: "Application Submission", desc: "We submit your application before the deadline with a fully reviewed package." },
  { num: "04", title: "Interview Coaching", desc: "If required, we coach you for scholarship interviews to maximize your chances." },
];

export default function ScholarshipsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <BadgeDollarSign size={12} /> Scholarships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Fund Your <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Study Abroad Dream.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 440 10" fill="none">
                <path d="M2 7C90 2 330 1 438 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl mb-10"
          >
            Discover scholarships worth thousands of Ringgit. Our team helps you find,
            apply, and secure funding for your Malaysian university education.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-5">
            {[
              { val: "50+", label: "Scholarships Available" },
              { val: "RM 200K+", label: "Awarded to Our Students" },
              { val: "Free", label: "Scholarship Guidance" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3">
                <p className="text-lg font-extrabold text-blue-600">{s.val}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCHOLARSHIPS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Available Funding</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Scholarships We Support</h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {scholarships.map((s, i) => (
              <motion.div key={s.name} {...fadeUp(i * 0.08)} className="group bg-white border border-slate-100 rounded-[5px] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-[5px] border ${s.color}`}>{s.tag}</span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{s.level}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-800 mb-1">{s.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">{s.provider}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-col gap-1.5">
                      {s.eligibility.map((e) => (
                        <div key={e} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:items-end lg:text-right flex-shrink-0">
                    <div className="bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3 text-center">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Award</p>
                      <p className="text-lg font-extrabold text-blue-600">{s.amount}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-slate-400 font-medium">
                      <Clock size={12} /> Deadline: {s.deadline}
                    </div>
                    <a href="/contact" className="group/btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-[5px] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5">
                      Apply Now <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">How We Help You Win</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.1)} className="group relative bg-slate-50 border border-slate-100 rounded-[5px] p-7 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                <p className="text-4xl font-extrabold text-slate-100 group-hover:text-white/20 transition-colors mb-4">{step.num}</p>
                <h3 className="font-extrabold text-slate-800 group-hover:text-white text-[15px] mb-2 transition-colors">{step.title}</h3>
                <p className="text-slate-400 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">{step.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">Let Us Find Your Scholarship</h2>
            <p className="text-blue-100 text-sm mb-8">Book a free session and our scholarship advisor will identify the best options for your profile.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Get Scholarship Advice <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}