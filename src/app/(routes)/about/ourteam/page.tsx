"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Linkedin, Mail, ArrowRight, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const team = [
  {
    name: "Rahim Chowdhury",
    role: "Founder & CEO",
    bio: "10+ years in overseas education consultancy. Built Aboard Study from the ground up with a vision to democratize access to Malaysian universities.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    years: "10 yrs exp",
    email: "rahim@aboardstudy.com",
  },
  {
    name: "Sumaiya Akter",
    role: "Head of Admissions",
    bio: "Specialist in university application processes across 50+ partner institutions in Malaysia. Helped 3,000+ students secure admissions.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    years: "7 yrs exp",
    email: "sumaiya@aboardstudy.com",
  },
  {
    name: "Tanvir Ahmed",
    role: "Visa Specialist",
    bio: "EMGS-certified visa processing expert with a near-perfect approval record. Handles all student pass applications with precision.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    years: "6 yrs exp",
    email: "tanvir@aboardstudy.com",
  },
  {
    name: "Nadia Islam",
    role: "Student Counsellor",
    bio: "Passionate about matching students with their ideal university and course. Provides personalized guidance from the very first consultation.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    years: "5 yrs exp",
    email: "nadia@aboardstudy.com",
  },
  {
    name: "Arman Hossain",
    role: "Malaysia Representative",
    bio: "Based in Kuala Lumpur to assist students on-arrival. Handles accommodation, orientation, and university liaison on the ground.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    years: "4 yrs exp",
    email: "arman@aboardstudy.com",
  },
  {
    name: "Tasnim Begum",
    role: "Finance & Scholarships",
    bio: "Expert in scholarship applications and financial planning for study abroad. Helped students save millions in tuition through funding opportunities.",
    img: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=600&auto=format&fit=crop",
    years: "4 yrs exp",
    email: "tasnim@aboardstudy.com",
  },
];

export default function OurTeamPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <Users size={12} /> Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            The People Who <br />
            <span className="text-blue-600">Make It Happen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl"
          >
            A dedicated team of education experts, visa specialists, and student counsellors
            committed to turning your study abroad dream into reality.
          </motion.p>

          {/* Stats row */}
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-6 mt-10">
            {[
              { val: "6+", label: "Expert Team Members" },
              { val: "10+", label: "Years Combined Exp." },
              { val: "2", label: "Office Locations" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-[5px] px-5 py-3">
                <p className="text-2xl font-extrabold text-blue-600">{s.val}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(i * 0.08)}
                className="group bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <span className="absolute top-4 right-4 text-[11px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-[5px] uppercase tracking-wide">{member.years}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-extrabold text-slate-800 text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-bold mb-3 uppercase tracking-wide">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                  {/* Contact row */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                    <a href={`mailto:${member.email}`} className="flex-1 flex items-center gap-2 text-xs text-slate-400 hover:text-blue-600 transition-colors font-medium truncate">
                      <Mail size={13} className="flex-shrink-0" />
                      {member.email}
                    </a>
                    <a href="#" className="w-8 h-8 rounded-[5px] bg-slate-50 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="bg-slate-900 rounded-[5px] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.18em] mb-2">Careers</p>
                <h2 className="text-3xl font-extrabold text-white leading-tight mb-2">Want to Join Our Team?</h2>
                <p className="text-slate-400 text-sm max-w-md">We're always looking for passionate people who want to make a difference in students' lives.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href="mailto:careers@aboardstudy.com" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-[5px] font-bold text-sm hover:-translate-y-0.5 transition-all duration-200">
                  Send Your CV <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-[5px] font-bold text-sm transition-all duration-200">
                  <Phone size={15} /> Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}