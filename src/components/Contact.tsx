"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jolmosdev" },
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/JairC137" },
  { icon: FaTwitter,  label: "Twitter",  href: "https://twitter.com/jolmosdev" },
  { icon: SiWhatsapp, label: "WhatsApp", href: "https://wa.me/5215555555555" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-28">
      <div className="mx-auto w-[70vw] max-w-6xl px-6">
        <motion.div
          className="relative rounded-[2.5rem] bg-white/5 backdrop-blur-md ring-1 ring-white/10 
                     shadow-xl px-10 py-20 text-center space-y-8 transition-shadow 
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold">Contacto</h2>
          <p className="text-gray-300">¿Tienes un proyecto o idea? ¡Conversemos!</p>

          <a
            href="mailto:jolmos.dev@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-10 py-4 
                       font-semibold text-white hover:bg-blue-500 transition-colors"
            aria-label="Enviar correo"
          >
            <FaEnvelope className="text-xl" />
            jolmos.dev&#64;gmail.com
          </a>

          <ul className="flex justify-center gap-8 text-3xl">
            {socials.map(({ icon: Icon, label, href }, idx) => (
              <li key={idx}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-blue-600 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
