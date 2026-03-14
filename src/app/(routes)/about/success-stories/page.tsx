"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ArrowRight, Sparkles, GraduationCap, MapPin, CalendarDays } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const stories = [
  {
    name: "Arif Hossain",
    course: "BSc Computer Science",
    uni: "Taylor's University",
    year: "2023",
    location: "Kuala Lumpur",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    text: "Aboard Study made my Malaysia dream a reality. From admission to visa — everything was handled perfectly. I couldn't have done this without their expert team.",
    stars: 5,
    tag: "Visa Approved",
  },
  {
    name: "Fatema Khanam",
    course: "BBA Marketing",
    uni: "Sunway University",
    year: "2023",
    location: "Petaling Jaya",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    text: "I was nervous about the whole process but the team guided me step by step. Got my visa in record time! The counsellors are incredibly supportive and knowledgeable.",
    stars: 5,
    tag: "Scholarship Winner",
  },
  {
    name: "Rakib Hasan",
    course: "BSc Software Engineering",
    uni: "APU Malaysia",
    year: "2022",
    location: "Kuala Lumpur",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    text: "Best consultancy in Bangladesh. They genuinely care about students, not just fees. The whole journey was smooth and stress-free. Highly recommended to everyone.",
    stars: 5,
    tag: "Top Achiever",
  },
  {
    name: "Sadia Rahman",
    course: "MBBS Medicine",
    uni: "MAHSA University",
    year: "2024",
    location: "Kuala Lumpur",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    text: "Getting into MBBS in Malaysia seemed impossible, but Aboard Study made it happen. Their guidance through the documentation process was exceptional.",
    stars: 5,
    tag: "Medical Student",
  },
  {
    name: "Mehedi Islam",
    course: "MBA Business Admin",
    uni: "Multimedia University",
    year: "2023",
    location: "Cyberjaya",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    text: "The team was available 24/7 to answer my questions. From the first consultation to arriving on campus, the support was outstanding throughout.",
    stars: 5,
    tag: "Postgraduate",
  },
  {
    name: "Tania Akter",
    course: "BA Architecture",
    uni: "City University Malaysia",
    year: "2024",
    location: "Kuala Lumpur",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    text: "I got into my dream architecture program thanks to Aboard Study's careful guidance. They helped me put together a strong portfolio application.",
    stars: 5,
    tag: "Architecture",
  },
];

const stats = [
  { value: "5,000+", label: "Students Helped" },
  { value: "99%", label: "Visa Success Rate" },
  { value: "50+", label: "Partner Universities" },
  { value: "10+", label: "Years Experience" },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest">
              <Sparkles size={12} /> Success Stories
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            Real Students. <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Real Results.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 260 10" fill="none">
                <path d="M2 7C50 2 190 1 258 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-xl"
          >
            Over 5,000 students have trusted Aboard Study to guide them to their dream
            universities in Malaysia. Here are some of their stories.
          </motion.p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center lg:px-10 gap-2">
                <p className="text-4xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES GRID ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Testimonials</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">Student Stories</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs sm:text-right">Every story is a reminder of why we do what we do.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <motion.div
                key={s.name}
                {...fadeUp(i * 0.07)}
                className="group bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold text-white bg-blue-600 px-2.5 py-1 rounded-[5px] uppercase tracking-wide">{s.tag}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: s.stars }).map((_, j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <Quote size={18} className="text-blue-100 mb-2" />
                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-5 line-clamp-3">"{s.text}"</p>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between">
                      <p className="font-extrabold text-slate-800 text-[14px]">{s.name}</p>
                      <span className="text-[11px] text-blue-600 font-bold">{s.year}</span>
                    </div>
                    <p className="text-[12px] font-semibold text-blue-600">{s.course}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <GraduationCap size={11} /> {s.uni}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin size={11} /> {s.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-400/10 rounded-full blur-[60px]" />
        </div>
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.18em] mb-3">Your Turn</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready to Write <br /> Your Success Story?
            </h2>
            <p className="text-slate-500 text-sm mb-8">Join 5,000+ students who trusted Aboard Study to get to Malaysia.</p>
            <a href="/contact" className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-[5px] font-bold text-[15px] shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              Start Your Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}