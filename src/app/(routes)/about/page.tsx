"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2, Users, Trophy, Globe2, Target, Eye,
  ShieldCheck, Heart, Sparkles, ArrowRight, Quote,
  Phone, Star, Award, Handshake, Clock
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const stats = [
  { label: "Students Assisted", value: "5,000+", icon: Users },
  { label: "Visa Success Rate", value: "99%", icon: Trophy },
  { label: "Partner Universities", value: "50+", icon: Globe2 },
  { label: "Years Experience", value: "10+", icon: Target },
];

const values = [
  { title: "Transparency", icon: ShieldCheck, accent: "bg-blue-600", light: "bg-blue-50 text-blue-600", desc: "No hidden charges, no surprises. Every step of your journey is clear and honest." },
  { title: "Commitment", icon: Heart, accent: "bg-rose-500", light: "bg-rose-50 text-rose-500", desc: "We stay with you from the first call to the day you land on campus." },
  { title: "Excellence", icon: Sparkles, accent: "bg-amber-500", light: "bg-amber-50 text-amber-500", desc: "We pursue the best outcomes — for your admission, your visa, and your future." },
];

const features = [
  "100% Free Consultation for all students",
  "Official Representative of top Malaysian Universities",
  "Highest Visa Success Rate (EMGS Specialist)",
  "On-arrival support & accommodation assistance",
  "Dedicated career counselling and path planning",
];

const team = [
  { name: "Rahim Chowdhury", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", years: "10 yrs exp" },
  { name: "Sumaiya Akter", role: "Head of Admissions", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", years: "7 yrs exp" },
  { name: "Tanvir Ahmed", role: "Visa Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", years: "6 yrs exp" },
  { name: "Nadia Islam", role: "Student Counsellor", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop", years: "5 yrs exp" },
];

const testimonials = [
  { name: "Arif Hossain", uni: "Taylor's University", text: "Aboard Study made my Malaysia dream a reality. From admission to visa — everything was handled perfectly.", stars: 5 },
  { name: "Fatema Khanam", uni: "Sunway University", text: "I was nervous about the whole process but the team guided me step by step. Got my visa in record time!", stars: 5 },
  { name: "Rakib Hasan", uni: "APU Malaysia", text: "Best consultancy in Bangladesh. They genuinely care about students, not just fees. Highly recommended.", stars: 5 },
];

const milestones = [
  { year: "2015", label: "Founded in Dhaka", desc: "Started with a single office and a big vision." },
  { year: "2017", label: "Malaysia Office Opened", desc: "Expanded to Kuala Lumpur to serve students on-ground." },
  { year: "2019", label: "500+ Students Milestone", desc: "Celebrated 500 successful admissions across Malaysia." },
  { year: "2022", label: "50+ University Partners", desc: "Partnered with 50+ top Malaysian institutions." },
  { year: "2025", label: "5,000+ Students Helped", desc: "A decade of transforming student journeys." },
];

const AboutPage = () => {
  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative pt-28 pb-0 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              ✦ Our Story
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
                className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6"
              >
                Empowering <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Global Dreams</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
                    <path d="M2 7C60 2 200 1 298 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <br /> Since 2015.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
                className="text-slate-500 text-[16px] leading-relaxed mb-8 max-w-md"
              >
                Aboard Study Assist Link is a premier education consultancy dedicated to helping students
                navigate their path to higher education in Malaysia. We don't just process visas — we shape futures.
              </motion.p>
              <motion.div {...fadeUp(0.2)} className="flex items-center gap-4 flex-wrap">
                <a href="/contact" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-[5px] font-bold text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200">
                  Get Free Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a href="#mission" className="text-sm font-bold text-slate-400 hover:text-slate-700 transition-colors">Our Mission ↓</a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
              className="relative h-[480px] rounded-[5px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]"
            >
              <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Students studying" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-[5px] px-5 py-3 shadow-lg">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Established</p>
                <p className="text-2xl font-extrabold text-blue-600 leading-none mt-0.5">2015</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <section className="relative z-10 bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center lg:px-10 gap-3">
                <div className="w-10 h-10 rounded-[5px] bg-blue-600/20 flex items-center justify-center text-blue-400"><s.icon size={20} /></div>
                <p className="text-4xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MISSION & VISION ── */}
      <section id="mission" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Mission & Vision</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div {...fadeUp(0.1)} className="relative bg-blue-600 rounded-[5px] p-10 overflow-hidden group">
              <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-[5px] bg-white/15 border border-white/20 flex items-center justify-center mb-6"><Target size={24} className="text-white" /></div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-[0.18em] mb-3">Our Mission</p>
                <p className="text-white text-xl sm:text-2xl font-bold leading-snug">To provide transparent, reliable, and expert guidance to students aspiring for world-class education in Malaysia — ensuring a seamless journey from home to campus.</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.18)} className="relative bg-slate-900 rounded-[5px] p-10 overflow-hidden group">
              <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-blue-600/10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-[5px] bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-6"><Eye size={24} className="text-blue-400" /></div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.18em] mb-3">Our Vision</p>
                <p className="text-slate-200 text-xl sm:text-2xl font-bold leading-snug">To become the most trusted name in overseas education — recognized for our commitment to student success and our partnerships with Malaysia's finest universities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. TIMELINE ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">A Decade of Impact</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Our Journey</h2>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-blue-100 pointer-events-none hidden sm:block" />

            {milestones.map((m, i) => (
              <motion.div key={m.year} {...fadeUp(i * 0.1)} className={`relative flex items-center gap-0 mb-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                {/* Card */}
                <div className={`w-full sm:w-[calc(50%-32px)] ${i % 2 === 0 ? "sm:pr-0 sm:mr-8" : "sm:pl-0 sm:ml-8"}`}>
                  <div className="bg-white border border-slate-100 rounded-[5px] p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200">
                    <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-[5px] mb-3 uppercase tracking-wider">{m.year}</span>
                    <h3 className="font-extrabold text-slate-800 text-lg mb-1">{m.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-[5px] bg-blue-600 items-center justify-center shadow-lg shadow-blue-500/30 z-10 flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="hidden sm:block sm:w-[calc(50%-32px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CORE VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">What We Stand For</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Core Values</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs sm:text-right leading-relaxed">The principles that guide every decision we make for our students.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.1)} className="group bg-white border border-slate-100 rounded-[5px] p-8 hover:border-slate-200 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-[5px] ${v.light} flex items-center justify-center mb-6`}><v.icon size={22} /></div>
                <div className={`w-8 h-1 rounded-full ${v.accent} mb-5`} />
                <h3 className="text-xl font-extrabold text-slate-800 mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHAT MAKES US SPECIAL ── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.05)} className="relative h-[580px] rounded-[5px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)] order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Our team" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-[5px] p-5 shadow-xl">
                <Quote size={18} className="text-blue-600 mb-2" />
                <p className="text-slate-700 text-sm font-semibold leading-snug">"We don't just process visas — we invest in every student's future."</p>
                <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest">— Aboard Study Team</p>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.div {...fadeUp()}>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Why Choose Us</span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2 mb-10">What Makes <br /><span className="text-blue-600">Us Different?</span></h2>
              </motion.div>
              <div className="flex flex-col gap-4">
                {features.map((text, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.08)} className="group flex items-start gap-4 p-4 rounded-[5px] hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all duration-200">
                    <div className="w-8 h-8 rounded-[5px] bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors duration-200">
                      <CheckCircle2 size={16} className="text-green-500 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <p className="text-[15px] font-semibold text-slate-600 group-hover:text-slate-800 transition-colors leading-snug">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. MEET THE TEAM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">The People Behind It</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Meet Our Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fadeUp(i * 0.1)} className="group bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[11px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-[5px] uppercase tracking-wide">{member.years}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-slate-800 text-[15px]">{member.name}</h3>
                  <p className="text-blue-600 text-xs font-bold mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-16 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Student Voices</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">What Students Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.1)} className="bg-white border border-slate-100 rounded-[5px] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex gap-1 mb-5">{Array.from({ length: t.stars }).map((_, j) => (<Star key={j} size={14} className="text-amber-400 fill-amber-400" />))}</div>
                <Quote size={20} className="text-blue-100 mb-3" />
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  <div className="w-9 h-9 rounded-[5px] bg-blue-600 flex items-center justify-center text-white text-xs font-extrabold">{t.name.charAt(0)}</div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-800">{t.name}</p>
                    <p className="text-[11px] text-blue-600 font-semibold">{t.uni}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. AWARDS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Our Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Awards & Recognition</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Best Consultancy 2023", body: "Awarded by the Bangladesh Education Forum for excellence in overseas counselling." },
              { icon: Handshake, title: "EMGS Certified Partner", body: "Officially certified by EMGS Malaysia for highest visa processing standards." },
              { icon: Trophy, title: "99% Visa Success", body: "Recognized for maintaining the highest visa approval rate for 5 consecutive years." },
            ].map((a, i) => (
              <motion.div key={a.title} {...fadeUp(i * 0.1)} className="group flex items-start gap-5 p-6 bg-slate-50 border border-slate-100 rounded-[5px] hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-[5px] bg-blue-100 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <a.icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 group-hover:text-white text-[15px] mb-1 transition-colors duration-300">{a.title}</h3>
                  <p className="text-slate-400 group-hover:text-blue-100 text-sm leading-relaxed transition-colors duration-300">{a.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="py-20 bg-slate-900 mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-400/10 rounded-full blur-[60px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        </div>
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.18em] mb-3">Ready to Begin?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">Your Journey to Malaysia <br /> Starts with One Step.</h2>
            <p className="text-slate-500 text-sm mb-8">Book a free session with our expert advisors today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/contact" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="https://wa.me/60167495926" className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] transition-all duration-200">
                <Phone size={15} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;