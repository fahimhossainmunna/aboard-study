"use client";

import { useParams } from "next/navigation";
import { useCountries } from "@/hooks/useCountries";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Info, GraduationCap, PlaneTakeoff, 
  FileText, ShieldCheck, ArrowRight, MapPin, Search 
} from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function CountryDetailPage() {
  const { slug } = useParams();
  const { countryDetail, isLoading } = useCountries(slug as string);

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{countryDetail?.flag || "🌍"}</span>
            <div className="h-12 w-[2px] bg-slate-200 mx-2" />
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Study in <span className="text-blue-600">{countryDetail?.name || "Destination"}</span>
            </h1>
          </motion.div>
          <motion.p {...fadeUp(0.1)} className="text-slate-500 text-xl font-medium max-w-3xl leading-relaxed">
            {countryDetail?.description || "Explore world-class education systems and life-changing opportunities in this destination."}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* ── LEFT COLUMN: DETAILS ── */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* Why Study Here */}
          <motion.div {...fadeUp(0.2)} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Info size={24} /></div>
              <h2 className="text-3xl font-black text-slate-900">Why Choose {countryDetail?.name}?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-blue-600 mb-4" size={24} />
                  <h4 className="font-black text-slate-900 mb-2">Benefit {i}</h4>
                  <p className="text-slate-500 text-sm font-medium">Top-tier education with global recognition and great career prospects.</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Admission Process (Stepper) */}
          <motion.div {...fadeUp(0.3)} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><PlaneTakeoff size={24} /></div>
              <h2 className="text-3xl font-black text-slate-900">Application Process</h2>
            </div>
            <div className="space-y-6 ml-4 border-l-2 border-slate-100 pl-8 relative">
              {[
                { t: "Counseling", d: "Talk to our experts about your goals." },
                { t: "Application", d: "We help you apply to your dream uni." },
                { t: "Visa Processing", d: "End-to-end guidance for your student visa." },
                { t: "Pre-Departure", d: "Get ready for your flight and accommodation." }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-blue-600" />
                  <h4 className="font-black text-xl text-slate-900">{step.t}</h4>
                  <p className="text-slate-500 font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: SIDEBAR ── */}
        <aside className="space-y-8">
          
          {/* Requirement Card */}
          <motion.div {...fadeUp(0.4)} className="p-8 bg-slate-900 rounded-[3rem] text-white space-y-6 sticky top-32 shadow-2xl shadow-blue-900/20">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <FileText className="text-blue-400" size={28} />
              <h3 className="text-2xl font-black">Requirements</h3>
            </div>
            <ul className="space-y-4">
              {countryDetail?.requirements?.map((req: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                  <ShieldCheck size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              )) || (
                <li className="text-slate-400 italic">Requirements data will be fetched from API.</li>
              )}
            </ul>
            <Link 
              href="/apply" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-black transition-all active:scale-95"
            >
              Start My Application
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100">
            <h4 className="font-black text-blue-900 mb-4">Quick Insights</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold"><span className="text-blue-700">Intakes:</span> <span className="text-slate-900">Jan, May, Sept</span></div>
              <div className="flex justify-between text-sm font-bold"><span className="text-blue-700">Currency:</span> <span className="text-slate-900">Local Currency</span></div>
              <div className="flex justify-between text-sm font-bold"><span className="text-blue-700">Work Limit:</span> <span className="text-slate-900">20 Hrs/Week</span></div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}