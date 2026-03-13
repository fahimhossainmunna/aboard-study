"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { Home, ArrowLeft, GraduationCap, MapPin, Compass, Plane, BookOpen, Star } from "lucide-react";

/* ── Floating particles canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.2 + 0.04,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

/* ── Single orbiting icon ── */
function OrbitIcon({
  icon: Icon,
  radius,
  orbitDuration,
  startAngle,
  size = 40,
  iconSize = 16,
  cls = "bg-white border-blue-100 text-blue-400",
}: {
  icon: React.ElementType;
  radius: number;
  orbitDuration: number;
  startAngle: number;
  size?: number;
  iconSize?: number;
  cls?: string;
}) {
  const rad = (startAngle * Math.PI) / 180;
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{ width: 0, height: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className={`absolute flex items-center justify-center rounded-xl border shadow-md ${cls}`}
        style={{
          width: size,
          height: size,
          left: radius * Math.cos(rad) - size / 2,
          top: radius * Math.sin(rad) - size / 2,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
      >
        <Icon size={iconSize} />
      </motion.div>
    </motion.div>
  );
}

/* ── Page ── */
export default function NotFound() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });

  // FIX: useTransform values stored — passed via style prop directly (MotionValue type safe)
  const blobX  = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const blobY  = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const blobX2 = useTransform(sx, [-0.5, 0.5], [ 14, -14]);
  const blobY2 = useTransform(sy, [-0.5, 0.5], [  8,  -8]);

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" } },
  };

  return (
    <div
      className="relative min-h-screen bg-[#f7f9ff] overflow-hidden flex items-center justify-center px-5"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* FIX: inline style with px values instead of invalid w-160 class */}
      <motion.div
        style={{ x: blobX, y: blobY, width: 640, height: 640 }}
        className="absolute -top-32 -left-32 rounded-full bg-blue-100/70 blur-[110px] pointer-events-none"
      />
      <motion.div
        style={{ x: blobX2, y: blobY2, width: 500, height: 500 }}
        className="absolute -bottom-32 -right-32 rounded-full bg-indigo-100/50 blur-[90px] pointer-events-none"
      />

      {/* Pulsing rings + orbiting icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[340, 240, 150].map((s, i) => (
          <motion.div
            key={s}
            className="absolute rounded-full border border-blue-200/60"
            style={{ width: s, height: s, top: -s / 2, left: -s / 2 }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}

        {/* Outer orbit */}
        <OrbitIcon icon={GraduationCap} radius={175} orbitDuration={20} startAngle={0}   size={46} iconSize={20} cls="bg-white border-blue-100 text-blue-500 shadow-blue-100" />
        <OrbitIcon icon={Plane}         radius={175} orbitDuration={20} startAngle={120} size={40} iconSize={16} cls="bg-white border-slate-100 text-slate-400 shadow-sm" />
        <OrbitIcon icon={MapPin}        radius={175} orbitDuration={20} startAngle={240} size={42} iconSize={17} cls="bg-white border-blue-100 text-blue-400 shadow-blue-50" />

        {/* Inner orbit */}
        <OrbitIcon icon={BookOpen} radius={110} orbitDuration={14} startAngle={60}  size={34} iconSize={13} cls="bg-blue-50 border-blue-100 text-blue-300 shadow-sm" />
        <OrbitIcon icon={Star}     radius={110} orbitDuration={14} startAngle={200} size={32} iconSize={12} cls="bg-slate-50 border-slate-100 text-slate-300 shadow-sm" />
        <OrbitIcon icon={Compass}  radius={110} orbitDuration={14} startAngle={330} size={34} iconSize={13} cls="bg-blue-50 border-blue-100 text-blue-300 shadow-sm" />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-sm mx-auto"
      >
        {/* Ghost 404 + badge */}
        <motion.div variants={fadeUp} className="relative select-none mb-1">
          <motion.span
            animate={{ opacity: [0.05, 0.09, 0.05] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[170px] sm:text-[210px] font-extrabold leading-none text-slate-900/[0.07] tracking-tight block"
          >
            404
          </motion.span>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: "easeInOut" }}
              // FIX: bg-gradient-to-r instead of bg-linear-to-r (Tailwind v3 compatible)
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-blue-500/35"
            >
              ✦ Page Not Found ✦
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-[2.6rem] font-extrabold text-slate-800 tracking-tight leading-tight mb-4"
        >
          You wandered{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-600">off course</span>
            <motion.svg
              className="absolute -bottom-1.5 left-0 w-full overflow-visible"
              viewBox="0 0 120 8"
              fill="none"
            >
              <motion.path
                d="M2 6C28 2 82 1 118 5"
                stroke="#93C5FD"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={fadeUp} className="text-slate-400 text-[15px] leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on your study abroad journey.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <Home size={15} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2.5 text-slate-500 hover:text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 px-7 py-3.5 rounded-2xl font-bold text-sm shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Go Back
          </button>
        </motion.div>

        {/* Footer link */}
        <motion.p variants={fadeUp} className="text-xs text-slate-300">
          Need help?{" "}
          <Link
            href="/contact"
            className="text-blue-400 hover:text-blue-600 font-bold underline underline-offset-2 transition-colors"
          >
            Contact our team
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}