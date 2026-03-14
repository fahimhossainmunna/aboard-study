"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CalendarDays, User } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import successOne from "@/assets/sucessOne.jpg";
import successTwo from "@/assets/sucessTwo.jpg";
import successThree from "@/assets/sucessTheree.jpg";

const stories = [
  {
    id: 1,
    title: "City University's Interior Design Students Triumph at MIID 2025",
    date: "13 Oct 2025",
    author: "CityU",
    category: "Student Stories",
    image: successOne,
    desc: "Nine awards earned across multiple categories highlight creativity, excellence, and innovation.",
  },
  {
    id: 2,
    title: "Taylor's Students Secure Global Internship at Top Tech Firms",
    date: "20 Nov 2025",
    author: "Taylor's",
    category: "Success Stories",
    image: successTwo,
    desc: "Our students continue to shine on the international stage, securing prestigious roles.",
  },
  {
    id: 3,
    title: "APU Alumni Leads AI Innovation Lab in Kuala Lumpur",
    date: "05 Dec 2025",
    author: "APU",
    category: "Alumni News",
    image: successThree,
    desc: "From classroom to industry leadership, our students are shaping the future of technology.",
  },
];

const SuccessStories = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold w-fit">
              <Sparkles size={14} />
              Student Success Stories
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Our Students Are{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Changing</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 180 10" fill="none">
                  <path d="M2 7C40 2 120 1 178 6" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              the World
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-slate-500 leading-relaxed text-[15px]">
                <Link href="/universities/city-u" className="text-blue-600 font-bold border-b border-blue-200 hover:border-blue-600 transition-colors">
                  City University Malaysia
                </Link>{" "}
                takes pride in celebrating the outstanding achievements of its students,
                who continue to excel across diverse fields worldwide.
              </p>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                Their accomplishments stand as a testament to the university's commitment
                to nurturing talent and empowering future professionals to thrive.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {stories.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-black/5">
                    <Image src={s.image} alt={s.title} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-slate-700 group-hover:text-blue-600 leading-snug line-clamp-2 transition-colors">
                      {s.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                        <User size={10} /> {s.author}
                      </span>
                      <span className="text-slate-200">·</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                        <CalendarDays size={10} /> {s.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about/success-stories"
              className="group inline-flex items-center gap-2.5 w-fit bg-slate-900 hover:bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold text-[14px] shadow-lg shadow-slate-500 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              View All Stories
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* ── RIGHT SLIDER ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-[32px] border-2 border-blue-100 pointer-events-none" />

            {/* 
              KEY FIX:
              - "overflow-hidden" এখন শুধু inner div-এ, outer group div-এ নেই
              - image-এ scale বাদ দিয়েছি — এটাই bleed এর কারণ ছিল
              - Swiper-এর overflow Swiper নিজেই handle করে
            */}
            <div className="group relative rounded-[28px] shadow-[0_24px_64px_rgba(0,0,0,0.12)] ring-1 ring-black/5" style={{ isolation: "isolate" }}>
              
              {/* This inner div clips the swiper properly */}
              <div className="rounded-[28px] overflow-hidden">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  style={{ width: "100%", height: "520px" }}
                >
                  {stories.map((story) => (
                    <SwiperSlide key={story.id}>
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Image — NO scale on hover to prevent bleed */}
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Overlay — deepens on group hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent transition-all duration-500 group-hover:from-slate-900/85 group-hover:via-slate-900/20" />

                        {/* Category tag */}
                        <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {story.category}
                        </div>

                        {/* Hover content — slides up */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                          <div className="flex items-center gap-3 text-[11px] font-semibold text-blue-300 mb-3">
                            <span className="flex items-center gap-1">
                              <User size={11} /> {story.author}
                            </span>
                            <span className="text-slate-500">·</span>
                            <span className="flex items-center gap-1">
                              <CalendarDays size={11} /> {story.date}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                            {story.title}
                          </h3>
                          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                            {story.desc}
                          </p>
                          <button className="w-fit px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95">
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Nav arrows — slide in on hover */}
              <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-blue-600 transition-all duration-300 ease-out">
                <ChevronLeft size={20} />
              </button>
              <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-blue-600 transition-all duration-300 ease-out">
                <ChevronRight size={20} />
              </button>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;