"use client";

import { motion } from "framer-motion";
import Flag from "react-world-flags";
import { ArrowRight, MapPin, Globe2 } from "lucide-react";
import Link from "next/link";

const countries = [
  {
    name: "Malaysia",
    code: "MY",
    universities: "50+ Universities",
    desc: "No. 1 destination for affordable quality education in Asia.",
  },
  {
    name: "United Kingdom",
    code: "GB",
    universities: "20+ Colleges",
    desc: "World-class education with rich cultural history.",
  },
  {
    name: "United States",
    code: "US",
    universities: "15+ Institutions",
    desc: "The hub of global innovation and top-tier research.",
  },
  {
    name: "Canada",
    code: "CA",
    universities: "10+ Colleges",
    desc: "Great immigration opportunities and quality living.",
  },
];

const Destinations = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin size={13} />
              Our Destinations
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Where Do You Want <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">To Study?</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 10" fill="none">
                  <path d="M2 7C50 2 140 1 198 6" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* ── View All Countries Button (Header Right) ── */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-[15px] leading-relaxed max-w-xs md:text-right"
            >
              We partner with globally recognized institutions to provide the best
              education opportunities across the globe.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               <Link 
                href="/countries" 
                className="group flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-[13px] hover:text-blue-700 transition-all duration-300"
              >
                View All Countries 
                <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/countries/${country.name.toLowerCase().replace(/ /g, "-")}`}
                className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[26px] p-7 overflow-hidden shadow-sm hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Inner glow on hover */}
                <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Flag */}
                <div className="w-14 h-10 rounded-lg overflow-hidden mb-5 shadow-md ring-1 ring-black/10 flex-shrink-0">
                  <Flag code={country.code} className="w-full h-full object-cover" />
                </div>

                {/* University pill */}
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-4 w-fit tracking-wide bg-blue-50 text-blue-600 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  {country.universities}
                </span>

                {/* Name */}
                <h3 className="text-[22px] font-extrabold text-slate-800 group-hover:text-white leading-tight mb-2 transition-colors duration-300">
                  {country.name}
                </h3>

                {/* Desc */}
                <p className="text-sm text-slate-400 group-hover:text-blue-100 leading-relaxed flex-1 transition-colors duration-300">
                  {country.desc}
                </p>

                {/* Explore row */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
                    Explore
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;