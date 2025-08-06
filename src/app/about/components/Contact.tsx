"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jolmosdev" },
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/JairC137"   },
  { icon: FaTwitter,  label: "Twitter",  href: "https://twitter.com/jolmosdev" },
  { icon: SiWhatsapp, label: "WhatsApp", href: "https://wa.me/5215555555555"  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-gray-900 py-24 lg:py-32">
      {/* velo / gradiente decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-purple-800/40 via-gray-900/80 to-blue-900/60"
      />

      {/* contenedor */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6"
      >
        <div className="rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-8 py-16 text-center space-y-10 shadow-xl">
          {/* Titular */}
          <h2 className="font-serif text-4xl sm:text-5xl text-white">¡Hablemos!</h2>

          <p className="mx-auto max-w-xl text-gray-200">
            ¿Tienes una idea, proyecto o simplemente quieres saludar?  
            Estoy abierto a colaboraciones de tecnología, datos, fitness y fútbol 🤝
          </p>

          {/* Botón correo */}
          <a
            href="mailto:jolmos.dev@gmail.com"
            aria-label="Enviar correo"
            className="inline-flex items-center gap-3 rounded-full bg-white/90 hover:bg-white px-8 py-4 font-semibold text-gray-900 transition"
          >
            <FaEnvelope className="text-lg" />
            jolmos.dev&nbsp;@&nbsp;gmail.com
          </a>

          {/* Redes */}
          <ul className="flex justify-center gap-6 text-2xl">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-blue-400 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
