'use client';

import { useEffect, useRef, useState } from 'react';
import {
  SiPython, SiMongodb, SiPostgresql, SiTableau, SiApacheairflow,
  SiGooglecloud, SiAmazon, SiDocker, SiGrafana, SiPandas, SiNumpy,
  SiScikitlearn, SiJupyter, SiR, SiPostman, SiMysql, SiApachekafka, SiSnowflake, SiQlik, SiFirebase, SiRedis,
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNextdotjs
} from "react-icons/si";
import './Skills.css';

const categories = {
  Lenguajes: [SiPython, SiR, SiTypescript, SiJavascript],
  DataBase: [SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiRedis, SiSnowflake],
  Visualizacion: [SiTableau, SiQlik, SiGrafana],
  Cloud: [SiGooglecloud, SiAmazon],
  ETL: [SiApacheairflow, SiApachekafka],
  Otros: [SiDocker, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiPostman, SiHtml5, SiCss3, SiNextdotjs]
};

const allIcons = Object.values(categories).flat();

type CategoryKey = keyof typeof categories;

const generateIcons = (filter: string) => {
  const set = filter === 'Todos' ? allIcons : categories[filter as CategoryKey] || [];
  const repetitions = 1;
  return Array.from({ length: repetitions })
    .flatMap(() => set)
    .map((Icon, i) => ({ Icon, name: Icon.name || `Tech ${i}` }));
};

interface Bubble {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('Todos');
  const [icons, setIcons] = useState(generateIcons('Todos'));
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const initializeBubbles = (count: number): Bubble[] => {
    const generated: Bubble[] = [];

    while (generated.length < count) {
      const candidate: Bubble = {
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 10,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6
      };

      const tooClose = generated.some(b => {
        const dx = b.x - candidate.x;
        const dy = b.y - candidate.y;
        return Math.sqrt(dx * dx + dy * dy) < 10;
      });

      if (!tooClose) generated.push(candidate);
    }

    return generated;
  };

  useEffect(() => {
    setBubbles(initializeBubbles(icons.length));
  }, [icons]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prev => prev.map(b => {
        const newX = b.x + b.dx;
        const newY = b.y + b.dy;
        let newDx = b.dx;
        let newDy = b.dy;

        if (newX < 2 || newX > 98) newDx = -newDx;
        if (newY < 2 || newY > 90) newDy = -newDy;

        return {
          x: Math.max(2, Math.min(98, newX)),
          y: Math.max(2, Math.min(90, newY)),
          dx: newDx,
          dy: newDy
        };
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    const newIcons = generateIcons(newFilter);
    setIcons(newIcons);
    setBubbles(initializeBubbles(newIcons.length));
  };

  const handleMouseLeave = () => {
    setBubbles(initializeBubbles(icons.length));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setBubbles(prev =>
      prev.map(b => {
        const bubbleX = (b.x / 100) * rect.width;
        const bubbleY = (b.y / 100) * rect.height;

        const dx = bubbleX - mouseX;
        const dy = bubbleY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const force = dist < 120 ? (120 - dist) / 15 : 0;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        return {
          ...b,
          x: Math.max(2, Math.min(98, b.x + fx)),
          y: Math.max(2, Math.min(90, b.y + fy))
        };
      })
    );
  };

  return (
    <section id="habilidades" className="skills-section" style={{ backgroundColor: '#0f172a' }}>
      <h2 className="skills-title">Habilidades adquiridas por experiencia laboral</h2>
      <div className="skills-filters">
        {['Todos', ...Object.keys(categories)].map(cat => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`skills-filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        className="pecera-container transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ height: '400px' }}
      >
        {icons.map(({ Icon, name }, i) => (
          <div
            key={i}
            className="burbuja"
            style={{
              left: `${bubbles[i]?.x || 0}%`,
              top: `${bubbles[i]?.y || 0}%`
            }}
            title={name}
          >
            <Icon size={28} />
          </div>
        ))}
      </div>
    </section>
  );
}
