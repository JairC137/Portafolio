"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/bio.png"
        alt="Retrato de Jair Olmos"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Velo oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenedor de texto */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex items-center justify-center px-6 py-24"
      >
        <div className="w-full max-w-3xl rounded-3xl bg-white/60 backdrop-blur-md p-10 text-center lg:p-16">
          <span className="tracking-widest text-xs uppercase text-gray-700">
            Cloud • Data • UX
          </span>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl leading-snug text-gray-900">
            Jair&nbsp;Olmos
          </h1>

          <p className="mt-8 text-base sm:text-lg text-gray-800 leading-relaxed">
            Soy <strong>ingeniero de datos y desarrollador full-stack </strong>
            que cree firmemente en el poder de la información para transformar
            negocios y experiencias. Experimento a diario con IA generativa,
            arquitecturas serverless y visualizaciones interactivas con un sólo
            objetivo: <em>convertir ideas complejas en soluciones claras</em>.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
            Fuera del teclado lidero sesiones en
            <strong className="mx-1">Ajolotes en la Nube</strong>, entreno
            levantamiento olímpico como coach certificado y promuevo valores
            deportivos desde la dirección de la filial
            <strong className="mx-1">Cañoneros — Mazatlán FC</strong>.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-full border border-gray-900 px-10 py-3 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Conectar
          </a>
        </div>
      </motion.div>
    </section>
  );
}
