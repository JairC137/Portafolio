"use client";

import Image from "next/image";
import { motion, useReducedMotion, easeInOut } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { FaLinkedin, FaMeetup } from "react-icons/fa";
import { useMemo } from "react";

// ====== Config ======
const IMAGES = 8;
const CARDS_TO_SHOW = 5; // cuántas fotos en el collage
const gallery = Array.from({ length: IMAGES }, (_, i) => `/images/aws-gallery/${i + 1}.jpg`);

// tamaños de imagen para Next/Image (columna derecha ≈ 40% del viewport)
const IMG_SIZES = "(min-width:1024px) 40vw, 88vw";

// posiciones y rotaciones de las tarjetas del collage (desktop)
const POSITIONS = [
  { top: "0%", left: "8%", rotate: -7 },
  { top: "15%", right: "2%", rotate: 6 },
  { top: "46%", left: "18%", rotate: 3 },
  { top: "58%", right: "8%", rotate: -4 },
  { top: "28%", left: "42%", rotate: 10 },
];

export default function AwsGroup() {
  const prefersReduced = useReducedMotion();

  // elegimos las primeras N imágenes (o barajadas si quieres)
  const picks = useMemo(
    () => gallery.slice(0, CARDS_TO_SHOW),
    []
  );

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 py-20 lg:py-28">
      {/* patrón sutil de cuadrícula para textura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]
                   bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                   bg-[size:24px_24px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* ===== Columna izquierda: tarjeta ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="rounded-3xl bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-[0_10px_40px_rgba(2,6,23,0.08)] px-8 py-10 md:px-12 md:py-14">
            {/* Header */}
            <div className="flex items-center gap-5 mb-6">
              <div className="h-16 w-16 shrink-0 rounded-xl ring-1 ring-black/10 bg-white/70 p-2">
                <Image
                  src="/images/ajolotes-logo.png"
                  alt="Ajolotes en la Nube"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-gray-500">
                  AWS Community Member
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">
                  Ajolotes en la Nube
                </h2>
              </div>
            </div>

            {/* Copy */}
            <p className="text-gray-700 leading-relaxed">
              Miembro <strong>activo</strong> y <strong>apasionado</strong> de las comunidades <em>tech</em>.
              Participo en charlas, <em>meetups</em> y mentorías, compartiendo buenas prácticas de
              <strong> AWS</strong>, arquitectura <em>serverless</em> e IA generativa. Impulso iniciativas que
              ayudan a más personas a <strong>aprender, crecer y lanzar ideas</strong>.
            </p>

            {/* Bullets */}
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              {[
                "Organización de talleres intro y avanzados",
                "Acompañamiento a speakers y nuevos miembros",
                "Proyectos colaborativos abiertos",
                "Divulgación de buenas prácticas cloud",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FiCheckCircle className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Métricas */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-neutral-200/60 text-center">
              {[
                { value: "15+", label: "eventos/año" },
                { value: "50+", label: "mentorías" },
                { value: "1,200+", label: "miembros" },
              ].map((s) => (
                <div key={s.label} className="px-2">
                  <div className="font-serif text-2xl text-gray-900">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#" // Reemplaza por tu enlace de LinkedIn/Group
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-900/80 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                <FaLinkedin /> Únete en LinkedIn
              </a>
              <a
                href="#" // Reemplaza por tu enlace de Meetup
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-400/70 px-5 py-3 text-sm font-semibold text-gray-700 hover:border-gray-900/80 hover:text-gray-900 transition"
              >
                <FaMeetup /> Ver eventos
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===== Columna derecha: collage animado ===== */}
        <div className="relative h-[520px] sm:h-[580px] lg:h-[620px]">
          {/* círculos de iluminación sutil */}
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

          {picks.map((src, i) => {
            const pos = POSITIONS[i % POSITIONS.length];
            const floatAnim = prefersReduced
              ? {}
              : {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 6 + i, repeat: Infinity, ease: easeInOut, delay: i * 0.4 },
                };

            return (
              <motion.div
                key={src}
                className="absolute drop-shadow-xl"
                style={pos}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                  zIndex: 20,
                }}
                {...floatAnim}
              >
                <div className="relative h-52 w-40 sm:h-64 sm:w-48 lg:h-72 lg:w-56 rounded-2xl overflow-hidden ring-1 ring-black/10 bg-neutral-200">
                  <Image
                    src={src}
                    alt="AWS community moment"
                    fill
                    sizes={IMG_SIZES}
                    quality={92}
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* gradiente para profundidad */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent_45%)]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
