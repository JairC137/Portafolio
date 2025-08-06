// src/app/about/components/Canhonero.tsx
import { FaFutbol } from "react-icons/fa";

export default function Canhonero() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FaFutbol className="mx-auto text-5xl text-purple-700 mb-4" />

        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">
          Cañoneros • Mazatlán FC
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Soy <strong>embajador oficial</strong> y miembro de la mesa directiva
          de la filial <em>Cañoneros</em>, escuela de fútbol asociada a Mazatlán
          FC. Impulso programas de formación, valores deportivos y vinculación
          con la comunidad local.
        </p>
      </div>
    </section>
  );
}
