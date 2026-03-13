"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Plus, Minus, Phone, Mail } from "lucide-react";
import Flag from "react-world-flags";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logoo.png";
import { useNavbar } from "@/hooks/useNavbar";

const Navbar = () => {
  const { isOpen, setIsOpen, scrolled } = useNavbar();
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = {
    about: [
      { name: "About Us", href: "/about", icon: "🏢" },
      { name: "Our Mission", href: "/about/mission", icon: "🎯" },
      { name: "Our Team", href: "/about/team", icon: "👥" },
      { name: "Success Stories", href: "/about/stories", icon: "⭐" },
    ],
    countries: [
      { name: "Canada", code: "CA" },
      { name: "United Kingdom", code: "GB" },
      { name: "Australia", code: "AU" },
      { name: "New Zealand", code: "NZ" },
      { name: "USA", code: "US" },
      { name: "Ireland", code: "IE" },
      { name: "Germany", code: "DE" },
      { name: "Sweden", code: "SE" },
      { name: "Malaysia", code: "MY" },
      { name: "Italy", code: "IT" },
      { name: "Denmark", code: "DK" },
      { name: "France", code: "FR" },
    ],
    universities: [
      { name: "Public Universities", href: "/uni/public", icon: "🏛️" },
      { name: "Private Universities", href: "/uni/private", icon: "🎓" },
      { name: "Scholarships", href: "/uni/scholarships", icon: "💰" },
      { name: "Entry Requirements", href: "/uni/requirements", icon: "📋" },
    ],
  };

  const toggleMobileAccordion = (menu: string) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="hidden lg:block bg-sky-900 bg-slate-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+60167495926"
              className="flex items-center gap-1.5 hover:text-blue-100 transition-colors"
            >
              <Phone size={11} />
              <span>+60 16-749 5926</span>
            </a>
            <a
              href="mailto:info@aboardstudy.com"
              className="flex items-center gap-1.5 hover:text-blue-100 transition-colors"
            >
              <Mail size={11} />
              <span>info@aboardstudy.com</span>
            </a>
          </div>
          <p className="text-blue-100 font-medium tracking-wide">
            🎓 Study in Malaysia — Made Easy
          </p>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white
          ${
            scrolled
              ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-slate-100"
              : "border-b border-slate-100"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex-shrink-0 group"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Image
                src={logoImg}
                alt="Aboard Study Assist Link"
                width={155}
                height={52}
                priority
                className="object-contain transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <div
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1"
            >
              <Link
                href="/"
                className="px-4 py-2 text-[14.5px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-150"
              >
                Home
              </Link>

              {/* Study Abroad — Mega Menu */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("study")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center gap-1 px-4 py-2 text-[14.5px] font-semibold rounded-lg transition-all duration-150
                    ${activeDropdown === "study" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}
                  `}
                >
                  Study Abroad
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === "study" ? "rotate-180 text-blue-600" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "study" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => setActiveDropdown("study")}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] bg-white border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl p-6 z-50"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Choose Your Destination
                        </p>
                        <Link
                          href="/countries"
                          className="text-xs font-semibold text-blue-600 hover:underline"
                        >
                          View All →
                        </Link>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {menuItems.countries.map((c) => (
                          <Link
                            key={c.name}
                            href={`/country/${c.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-all duration-150 group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-8 h-[22px] overflow-hidden rounded flex-shrink-0 shadow-sm ring-1 ring-black/5">
                              <Flag
                                code={c.code}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[13px] font-semibold text-slate-600 group-hover/item:text-blue-600 leading-tight">
                              {c.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center gap-1 px-4 py-2 text-[14.5px] font-semibold rounded-lg transition-all duration-150
                    ${activeDropdown === "about" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}
                  `}
                >
                  About Us
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180 text-blue-600" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => setActiveDropdown("about")}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl p-2 z-50"
                    >
                      {menuItems.about.map((a) => (
                        <Link
                          key={a.name}
                          href={a.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-base leading-none">
                            {a.icon}
                          </span>
                          {a.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* University Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("uni")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center gap-1 px-4 py-2 text-[14.5px] font-semibold rounded-lg transition-all duration-150
                    ${activeDropdown === "uni" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}
                  `}
                >
                  University
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === "uni" ? "rotate-180 text-blue-600" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "uni" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => setActiveDropdown("uni")}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-60 bg-white border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl p-2 z-50"
                    >
                      {menuItems.universities.map((u) => (
                        <Link
                          key={u.name}
                          href={u.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-base leading-none">
                            {u.icon}
                          </span>
                          {u.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className="px-4 py-2 text-[14.5px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-150"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-[14.5px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-150"
              >
                Contacts
              </Link>
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 rounded-full transition-all duration-150"
              >
                Free Consultation
              </Link>
              <Link
                href="/apply"
                className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-full shadow-md shadow-slate-900/20 hover:shadow-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
              >
                Apply Now
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <div className="flex flex-col px-4 pt-2 pb-6 max-h-[80vh] overflow-y-auto">
                <Link
                  href="/"
                  className="py-3.5 px-2 font-semibold text-slate-700 border-b border-slate-100 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {[
                  {
                    key: "study",
                    label: "Study Abroad",
                    content: (
                      <div className="grid grid-cols-2 gap-2 pb-3 pt-1 px-2">
                        {menuItems.countries.map((c) => (
                          <Link
                            key={c.name}
                            href={`/country/${c.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center gap-2 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="w-6 h-4 overflow-hidden rounded flex-shrink-0 ring-1 ring-black/5">
                              <Flag
                                code={c.code}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    ),
                  },
                  {
                    key: "about",
                    label: "About Us",
                    content: (
                      <div className="flex flex-col pb-3 pt-1 px-2 gap-1">
                        {menuItems.about.map((a) => (
                          <Link
                            key={a.name}
                            href={a.href}
                            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{a.icon}</span> {a.name}
                          </Link>
                        ))}
                      </div>
                    ),
                  },
                  {
                    key: "uni",
                    label: "University",
                    content: (
                      <div className="flex flex-col pb-3 pt-1 px-2 gap-1">
                        {menuItems.universities.map((u) => (
                          <Link
                            key={u.name}
                            href={u.href}
                            className="flex items-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{u.icon}</span> {u.name}
                          </Link>
                        ))}
                      </div>
                    ),
                  },
                ].map(({ key, label, content }) => (
                  <div key={key} className="border-b border-slate-100">
                    <button
                      onClick={() => toggleMobileAccordion(key)}
                      className="w-full py-3.5 px-2 flex justify-between items-center font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {label}
                      <motion.span
                        animate={{ rotate: activeMobileMenu === key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeMobileMenu === key ? (
                          <Minus size={18} className="text-blue-600" />
                        ) : (
                          <Plus size={18} className="text-slate-400" />
                        )}
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {activeMobileMenu === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  href="/blog"
                  className="py-3.5 px-2 font-semibold text-slate-700 border-b border-slate-100 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="py-3.5 px-2 font-semibold text-slate-700 border-b border-slate-100 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacts
                </Link>

                <div className="flex flex-col gap-3 mt-5">
                  <Link
                    href="/contact"
                    className="w-full text-center py-3 rounded-xl font-semibold text-blue-600 border-2 border-blue-200 hover:bg-blue-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Free Consultation
                  </Link>
                  <Link
                    href="/apply"
                    className="w-full text-center py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-blue-900 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>

                {/* Mobile contact info */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href="tel:+60167495926"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={14} /> +60 16-749 5926
                  </a>
                  <a
                    href="mailto:info@aboardstudy.com"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={14} /> info@aboardstudy.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
