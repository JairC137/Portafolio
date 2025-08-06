"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = Array.from({ length: 9 }, (_, i) => `/images/aws-gallery/${i + 1}.jpg`);

export default function AwsGroup() {
  return (
    <section className="relative isolate overflow-hidden min-h-[80vh] w-full">
      {/* ---------- Galería de fondo ---------- */}
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 gap-1">
        {gallery.map((src) => (
          <div key={src} className="relative h-40 sm:h-48 lg:h-56">
            <Image
              src={src}
              alt="AWS Community event"
              fill
              sizes="33vw"
              className="object-cover object-center grayscale-[35%] brightness-90"
              priority
            />
          </div>
        ))}
      </div>

      {/* velo para legibilidad */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      {/* ---------- Tarjeta principal ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl px-6 py-24 flex items-center justify-center"
      >
        <div className="w-full rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-neutral-300/60 px-10 py-16 text-center shadow-xl space-y-8">
          {/* Logo */}
          <div className="mx-auto h-28 w-28">
            <Image
              src="/images/ajolotes-logo.png"
              alt="Logo Ajolotes en la Nube"
              width={112}
              height={112}
              className="object-contain"
              priority
            />
          </div>

          {/* Texto */}
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">
            Ajolotes&nbsp;en&nbsp;la&nbsp;Nube
          </h2>

          <p className="mx-auto max-w-xl text-gray-700 leading-relaxed">
            Miembro activo y apasionado de las comunidades <strong>tech</strong>.  
            Comparto conocimientos sobre AWS, arquitectura serverless e IA generativa,
            organizando <em>meetups</em> y talleres que inspiran a nuevos desarrolladores
            a adentrarse en el mundo cloud.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
