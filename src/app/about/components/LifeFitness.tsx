// src/app/about/components/LifeFitness.tsx
import { FaDumbbell } from "react-icons/fa";

export default function LifeFitness() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FaDumbbell className="mx-auto text-5xl text-indigo-600 mb-4" />

        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">
          Life & Fitness
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Soy entrenador certificado y el <strong>gym</strong> es mi segundo
          hogar. Entreno con mi mejor amigo casi a diario; la disciplina del
          levantamiento de pesas se refleja en mi forma de abordar los retos de
          desarrollo: constancia, técnica y mejora continua.
        </p>
      </div>
    </section>
  );
}
