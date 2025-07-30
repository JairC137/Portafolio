'use client';

import {
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiQualtrics
} from "react-icons/si";
import {
  FaDatabase,
  FaChartBar,
  FaChartLine,
  FaMicrosoft,
  FaGithub,
  FaDocker,
  FaLinux
} from "react-icons/fa";

import { motion } from "framer-motion";

const icons = [
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  FaDatabase,
  FaChartBar,
  FaChartLine,
  FaMicrosoft,
  SiQualtrics,
  FaDocker,
  FaLinux,
  FaGithub
];

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#0a0a0a] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* FOTO animada */}
        <motion.div
          className="flex justify-center md:justify-center w-full md:w-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-blue-600 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50">
            <img
              src="/perfil.png"
              alt="José Jair Medrano"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXTO animado */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 text-white">Sobre mí</h2>
          <p className="text-gray-400 text-sm mb-6">
            Consultor tecnológico orientado a datos y soluciones automatizadas
          </p>

          <div className="space-y-6 text-gray-300 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            <p>
              Soy ingeniero en computación por el IPN con experiencia en proyectos de gran escala en el sector público y privado. He trabajado con PEMEX Logística en procesos ETL y visualización de KPIs, y en proyectos internacionales con Qualtrics.
            </p>
            <p>
              Me especializo en soluciones que integran automatización, análisis y visualización de datos usando Power Platform, Python, APIs REST y Azure.
            </p>
            <p>
              Mi enfoque es aportar valor real con cada línea de código, optimizando procesos y ayudando a las organizaciones a tomar decisiones basadas en datos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ÍCONOS animados */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6 text-3xl text-blue-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {icons.map((Icon, idx) => (
          <Icon
            key={idx}
            className="hover:text-white transition-transform hover:scale-110 cursor-pointer"
            title={Icon.name?.replace("Fa", "").replace("Si", "") || "Skill"}
          />
        ))}
      </motion.div>

      {/* BOTÓN animado */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Más sobre mí
        </a>
      </motion.div>
    </section>
  );
}
