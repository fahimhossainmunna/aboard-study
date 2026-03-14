"use client";

import { motion } from "framer-motion";
import { Search, MapPin, GraduationCap, School, ExternalLink, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const universities = [
  // Public Universities
  { name: "Universiti Malaya (UM)", location: "Kuala Lumpur", type: "Public", ranking: "#1 in Malaysia" },
  { name: "Universiti Putra Malaysia (UPM)", location: "Serdang", type: "Public", ranking: "Top 150 Global" },
  { name: "Universiti Kebangsaan Malaysia (UKM)", location: "Bangi", type: "Public", ranking: "QS Ranked" },
  { name: "Universiti Teknologi Malaysia (UTM)", location: "Johor Bahru", type: "Public", ranking: "Engineering Leader" },
  { name: "Universiti Sains Malaysia (USM)", location: "Penang", type: "Public", ranking: "Top Research Uni" },

  // Private Universities
  { name: "Taylor's University", location: "Subang Jaya", type: "Private", ranking: "Top Private Uni" },
  { name: "Sunway University", location: "Sunway City", type: "Private", ranking: "5-Star Rating" },
  { name: "Asia Pacific University (APU)", location: "Kuala Lumpur", type: "Private", ranking: "Tech Specialist" },
  { name: "UCSI University", location: "Kuala Lumpur", type: "Private", ranking: "QS Ranked" },
  { name: "Management & Science University (MSU)", location: "Shah Alam", type: "Private", ranking: "Hospitality Leader" },
  { name: "SEGi University", location: "Kota Damansara", type: "Private", ranking: "Affordable Choice" },
  { name: "HELP University", location: "Kuala Lumpur", type: "Private", ranking: "Psychology Leader" },
  { name: "MAHSA University", location: "Jenjarom", type: "Private", ranking: "Healthcare Specialist" },
  { name: "City University Malaysia", location: "Petaling Jaya", type: "Private", ranking: "Fastest Growing" },
  { name: "INTI International University", location: "Nilai", type: "Private", ranking: "Global Network" },
  { name: "IUKL", location: "Kajang", type: "Private", ranking: "Infrastructure Expert" },
  { name: "Lincoln University College", location: "Petaling Jaya", type: "Private", ranking: "Nursing/Medicine" },
  { name: "UNITAR International University", location: "Petaling Jaya", type: "Private", ranking: "Early Childhood" },
  { name: "University of Cyberjaya (UoC)", location: "Cyberjaya", type: "Private", ranking: "Medical Hub" },
  { name: "Multimedia University (MMU)", location: "Cyberjaya", type: "Private", ranking: "Creative Media" },
  { name: "Infrastructure University (IUKL)", location: "Kajang", type: "Private", ranking: "Engineering" },
  { name: "KDU University College", location: "Shah Alam", type: "Private", ranking: "Communication" },
  { name: "Quest International University", location: "Ipoh", type: "Private", ranking: "Affordable" },
  { name: "Nilai University", location: "Nilai", type: "Private", ranking: "Campus Life" },

  // Branch Campuses
  { name: "Monash University Malaysia", location: "Sunway", type: "Branch", ranking: "Australian Branch" },
  { name: "University of Nottingham", location: "Semenyih", type: "Branch", ranking: "UK Branch" },
  { name: "Xiamen University Malaysia", location: "Sepang", type: "Branch", ranking: "China Branch" },
  { name: "Heriot-Watt University", location: "Putrajaya", type: "Branch", ranking: "UK Branch" },
  { name: "Southampton University", location: "Johor", type: "Branch", ranking: "Engineering Leader" },
  { name: "Swinburne University", location: "Sarawak", type: "Branch", ranking: "Australian Branch" },
  { name: "Curtin University", location: "Miri", type: "Branch", ranking: "Australian Branch" },
];

const UniversityPage = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filtered = universities.filter(u => 
    (activeTab === "All" || u.type === activeTab) &&
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
             <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 flex items-center gap-2">
                <Globe size={14} /> Global Excellence
             </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
             Explore <span className="text-blue-600">Top Universities</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
             Browse through our curated list of 30+ top Malaysian universities. From Public to Private branch campuses, find your perfect match.
          </p>
        </div>

        {/* --- Search & Filter Bar --- */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 font-bold bg-white shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {["All", "Public", "Private", "Branch"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-2xl font-black text-sm transition-all whitespace-nowrap ${
                  activeTab === tab ? "bg-blue-600 text-white shadow-xl shadow-blue-200" : "bg-white text-slate-400 hover:text-blue-600 border border-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((uni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              <div className="h-40 w-full bg-slate-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-blue-50 transition-colors">
                 <School size={48} className="text-slate-300 group-hover:text-blue-200 transition-colors" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider text-blue-600">
                    {uni.type}
                 </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 leading-tight h-14 line-clamp-2">
                   {uni.name}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-wide">
                   <MapPin size={14} className="text-blue-500" /> {uni.location}
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-1.5">
                      <GraduationCap size={16} className="text-amber-500" />
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">{uni.ranking}</span>
                   </div>
                   <button className="p-2 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ExternalLink size={18} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-32 space-y-4">
             <div className="text-6xl">🔍</div>
             <h3 className="text-2xl font-black text-slate-900">No universities found</h3>
             <p className="text-slate-400 font-medium">Try searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityPage;