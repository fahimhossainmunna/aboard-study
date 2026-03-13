"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, CheckCircle2, Building2, Calendar } from "lucide-react";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const totalMs = duration * 1000;
      const incrementTime = totalMs / value;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  {
    label: "Successful Admissions",
    value: 1200,
    suffix: "+",
    icon: Users,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    accent: "from-blue-500 to-blue-600",
  },
  {
    label: "Visa Success Rate",
    value: 98,
    suffix: "%",
    icon: CheckCircle2,
    color: "bg-green-50",
    iconColor: "text-green-600",
    accent: "from-green-500 to-emerald-500",
  },
  {
    label: "Partner Universities",
    value: 50,
    suffix: "+",
    icon: Building2,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    accent: "from-purple-500 to-violet-500",
  },
  {
    label: "Years of Experience",
    value: 10,
    suffix: "+",
    icon: Calendar,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    accent: "from-orange-400 to-orange-500",
  },
];

const Stats = () => {
  return (
    <section className="relative py-15 bg-white overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Impact in Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-slate-100 rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={22} className={stat.iconColor} />
              </div>

              {/* Counter */}
              <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none tabular-nums">
                <Counter value={stat.value} />
                <span className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                  {stat.suffix}
                </span>
              </h3>

              {/* Label */}
              <p className="mt-3 text-slate-400 font-semibold text-xs uppercase tracking-widest leading-snug">
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <div className={`mt-5 w-8 h-0.5 bg-gradient-to-r ${stat.accent} rounded-full opacity-40 group-hover:w-16 group-hover:opacity-80 transition-all duration-300`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;