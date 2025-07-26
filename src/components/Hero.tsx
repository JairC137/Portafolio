"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen arriba en mobile */}
        <div className="flex justify-center">
<div className="relative w-64 h-64 md:w-96 md:h-96">
  <img
    src="/images/jair-foto.png"
    alt="José Jair Medrano Olmos"
    className="w-full h-full object-cover shadow-xl mask-brush"
  />
</div>

        </div>

        {/* Texto y botones */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Soy José Jair Medrano Olmos<br />
            <span className="text-blue-600">Especialista en soluciones basadas en datos</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6">
            Consultor tecnológico con experiencia en análisis, automatización y visualización de datos.
            Transformo información en decisiones estratégicas mediante Python, Power Platform, APIs y dashboards interactivos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">

            <a
              href="#contacto"
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm md:text-base hover:bg-blue-700 transition"
            >
              Contáctame
            </a>
            <a
              href="/CV-JoseJairMedrano.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm md:text-base hover:text-blue-800"
            >
              Ver CV completo
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-500 text-sm">
            <a href="https://github.com/JairC137/" target="_blank" className="hover:text-blue-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jolmosdev/" target="_blank" className="hover:text-blue-600">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
