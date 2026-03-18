"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    name: "Malaysia",
    count: "50+ Universities",
    desc: "No. 1 destination for affordable quality education in Asia.",
    flag: "🇲🇾",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600",
  },
  {
    name: "United Kingdom",
    count: "20+ Colleges",
    desc: "World-class education with rich cultural history and prestige.",
    flag: "🇬🇧",
    color: "from-red-500 to-red-600",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600",
  },
  {
    name: "United States",
    count: "15+ Institutions",
    desc: "The hub of global innovation and top-tier research opportunities.",
    flag: "🇺🇸",
    color: "from-indigo-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600",
  },
  {
    name: "Canada",
    count: "10+ Colleges",
    desc: "Great immigration opportunities and high quality of living.",
    flag: "🇨🇦",
    color: "from-rose-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=600",
  },
  {
    name: "Australia",
    count: "12+ Universities",
    desc: "Stunning landscapes with world-recognized degree programs.",
    flag: "🇦🇺",
    color: "from-blue-700 to-blue-800",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=600",
  },
  {
    name: "Germany",
    count: "8+ Institutions",
    desc: "Low-cost public education and heart of European engineering.",
    flag: "🇩🇪",
    color: "from-orange-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600",
  },
];

export default function DestinationsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Globe2 size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            Choose Your <span className="text-blue-600">Destination.</span>
          </motion.h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Explore globally recognized institutions across the globe. We partner 
            with the best to provide you the best education opportunities.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="text-4xl">{dest.flag}</span>
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 text-[10px] font-black uppercase tracking-widest text-white">
                    {dest.count}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-black text-slate-900">{dest.name}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {dest.desc}
                </p>
                <Link 
                  href={`/destinations/${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white px-6 py-3 rounded-xl font-black text-sm transition-all"
                >
                  Explore Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-slate-900 rounded-[3.5rem] text-center text-white space-y-6 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black">Confused about where to go?</h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
              Get a free consultation from our experts to find the best country 
              matching your profile and budget.
            </p>
            <div className="pt-6">
              <Link 
                href="/apply" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-500/20 active:scale-95 inline-flex items-center gap-3"
              >
                Free Consultation <Sparkles size={20} />
              </Link>
            </div>
          </div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
}