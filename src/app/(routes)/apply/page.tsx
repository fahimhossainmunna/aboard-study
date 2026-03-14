"use client";

import { useMultiStep } from "@/hooks/useMultiStep";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, GraduationCap, Globe2, FileText,
  CheckCircle2, ArrowRight, ArrowLeft, Send, BookOpen,
  BadgeDollarSign, MapPin, CalendarDays, Upload, Sparkles
} from "lucide-react";
import {
  steps, universities, courses, intakes,
  documentUploads, trustBadges, nextSteps,
} from "@/data/applyData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function ApplyPage() {
  const {
    currentStep,
    totalSteps,
    progress,
    isFirst,
    isLast,
    submitted,
    handleNext,
    handleBack,
    handleSubmit,
  } = useMultiStep(steps.length);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="relative z-10 text-center max-w-md mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-[5px] bg-green-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/30"
          >
            <CheckCircle2 size={36} className="text-white" />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Application Submitted!</h1>
          <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
            Thank you for applying. Our team will review your application and reach out within{" "}
            <span className="text-blue-600 font-bold">24 hours</span>.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-5 text-left mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What happens next?</p>
            {nextSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
                <div className="w-5 h-5 rounded-[3px] bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-extrabold">{i + 1}</span>
                </div>
                <p className="text-sm font-semibold text-slate-600">{s}</p>
              </div>
            ))}
          </div>
          <a href="/" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-[5px] font-bold text-[15px] shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200">
            Back to Home <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest mb-5 block w-fit mx-auto">
            <Sparkles size={12} /> Start Your Application
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" as const }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-4"
          >
            Apply to Study in <br />
            <span className="text-blue-600">Malaysia Today.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" as const }}
            className="text-slate-500 text-[16px] leading-relaxed"
          >
            Fill out the form below and our advisors will reach out within 24 hours
            to guide you through the entire process — completely free.
          </motion.p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* Step indicator */}
          <motion.div {...fadeUp(0.1)} className="mb-10">
            <div className="relative h-1.5 bg-slate-100 rounded-full mb-8">
              <motion.div
                className="absolute left-0 top-0 h-full bg-blue-600 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" as const }}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-[5px] flex items-center justify-center transition-all duration-300 ${
                    step.id < currentStep
                      ? "bg-green-500 shadow-md shadow-green-500/30"
                      : step.id === currentStep
                      ? "bg-blue-600 shadow-md shadow-blue-500/30"
                      : "bg-slate-100"
                  }`}>
                    {step.id < currentStep
                      ? <CheckCircle2 size={18} className="text-white" />
                      : <step.icon size={16} className={step.id === currentStep ? "text-white" : "text-slate-400"} />
                    }
                  </div>
                  <span className={`text-[11px] font-bold text-center hidden sm:block ${
                    step.id === currentStep ? "text-blue-600" : step.id < currentStep ? "text-green-500" : "text-slate-400"
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <div className="bg-white border border-slate-100 rounded-[5px] shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">

            {/* Step header */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Step {currentStep} of {totalSteps}</p>
              <h2 className="text-xl font-extrabold text-slate-800">{steps[currentStep - 1].label}</h2>
            </div>

            {/* Step content */}
            <div className="p-8">
              <AnimatePresence mode="wait">

                {/* ── STEP 1 ── */}
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><User size={11} className="text-blue-500" /> Full Name *</label>
                        <input type="text" placeholder="Your full name" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><CalendarDays size={11} className="text-blue-500" /> Date of Birth *</label>
                        <input type="date" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><Mail size={11} className="text-blue-500" /> Email *</label>
                        <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><Phone size={11} className="text-blue-500" /> Phone / WhatsApp *</label>
                        <input type="tel" placeholder="+880 1XXX XXXXXX" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><MapPin size={11} className="text-blue-500" /> City / District</label>
                        <input type="text" placeholder="e.g. Dhaka, Chittagong" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Gender</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2 ── */}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Highest Qualification *</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select qualification</option>
                            <option>SSC / O-Level</option>
                            <option>HSC / A-Level</option>
                            <option>Diploma</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">GPA / Result *</label>
                        <input type="text" placeholder="e.g. 4.5 / 5.0 or A, B, C" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Institution Name</label>
                        <input type="text" placeholder="e.g. Dhaka College" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Year of Completion</label>
                        <input type="number" placeholder="e.g. 2024" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">English Test</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select test</option>
                            <option>IELTS</option>
                            <option>TOEFL</option>
                            <option>Duolingo</option>
                            <option>Not taken yet</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">English Score</label>
                        <input type="text" placeholder="e.g. IELTS 6.0" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3 ── */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><GraduationCap size={11} className="text-blue-500" /> Preferred University *</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                          <option value="">Select university</option>
                          {universities.map((u) => <option key={u}>{u}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><BookOpen size={11} className="text-blue-500" /> Preferred Course *</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                          <option value="">Select course</option>
                          {courses.map((c) => <option key={c}>{c}</option>)}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><CalendarDays size={11} className="text-blue-500" /> Preferred Intake</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select intake</option>
                            {intakes.map((i) => <option key={i}>{i}</option>)}
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5"><BadgeDollarSign size={11} className="text-blue-500" /> Monthly Budget (BDT)</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select budget</option>
                            <option>Under ৳30,000</option>
                            <option>৳30,000 – ৳50,000</option>
                            <option>৳50,000 – ৳80,000</option>
                            <option>৳80,000+</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Interested in Scholarship?</label>
                      <div className="flex gap-3 flex-wrap">
                        {["Yes, definitely", "If available", "No, not needed"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                            <input type="radio" name="scholarship" className="accent-blue-600 w-4 h-4 cursor-pointer" />
                            <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Additional Notes</label>
                      <textarea rows={3} placeholder="Any specific requirements, questions, or details you'd like us to know..." className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 resize-none transition-all" />
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 4 ── */}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: "easeOut" as const }} className="flex flex-col gap-5">
                    <div className="bg-blue-50 border border-blue-100 rounded-[5px] p-4 text-sm text-blue-700 font-medium">
                      📎 Upload your documents below. Accepted formats: PDF, JPG, PNG (max 5MB each). All documents are optional at this stage.
                    </div>
                    {documentUploads.map((doc) => (
                      <div key={doc.label} className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                          {doc.label} <span className="text-slate-300 font-normal normal-case">({doc.hint})</span>
                        </label>
                        <div className="group relative flex items-center gap-4 px-4 py-4 rounded-[5px] bg-slate-50 border-2 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer">
                          <div className="w-9 h-9 rounded-[5px] bg-white border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-200">
                            <Upload size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">Click to upload {doc.label}</p>
                            <p className="text-[11px] text-slate-400">PDF, JPG, PNG — max 5MB</p>
                          </div>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                      </div>
                    ))}
                    <label className="flex items-start gap-3 cursor-pointer mt-2">
                      <input type="checkbox" className="accent-blue-600 w-4 h-4 mt-0.5 cursor-pointer flex-shrink-0" />
                      <span className="text-sm text-slate-500 leading-relaxed">
                        I agree to the <a href="#" className="text-blue-600 font-semibold hover:underline">Terms of Service</a> and{" "}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>. I consent to Aboard Study contacting me regarding my application.
                      </span>
                    </label>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <button onClick={handleBack} disabled={isFirst} className="flex items-center gap-2 px-5 py-3 rounded-[5px] text-sm font-bold text-slate-500 hover:text-slate-700 bg-white border border-slate-200 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
                <ArrowLeft size={14} /> Back
              </button>
              <span className="text-xs font-bold text-slate-400">{currentStep} / {totalSteps}</span>
              {!isLast ? (
                <button onClick={handleNext} className="group flex items-center gap-2 px-6 py-3 rounded-[5px] text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                  Continue <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="group flex items-center gap-2 px-6 py-3 rounded-[5px] text-sm font-bold text-white bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                  Submit Application <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center justify-center gap-5">
            {trustBadges.map((b) => (
              <span key={b} className="text-xs font-bold text-slate-400">{b}</span>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}