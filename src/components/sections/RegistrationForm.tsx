"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, GraduationCap, MapPin, CheckCircle, Clock, HeadphonesIcon } from "lucide-react";

const RegistrationForm = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-40 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] opacity-60 translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            🎓 Free Consultation
          </span>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-slate-100 grid grid-cols-1 lg:grid-cols-5"
        >

          {/* ── LEFT PANEL ── */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-10 lg:p-12 flex flex-col justify-between gap-10 relative overflow-hidden">

            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                Start Your <br />
                <span className="text-blue-200">Global Journey</span> <br />
                Today.
              </h2>
              <p className="text-blue-100 text-[15px] leading-relaxed">
                Fill out the form and our expert advisors will reach out within 24 hours — completely free.
              </p>
            </div>

            {/* Trust points */}
            <div className="relative z-10 flex flex-col gap-4">
              {[
                { icon: CheckCircle, text: "100% Free Consultation" },
                { icon: Clock, text: "Response within 24 hours" },
                { icon: HeadphonesIcon, text: "Dedicated advisor assigned" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-100">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Office address */}
            <div className="relative z-10 flex items-start gap-3 pt-4 border-t border-white/10">
              <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={15} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-0.5">Our Office</p>
                <p className="text-blue-100 text-sm leading-relaxed">Banani, Dhaka-1213, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="text-xl font-extrabold text-slate-800 mb-1">Book a Free Consultation</h3>
            <p className="text-slate-400 text-sm mb-8">We'll get back to you within one business day.</p>

            <form className="flex flex-col gap-5">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1.5 uppercase tracking-wide">
                    <User size={13} className="text-blue-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1.5 uppercase tracking-wide">
                    <Mail size={13} className="text-blue-500" /> Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1.5 uppercase tracking-wide">
                    <Phone size={13} className="text-blue-500" /> Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1.5 uppercase tracking-wide">
                    <GraduationCap size={13} className="text-blue-500" /> Preferred University
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 appearance-none cursor-pointer">
                      <option value="">Select University</option>
                      <option>Taylor's University</option>
                      <option>Sunway University</option>
                      <option>APU Malaysia</option>
                      <option>City University</option>
                    </select>
                    {/* Custom chevron */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Your Message <span className="text-slate-300 font-normal normal-case">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your study plans, preferred course, or any questions..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 placeholder:text-slate-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2.5 shadow-lg shadow-slate-500 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 mt-1"
              >
                Submit & Get Free Consultation
                <Send size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <p className="text-center text-xs text-slate-300 font-medium">
                No spam. Your information is 100% secure and private.
              </p>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;