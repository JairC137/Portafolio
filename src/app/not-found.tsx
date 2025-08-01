// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-24">
      {/* ----- Burbujas de sombra suaves estilo glassmorphism ----- */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl"
      />
      {/* ----- Contenedor central ----- */}
      <section className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-center gap-12 md:flex-row md:gap-20">
        {/* Imagen / GIF */}
        <div className="w-full max-w-sm shrink-0 md:max-w-md">
          <Image
            src="/images/this-is-fine.gif"
            alt="Mascota mirando el caos con cara de 'todo bien'"
            width={600}
            height={600}
            className="rounded-full border-4 border-white shadow-xl object-cover"
            priority
          />
        </div>

        {/* Texto principal */}
        <div className="text-center md:text-left">
          <h1 className="text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-8xl">
            404
          </h1>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-snug text-blue-600 md:text-4xl">
            ¡Ups! Página no encontrada
          </h2>
          <p className="mt-4 max-w-lg text-lg text-gray-700">
            Parece que la URL que ingresaste no existe o fue movida. Tranquilo,
            en el mundo del desarrollo esto pasa más de lo que crees.
          </p>

          {/* CTA s */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
{/* ——— Botón principal “Volver al inicio” ——— */}
<Link
  href="/"
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3 font-semibold text-white
             transition-all duration-300 focus:outline-none"
>
  {/* capa glass + gradiente */}
  <span
    aria-hidden
    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-600/70 via-blue-500/50 to-blue-500/30
               backdrop-blur-md transition-all duration-300 group-hover:from-blue-700/80 group-hover:via-blue-600/60
               group-hover:to-blue-600/40 group-hover:blur-[3px]"
  />
  {/* halo (opcional) */}
  <span
    aria-hidden
    className="absolute inset-0 -z-20 rounded-full ring-1 ring-inset ring-white/30 group-hover:ring-white/40"
  />
  Volver al inicio
</Link>

{/* ——— Botón secundario “Contáctame” ——— */}
<Link
  href="/#contacto"
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-medium
             text-blue-600 transition-all duration-300 focus:outline-none"
>
  {/* capa glass blanca */}
  <span
    aria-hidden
    className="absolute inset-0 -z-10 rounded-full bg-white/40 backdrop-blur-md transition-all duration-300
               group-hover:bg-white/60"
  />
  {/* ring + sombra suave */}
  <span
    aria-hidden
    className="absolute inset-0 -z-20 rounded-full ring-1 ring-inset ring-blue-600/30 group-hover:ring-blue-700/40
               group-hover:shadow-md"
  />
  Contáctame
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}
