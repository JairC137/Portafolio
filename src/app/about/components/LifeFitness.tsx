"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaRunning } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

// ===== Config =====
const IMG_SIZES = "(min-width:1024px) 40vw, 88vw"; // columna izq ~40% en desktop
const photos = [
  "/images/fitness/hero-1.jpg",
  "/images/fitness/hero-2.jpg",
  "/images/fitness/hero-3.jpg",
];

// Posiciones del collage (lado izquierdo)
type CardPos = { top?: string; left?: string; right?: string; bottom?: string; rotate: number };
const LAYOUTS: CardPos[] = [
  { top: "4%", left: "6%", rotate: -5 },
  { top: "22%", left: "48%", rotate: 6 },
  { bottom: "2%", left: "26%", rotate: 2 },
];

export default function LifeFitness() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 py-20 lg:py-28">
      {/* textura sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]
                   bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                   bg-[size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* ===== Columna izquierda: Collage fotográfico ===== */}
        <div className="relative h-[520px] sm:h-[580px] lg:h-[620px] lg:order-1">
          {/* brillos sutiles */}
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

          {photos.slice(0, 3).map((src, i) => {
            const pos = LAYOUTS[i] ?? { top: "10%", left: "10%", rotate: 0 };

            return (
              <motion.div
                key={src}
                className="absolute drop-shadow-xl"
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                }}
                initial={{ rotate: pos.rotate }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                animate={prefersReduced ? undefined : { y: [0, -10, 0] }}
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
                }
              >
                <div className="relative h-56 w-44 sm:h-72 sm:w-56 lg:h-80 lg:w-64 rounded-2xl overflow-hidden ring-1 ring-black/10 bg-neutral-200">
                  <Image
                    src={src}
                    alt="Entrenamiento y estilo de vida"
                    fill
                    sizes={IMG_SIZES}
                    quality={92}
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent_45%)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Columna derecha: Tarjeta principal ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:order-2"
        >
          <div className="rounded-3xl bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_40px_rgba(2,6,23,0.08)] px-8 py-10 md:px-12 md:py-14">
            {/* Header */}
            <div className="flex items-center gap-5 mb-6">
              <div className="h-16 w-16 shrink-0 rounded-xl ring-1 ring-black/10 bg-white/70 p-3">
                <FaDumbbell className="h-full w-full text-gray-900" />
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500">
                  Entrenador Certificado
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">
                  Life &amp; Fitness
                </h2>
              </div>
            </div>

            {/* Copy */}
            <p className="text-gray-700 leading-relaxed">
              Soy <strong>entrenador certificado</strong> y el gym es mi lugar seguro. Entreno con mi mejor amigo; la disciplina del
              <em> strength &amp; hypertrophy</em> guía cómo enfrento los retos de
              desarrollo: <strong>constancia, técnica y mejora continua</strong>.
            </p>

            {/* Métricas */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-neutral-200/60 text-center">
              {[
                { value: "3x", label: "sesiones/sem" },
                { value: "2", label: "certificaciones" },
                { value: "3+ años", label: "entrenando" },
              ].map((s) => (
                <div key={s.label} className="px-2">
                  <div className="font-serif text-2xl text-gray-900">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { Icon: FaDumbbell, label: "Fuerza" },
                { Icon: FaHeartbeat, label: "Movilidad & Core" },
                { Icon: FaRunning, label: "Acondicionamiento" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300/80 bg-white/70 px-4 py-2 text-sm text-gray-800"
                >
                  <Icon className="opacity-80" />
                  {label}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              {[
                "Programación con enfoque en técnica y progresión",
                "Rutinas personalizadas por objetivos",
                "Hábitos sostenibles de sueño y nutrición",
                "Acompañamiento 1:1 y registro de progreso",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FiCheckCircle className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
