"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, ArrowRight, Lightbulb, Globe2, Heart } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const pillars = [
  {
    icon: Globe2,
    title: "Global Access",
    desc: "Making world-class Malaysian education accessible to every Bangladeshi student, regardless of background.",
    color: "bg-blue-50 text-blue-600",
    bar: "bg-blue-600",
  },
  {
    icon: Heart,
    title: "Student-First",
    desc: "Every decision we make is centered around the student's best interest — not just completing a transaction.",
    color: "bg-rose-50 text-rose-500",
    bar: "bg-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Transparent Guidance",
    desc: "No hidden fees, no false promises. We provide honest, expert advice at every step of the journey.",
    color: "bg-amber-50 text-amber-500",
    bar: "bg-amber-500",
  },
];

const commitments = [
  "Provide 100% free consultation to all prospective students",
  "Maintain honest and transparent communication at all times",
  "Support students from application through to arrival in Malaysia",
  "Continuously build relationships with top Malaysian universities",
  "Deliver the highest possible visa success rate through expert processing",
];

export default function OurMissionPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <Target size={12} /> Our Mission
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            The Mission Behind{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Aboard Study.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 10" fill="none">
                <path d="M2 7C80 2 280 1 398 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl"
          >
            We are on a mission to simplify the complex process of international education
            for every aspiring student in Bangladesh.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.div {...fadeUp()}>
            <div className="w-14 h-14 rounded-[5px] bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
              <Target size={26} className="text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
              "To provide{" "}
              <span className="text-blue-400">transparent, reliable, and expert guidance</span>{" "}
              to students aspiring for world-class education in Malaysia — ensuring a seamless
              journey from home to campus."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Built On</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Three Core Pillars</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)} className="group bg-white border border-slate-100 rounded-[5px] p-8 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-[5px] ${p.color} flex items-center justify-center mb-6`}>
                  <p.icon size={22} />
                </div>
                <div className={`w-8 h-1 rounded-full ${p.bar} mb-5`} />
                <h3 className="text-xl font-extrabold text-slate-800 mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">What We Promise</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Our Commitments</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {commitments.map((text, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="group flex items-start gap-4 p-5 bg-white rounded-[5px] border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all duration-200">
                <div className="w-8 h-8 rounded-[5px] bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors duration-200">
                  <CheckCircle2 size={16} className="text-green-500 group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-[15px] font-semibold text-slate-600 group-hover:text-slate-800 transition-colors leading-snug">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0F172B] mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Let Us Help You Reach <br /> Your Goal.
            </h2>
            <p className="text-blue-100 text-sm mb-8">Book a free session with our expert advisors — no commitment needed.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}