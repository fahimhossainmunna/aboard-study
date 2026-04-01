"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Flag from "react-world-flags";
import {
  ArrowLeft, ArrowRight, CheckCircle2, GraduationCap,
  MapPin, Clock, BadgeDollarSign, Globe2, Phone, Mail,
  BookOpen, Languages
} from "lucide-react";
import { getCountryBySlug } from "@/data/countriesData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const country = getCountryBySlug(slug);

  if (!country) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-5 text-center pt-28">
        <div className="w-16 h-16 rounded-[5px] bg-slate-100 flex items-center justify-center mb-6">
          <Globe2 size={28} className="text-slate-300" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-2">Country Not Found</h1>
        <p className="text-slate-400 text-sm mb-6">We couldn't find details for this destination.</p>
        <Link href="/countries" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
          <ArrowLeft size={14} /> Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-0 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Back */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <Link href="/" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

            {/* Left */}
            <div className="lg:col-span-3">
              <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-5">
                <div className="w-10 h-7 rounded-[3px] overflow-hidden shadow-sm ring-1 ring-black/10">
                  <Flag code={country.code} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Study Destination</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
              >
                Study in{" "}
                <span className="text-blue-600">{country.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" as const }}
                className="text-slate-500 text-[16px] leading-relaxed mb-8 max-w-lg"
              >
                {country.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/apply" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-[5px] font-bold text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200">
                  Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-6 py-3.5 rounded-[5px] font-bold text-sm transition-all duration-200">
                  Free Consultation
                </Link>
              </motion.div>
            </div>

            {/* Right — Flag large */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
              className="lg:col-span-2 relative h-56 rounded-[5px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              <Flag code={country.code} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Highlights strip */}
          <motion.div {...fadeUp(0.25)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pb-0">
            {country.highlights.map((h) => (
              <div key={h.label} className="bg-slate-50 border border-slate-100 rounded-[5px] px-4 py-4 text-center">
                <span className="text-2xl mb-2 block">{h.icon}</span>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{h.label}</p>
                <p className="text-sm font-extrabold text-slate-800">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left col */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* About */}
              <motion.div {...fadeUp()} className="bg-white border border-slate-100 rounded-[5px] p-7">
                <h2 className="text-lg font-extrabold text-slate-800 mb-4">About Studying in {country.name}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{country.about}</p>
              </motion.div>

              {/* Why Study */}
              <motion.div {...fadeUp(0.1)} className="bg-white border border-slate-100 rounded-[5px] p-7">
                <h2 className="text-lg font-extrabold text-slate-800 mb-5">Why Study in {country.name}?</h2>
                <div className="flex flex-col gap-3">
                  {country.whyStudy.map((reason) => (
                    <div key={reason} className="group flex items-start gap-3 p-3 rounded-[5px] hover:bg-slate-50 transition-colors">
                      <div className="w-7 h-7 rounded-[5px] bg-green-50 group-hover:bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200">
                        <CheckCircle2 size={13} className="text-green-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-slate-600">{reason}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top Universities */}
              <motion.div {...fadeUp(0.15)} className="bg-white border border-slate-100 rounded-[5px] p-7">
                <h2 className="text-lg font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <GraduationCap size={18} className="text-blue-500" /> Top Universities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.topUniversities.map((uni) => (
                    <div key={uni} className="group flex items-center gap-3 p-3 rounded-[5px] bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-200">
                      <div className="w-7 h-7 rounded-[5px] bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                        <GraduationCap size={13} className="text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800 leading-snug">{uni}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Courses */}
              <motion.div {...fadeUp(0.2)} className="bg-white border border-slate-100 rounded-[5px] p-7">
                <h2 className="text-lg font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-500" /> Popular Courses
                </h2>
                <div className="flex flex-wrap gap-2">
                  {country.courses.map((course) => (
                    <span key={course} className="text-[12px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-[5px]">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">

              {/* Quick Info */}
              <motion.div {...fadeUp(0.1)} className="bg-white border border-slate-100 rounded-[5px] p-6">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-widest mb-5">Quick Info</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: BadgeDollarSign, label: "Annual Fees", value: country.fees },
                    { icon: Clock, label: "Duration", value: country.duration },
                    { icon: GraduationCap, label: "Intake", value: country.intake },
                    { icon: MapPin, label: "Visa", value: country.visa },
                    { icon: Languages, label: "Language", value: country.language },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-[5px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <item.icon size={14} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{item.label}</p>
                        <p className="text-sm font-semibold text-slate-700">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Apply CTA */}
              <motion.div {...fadeUp(0.15)} className="bg-blue-600 rounded-[5px] p-6 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Ready to Apply?</p>
                  <h3 className="text-white font-extrabold text-[15px] mb-3">Start Your Journey to {country.name}</h3>
                  <p className="text-blue-100 text-xs leading-relaxed mb-5">Our advisors will guide you for free.</p>
                  <Link href="/apply" className="group flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-[5px] font-bold text-sm transition-all w-full">
                    Apply Now <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div {...fadeUp(0.2)} className="bg-slate-900 rounded-[5px] p-6">
                <h3 className="text-white font-extrabold text-[14px] mb-4">Have Questions?</h3>
                <div className="flex flex-col gap-3">
                  <a href="tel:+60167495926" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                    <Phone size={13} className="text-blue-400" /> +60 16-749 5926
                  </a>
                  <a href="mailto:info@aboardstudy.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                    <Mail size={13} className="text-blue-400" /> info@aboardstudy.com
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}