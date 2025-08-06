// src/app/about/components/AwsUser.tsx
import { FaAws } from "react-icons/fa";

export default function AwsUser() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FaAws className="mx-auto text-5xl text-orange-500 mb-4" />

        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">
          Ajolotes en la Nube
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Formo parte de <strong>Ajolotes en la Nube</strong>, el grupo oficial
          de usuarios de AWS en la Ciudad de México. Allí comparto charlas,
          tutoriales y buenas prácticas sobre arquitectura cloud, fomentando una
          comunidad inclusiva y colaborativa.
        </p>
      </div>
    </section>
  );
}
