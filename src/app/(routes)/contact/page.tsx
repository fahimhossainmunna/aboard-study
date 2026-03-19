"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, Send, User,
  MessageSquare, ArrowRight, CheckCircle2,
  Facebook, Instagram, Linkedin, Youtube
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const offices = [
  {
    city: "Dhaka", flag: "🇧🇩",
    address: "House-12, Road-05, Block-A, Banani, Dhaka-1213",
    phone: "+880 17XX XXXXXX", email: "dhaka@aboardstudy.com",
    hours: "Sun–Thu: 9am – 6pm", color: "bg-blue-600",
  },
  {
    city: "Kuala Lumpur", flag: "🇲🇾",
    address: "Kuala Lumpur City Centre, 50088 KL, Malaysia",
    phone: "+60 16-749 5926", email: "kl@aboardstudy.com",
    hours: "Mon–Fri: 9am – 6pm", color: "bg-slate-900",
  },
];

const faqs = [
  { q: "How long does the consultation take?", a: "Our free consultation sessions typically take 30–45 minutes. We'll assess your academic profile and recommend the best options." },
  { q: "Is there any fee for your service?", a: "Initial consultation is 100% free. We charge a service fee only after you successfully get accepted to a university." },
  { q: "How long does the visa process take?", a: "The Malaysia student visa (EMGS) process typically takes 4–8 weeks after all documents are submitted." },
  { q: "Can I apply if my English results are below requirement?", a: "Yes! Many universities offer English foundation or pathway programs. We'll find the right option for your profile." },
];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest mb-6 block w-fit mx-auto">
            <MessageSquare size={12} /> Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
            className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-5"
          >
            We&apos;re Here to <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Help You.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 10" fill="none">
                <path d="M2 7C44 2 170 1 218 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="text-slate-500 text-[17px] leading-relaxed max-w-lg mx-auto"
          >
            Have a question about studying in Malaysia? Reach out and we&apos;ll get back within 24 hours — for free.
          </motion.p>

          <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="tel:+60167495926" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-4 py-2.5 rounded-[5px] text-sm font-semibold transition-all duration-200 shadow-sm">
              <Phone size={14} className="text-blue-500" /> +60 16-749 5926
            </a>
            <a href="mailto:info@aboardstudy.com" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-4 py-2.5 rounded-[5px] text-sm font-semibold transition-all duration-200 shadow-sm">
              <Mail size={14} className="text-blue-500" /> info@aboardstudy.com
            </a>
            <a href="https://wa.me/60167495926" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-[5px] text-sm font-semibold transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.522 3.659 1.432 5.18L2 22l4.898-1.424A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.948 7.948 0 01-4.291-1.255l-.308-.183-3.186.927.949-3.097-.2-.318A7.942 7.942 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
              <div className="bg-white border border-slate-100 rounded-[5px] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-1">Send Us a Message</h2>
                  <p className="text-slate-400 text-sm">Fill out the form and we&apos;ll respond within 24 hours.</p>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 rounded-[5px] bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                      <CheckCircle2 size={30} className="text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-800">Message Sent!</h3>
                    <p className="text-slate-500 text-sm max-w-xs">Thank you! We&apos;ve received your message and will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                          <User size={11} className="text-blue-500" /> Full Name
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                          <Mail size={11} className="text-blue-500" /> Email
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@mail.com" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                          <Phone size={11} className="text-blue-500" /> Phone
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+880 1XXX XXXXXX" className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Subject</label>
                        <div className="relative">
                          <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 appearance-none cursor-pointer transition-all">
                            <option value="">Select a topic</option>
                            <option>University Admission</option>
                            <option>Student Visa (EMGS)</option>
                            <option>Scholarship Inquiry</option>
                            <option>Course Selection</option>
                            <option>Other</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your study plans, goals, or any questions you have..." className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 resize-none transition-all" />
                    </div>

                    {isError && (
                      <p className="text-sm text-red-500 font-medium bg-red-50 px-4 py-3 rounded-[5px]">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button type="submit" disabled={isLoading} className="group w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-[5px] font-bold text-[15px] flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    <p className="text-center text-xs text-slate-300 font-medium">
                      🔒 Your information is secure and never shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <motion.div {...fadeUp(0.15)} className="bg-slate-50 border border-slate-100 rounded-[5px] p-6">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide mb-4">We Respond Fast</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { channel: "WhatsApp", time: "Within 1 hour", dot: "bg-green-500" },
                    { channel: "Email", time: "Within 24 hours", dot: "bg-blue-500" },
                    { channel: "Phone Call", time: "Business hours", dot: "bg-amber-500" },
                  ].map((r) => (
                    <div key={r.channel} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${r.dot}`} />
                        <span className="text-sm font-semibold text-slate-600">{r.channel}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400">{r.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {offices.map((office, i) => (
                <motion.div key={office.city} {...fadeUp(0.2 + i * 0.08)} className={`relative ${office.color} rounded-[5px] p-6 overflow-hidden`}>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xl">{office.flag}</span>
                      <p className="text-white font-extrabold text-sm uppercase tracking-[0.15em]">{office.city} Office</p>
                    </div>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-start gap-2.5 text-[13px] text-white/80"><MapPin size={13} className="text-white/60 mt-0.5 flex-shrink-0" />{office.address}</li>
                      <li className="flex items-center gap-2.5 text-[13px]"><Phone size={13} className="text-white/60 flex-shrink-0" /><a href={`tel:${office.phone}`} className="text-white/80 hover:text-white transition-colors">{office.phone}</a></li>
                      <li className="flex items-center gap-2.5 text-[13px]"><Mail size={13} className="text-white/60 flex-shrink-0" /><a href={`mailto:${office.email}`} className="text-white/80 hover:text-white transition-colors">{office.email}</a></li>
                      <li className="flex items-center gap-2.5 text-[13px] text-white/60"><Clock size={13} className="flex-shrink-0" />{office.hours}</li>
                    </ul>
                  </div>
                </motion.div>
              ))}

              <motion.div {...fadeUp(0.38)} className="bg-white border border-slate-100 rounded-[5px] p-6">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { Icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
                    { Icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-rose-500" },
                    { Icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
                    { Icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
                  ].map(({ Icon, label, href, color }) => (
                    <a key={label} href={href} className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-[5px] bg-slate-50 border border-slate-100 ${color} hover:border-transparent text-slate-500 hover:text-white transition-all duration-200`}>
                      <Icon size={15} />
                      <span className="text-xs font-bold">{label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Quick Answers</span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Frequently Asked</h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="group bg-white border border-slate-100 rounded-[5px] p-6 hover:border-blue-100 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-[5px] bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                    <CheckCircle2 size={14} className="text-blue-500 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-[15px] mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 mx-5 sm:mx-8 lg:mx-10 mb-10 rounded-[5px] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10 text-center max-w-xl mx-auto px-5">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">Still Have Questions?</h2>
            <p className="text-blue-100 text-sm mb-8">Our team is available 6 days a week.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/60167495926" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 bg-white text-blue-600 hover:bg-blue-50 px-7 py-4 rounded-[5px] font-bold text-[15px] shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                WhatsApp Now <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+60167495926" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-4 rounded-[5px] font-bold text-[15px] transition-all duration-200">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}