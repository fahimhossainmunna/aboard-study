"use client";

import { motion } from "framer-motion";
import { useCountries } from "@/hooks/useCountries";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

// Frontend ready korar jonno amra nicher moto section-gula gochhay rakhi
export default function CountriesPage() {
  const { countries, isLoading } = useCountries();

  // Jodi frontend-e loading state check korte chan
  if (isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-xl font-bold animate-pulse text-blue-600">Loading Destinations...</p>
    </div>
  );

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section: Ready for any country */}
        <div className="mb-20 text-center space-y-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe size={32} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Study <span className="text-blue-600">Destinations</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Explore top countries and their education systems.
          </p>
        </div>

        {/* Grid Section: Eikhane data asle auto render hobe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {countries?.map((country: any, i: number) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              <span className="text-6xl mb-8 block">{country.flag}</span>
              <h3 className="text-3xl font-black text-slate-900 mb-4">{country.name}</h3>
              <p className="text-slate-500 font-medium mb-8 line-clamp-3">{country.shortDesc}</p>
              
              <Link 
                href={`/countries/${country.slug}`}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all"
              >
                Explore Details <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}