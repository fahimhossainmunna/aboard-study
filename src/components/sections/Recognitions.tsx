"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import britishCouncil from "@/assets/British Council.png";
import emgs from "@/assets/EMGS.webp";
import idp from "@/assets/IDPEducation.png";
import mqa from "@/assets/MQA.png";
import ucas from "@/assets/UCAS.png";

const logos = [
  { src: britishCouncil, name: "British Council" },
  { src: emgs, name: "EMGS" },
  { src: idp, name: "IDP Education" },
  { src: mqa, name: "MQA" },
  { src: ucas, name: "UCAS" },
];

// Duplicate for seamless infinite loop
const track = [...logos, ...logos, ...logos];

const Recognitions = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">

      {/* Top & bottom subtle dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 px-5"
      >
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
          Trusted & Accredited By
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
          Recognitions &{" "}
          <span className="text-blue-600">Accreditations</span>
        </h2>
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Infinite scroll track */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-14 md:gap-20 flex-none"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {track.map((logo, index) => (
            <div
              key={index}
              className="group relative flex-none w-36 md:w-44 h-16 md:h-20 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Recognitions;