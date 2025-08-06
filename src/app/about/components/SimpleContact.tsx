"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTwitter, // reemplázalo por FaXTwitter si tu icon set lo incluye
} from "react-icons/fa";

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/skinny.bitch_7" },
  { icon: FaTwitter,   label: "X",         href: "https://twitter.com/"     },
  { icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/jolmosdev" },
  { icon: FaWhatsapp,  label: "WhatsApp",  href: "https://wa.me/5215555555555"       },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-200 py-20 lg:py-28"
    >
      {/* Animación: fade-in + slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6"
      >
        {/* Caja glass */}
        <div className="rounded-3xl bg-white/60 backdrop-blur-md ring-1 ring-neutral-300/60 px-10 py-16 text-center shadow-xl">
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900">
            Conecta conmigo
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-700">
            ¡Siempre abierto a nuevas ideas y colaboraciones!
          </p>

          {/* Redes sociales */}
          <ul className="mt-10 flex justify-center gap-8 text-3xl">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
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
