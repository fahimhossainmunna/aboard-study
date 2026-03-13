"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Universities", href: "/universities" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 overflow-hidden">

      {/* ── Large background text watermark ── */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-extrabold text-white/[0.02] whitespace-nowrap select-none pointer-events-none leading-none"
        aria-hidden
      >
        ABOARD
      </div>

      {/* ── Gradient blobs ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />


      {/* ── Main grid ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-7">
            <Link href="/" className="inline-block w-fit">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  Aboard <span className="text-blue-400">Study</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em]">
                  Assist Link
                </span>
              </div>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed">
              Bangladesh's most trusted partner for higher education in Malaysia.
              Expert university admissions & 100% visa assistance since 2015.
            </p>

            {/* Social row */}
            <div className="flex gap-2">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-blue-500 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { val: "1,200+", label: "Students" },
                { val: "98%", label: "Visa Rate" },
                { val: "50+", label: "Partners" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-xl px-3 py-3 text-center">
                  <p className="text-blue-400 font-extrabold text-lg leading-none">{s.val}</p>
                  <p className="text-slate-600 text-[11px] font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex flex-col gap-7 lg:pl-8">
            <p className="text-white text-xs font-bold uppercase tracking-[0.18em]">Quick Links</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-150"
                  >
                    <span className="w-5 h-5 rounded-md bg-white/5 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-150 flex-shrink-0">
                      <ArrowUpRight size={10} className="text-slate-600 group-hover:text-white transition-colors" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <a
              href="https://wa.me/60167495926"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-green-500/10 hover:bg-green-500 border border-green-500/20 hover:border-green-400 text-green-400 hover:text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 w-fit mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.522 3.659 1.432 5.18L2 22l4.898-1.424A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.948 7.948 0 01-4.291-1.255l-.308-.183-3.186.927.949-3.097-.2-.318A7.942 7.942 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Col 3 — Offices */}
          <div className="flex flex-col gap-8">

            {/* Dhaka */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <p className="text-white text-xs font-bold uppercase tracking-[0.15em]">Dhaka Office</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[13px] text-slate-500">
                  <MapPin size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  Banani, Dhaka-1213, Bangladesh
                </li>
                <li className="flex items-center gap-2.5 text-[13px]">
                  <Phone size={13} className="text-blue-400 flex-shrink-0" />
                  <a href="tel:+8801700000000" className="text-slate-500 hover:text-white transition-colors">+880 17XX XXXXXX</a>
                </li>
                <li className="flex items-center gap-2.5 text-[13px]">
                  <Mail size={13} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@aboardstudy.com" className="text-slate-500 hover:text-white transition-colors">info@aboardstudy.com</a>
                </li>
              </ul>
            </div>

            {/* Malaysia */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <p className="text-white text-xs font-bold uppercase tracking-[0.15em]">Malaysia Office</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[13px] text-slate-500">
                  <MapPin size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  Kuala Lumpur City Centre, 50088 KL, Malaysia
                </li>
                <li className="flex items-center gap-2.5 text-[13px]">
                  <Phone size={13} className="text-blue-400 flex-shrink-0" />
                  <a href="tel:+60167495926" className="text-slate-500 hover:text-white transition-colors">+60 16-749 5926</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-700 font-medium">
            © {currentYear} Aboard Study Assist Link. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="text-[12px] text-slate-700 hover:text-slate-400 transition-colors font-medium">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;