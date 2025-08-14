"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaFutbol, FaUsers, FaTrophy, FaHandshake } from "react-icons/fa";
import { useEffect, useState } from "react";

/* ===== Config ===== */
const IMAGES = 3;                                  // cuántas imágenes hay en /public/images/canoneros
const INTERVAL_MS = 4800;                          // velocidad del cambio
const GALLERY = Array.from({ length: IMAGES }, (_, i) => `/images/canoneros/${i + 1}.jpg`);
const PHOTO_SIZES = "(min-width:1024px) 42vw, 90vw"; // ancho estimado del panel diagonal

const stats = [
  { icon: FaUsers,  value: "300+",  label: "jugadores" },
  { icon: FaTrophy, value: "12",    label: "torneos" },
  { icon: FaHandshake, value: "20+", label: "alianzas" },
  { icon: FaFutbol, value: "100+",   label: "partidos" },
];

const timeline = [
  { year: "2024", text: "Inicio como embajador y enlace con la comunidad." },
  { year: "2025", text: "Clínicas abiertas y tryouts regionales." },
  { year: "2025", text: "Programa de visorías." },
  { year: "2025", text: "Expansión de categorías y staff técnico." },
];

export default function Canhoneros() {
  const [idx, setIdx] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % GALLERY.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReduced]);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 py-20 lg:py-28">
      {/* textura sutil de grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]
                   bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                   bg-[size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* ===== Columna izquierda: texto y métricas (tema claro) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Card glass clara */}
          <div className="rounded-3xl bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_40px_rgba(2,6,23,0.08)] px-8 py-10 md:px-12 md:py-14">
            {/* Header: logo + título */}
            <div className="flex items-center gap-5 mb-6">
              <div className="h-16 w-16 shrink-0 rounded-xl ring-1 ring-black/10 bg-white/70 p-2">
                <Image
                  src="/images/canoneros-logo.png"
                  alt="Cañoneros • Mazatlán FC"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500">
                  Embajador Oficial
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">
                  Cañoneros • Mazatlán FC
                </h2>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Soy <strong>embajador</strong> y miembro de la <strong>mesa directiva</strong> de la filial
              <em> Cañoneros</em>. Impulso programas de formación, valores deportivos y vinculación
              con la comunidad para crear experiencias que inspiran dentro y fuera de la cancha.
            </p>

            {/* Stats claras */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
{stats.map(({ icon: Icon, value, label }) => (
  <div
    key={label}
    className="rounded-2xl bg-white/70 ring-1 ring-black/5 px-4 py-5 text-center"
  >
    {/* antes: className="mx-auto text-xl mb-1 opacity-90" */}
    <Icon className="mx-auto text-2xl mb-2 text-gray-800" />
    <div className="font-serif text-xl text-gray-900">{value}</div>
    <div className="text-xs uppercase tracking-wider text-gray-600">{label}</div>
  </div>
))}

            </div>

            {/* Bullets */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <li>• Organización de clínicas, visorías y tryouts.</li>
              <li>• Acompañamiento a staff y coordinación de eventos.</li>
              <li>• Programas de valores y vinculación comunitaria.</li>
              <li>• Relación con clubes y patrocinadores locales.</li>
            </ul>

            {/* CTAs opcionales */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full border border-gray-900/80 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Contacto club
              </a>
              <a
                href="https://mazatlanfc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-400/70 px-6 py-3 font-semibold text-gray-700 hover:border-gray-900/80 hover:text-gray-900 transition"
              >
                Conoce Mazatlán FC
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===== Columna derecha: panel diagonal con slideshow claro ===== */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[440px] sm:h-[520px] lg:h-[560px]"
        >
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-2xl"
            // mismo corte diagonal del primer diseño, pero en claro
            style={{ clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 84%)" }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={GALLERY[idx]}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={GALLERY[idx]}
                  alt="Cañoneros — actividad del club"
                  fill
                  sizes={PHOTO_SIZES}
                  quality={92}
                  className="object-cover"
                  priority
                />
                {/* velo muy sutil para integrarlo con el tema claro */}
                <div className="absolute inset-0 bg-white/12" />
              </motion.div>
            </AnimatePresence>

            {/* brillo suave como “luces de estadio” pero claro */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_10%,rgba(255,255,255,0.35),transparent_60%)]" />
          </div>

          {/* Brillo exterior */}
          <div className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
        </motion.div>
      </div>

      {/* ===== Timeline clara ===== */}
      <div className="relative z-10 mx-auto mt-12 max-w-7xl px-6">
        <div className="rounded-2xl bg-white/70 ring-1 ring-black/5 backdrop-blur-md px-4 sm:px-6 py-5 overflow-x-auto">
          <ol className="flex gap-8 sm:gap-12">
            {timeline.map((t) => (
              <li key={t.year} className="shrink-0">
                <div className="text-gray-900 text-sm font-semibold">{t.year}</div>
                <div className="mt-1 max-w-xs text-gray-700">{t.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
