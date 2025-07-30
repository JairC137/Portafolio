'use client';

import { useEffect, useRef } from 'react';
import { FaPython, FaReact, FaGitAlt, FaFigma, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';
import './Skills.css'; // Crea este archivo para los estilos extra

const skills = [
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <FaDatabase />, name: 'SQL' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiFirebase />, name: 'Firebase' }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubbles = containerRef.current?.querySelectorAll('.bubble');
    bubbles?.forEach((bubble) => {
      const x = Math.random() * 80; // % left
      const y = Math.random() * 60; // % top
      const delay = Math.random() * 5;
      (bubble as HTMLElement).style.left = `${x}%`;
      (bubble as HTMLElement).style.top = `${y}%`;
      (bubble as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#f9fafb] dark:bg-[#f9fafb]">
      <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Habilidades</h2>
      <div ref={containerRef} className="relative w-full h-[70vh] max-w-7xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bubble glass text-blue-600 dark:text-blue-400 text-3xl hover:scale-110 transition-transform cursor-pointer"
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
