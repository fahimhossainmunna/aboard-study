"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headset, BadgeDollarSign, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    title: "100% Visa Success",
    desc: "Our expert documentation team ensures your visa application is flawless and approved first time.",
    icon: ShieldCheck,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    accent: "group-hover:bg-blue-600",
    border: "group-hover:border-blue-200",
  },
  {
    title: "Fast Processing",
    desc: "We value your time. Get your offer letter and visa approval in the shortest possible time.",
    icon: Zap,
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    accent: "group-hover:bg-amber-500",
    border: "group-hover:border-amber-200",
  },
  {
    title: "24/7 Support",
    desc: "From Bangladesh to Malaysia, our team is always available to help you at every single step.",
    icon: Headset,
    bg: "bg-green-50",
    iconColor: "text-green-600",
    accent: "group-hover:bg-green-600",
    border: "group-hover:border-green-200",
  },
  {
    title: "No Hidden Costs",
    desc: "Transparency is our priority. No extra service charges or hidden fees throughout the process.",
    icon: BadgeDollarSign,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    accent: "group-hover:bg-purple-600",
    border: "group-hover:border-purple-200",
  },
];

const bullets = [
  "Dedicated advisor from Day 1",
  "University shortlisting & application",
  "Scholarship guidance",
  "Pre-departure support",
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[80px] opacity-40 translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT TEXT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold w-fit">
              ✦ Why Aboard Study
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              The Most Trusted{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Education</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 180 10" fill="none">
                  <path d="M2 7C40 2 120 1 178 6" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Partner in Bangladesh
            </h2>

            {/* Body */}
            <p className="text-slate-500 text-[16px] leading-relaxed max-w-md">
              With over 10 years of experience, we have helped thousands of students
              achieve their dreams of studying in world-class Malaysian universities.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={13} className="text-blue-600" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 w-fit"
              >
                Talk to an Expert
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold text-[15px] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 w-fit"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT FEATURE GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white p-6 sm:p-7 rounded-[22px] border border-slate-100 ${item.border} shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${item.accent} opacity-0 group-hover:opacity-100 transition-all duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className={item.iconColor} />
                </div>

                {/* Text */}
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom line */}
                <div className={`mt-5 w-6 h-0.5 rounded-full ${item.bg} ${item.iconColor} opacity-50 group-hover:w-12 transition-all duration-300`} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;