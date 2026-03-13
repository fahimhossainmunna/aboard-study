"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress values
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center"
        >
          {/* Progress ring */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            className="absolute inset-0 -rotate-90"
          >
            {/* Track */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2.5"
            />
            {/* Progress */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="rgba(96,165,250,0.9)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-150"
            />
          </svg>

          {/* Button bg */}
          <div className="absolute inset-1.5 rounded-full bg-blue-600 group-hover:bg-blue-500 shadow-[0_8px_32px_rgba(37,99,235,0.5)] group-hover:shadow-[0_12px_40px_rgba(37,99,235,0.65)] transition-all duration-300" />

          {/* Glow pulse */}
          <div className="absolute inset-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />

          {/* Arrow icon */}
          <ArrowUp
            size={18}
            className="relative z-10 text-white group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;