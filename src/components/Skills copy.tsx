'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
  SiFramer,
  SiJavascript,
  SiPython,
  SiQualtrics,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Python", icon: SiPython },
  { name: "Qualtrics", icon: SiQualtrics },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>

        {/* Grid de skills */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-blue-200 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Icon className="text-4xl text-blue-600 mb-2" />
              <span className="text-sm font-semibold text-gray-700 text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
