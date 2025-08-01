/* components/Navbar.tsx */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ ENLACES ------------------ */
const links = [
  { name: "Inicio",      href: "#inicio" },
  { name: "Sobre mí",    href: "#sobre-mi" },
  { name: "Empresas",    href: "#empresas" },
  { name: "Proyectos",   href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto",    href: "#contacto" },
  { name: "Blog",        href: "/blog" },
];

/* ------------------ NAVBAR ------------------- */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* ESC + bloquear scroll cuando el menú móvil está abierto */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ---------- BARRA FIJA ---------- */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
        <nav
          aria-label="Menú principal"
          className="w-[70%] max-w-6xl flex items-center justify-between px-8 py-3
                     rounded-full bg-white/15 dark:bg-[#ffffff14]
                     backdrop-blur-xl backdrop-saturate-150
                     ring-1 ring-white/30 dark:ring-white/20
                     shadow-[0_2px_6px_rgba(0,0,0,0.25)]
                     transition-shadow duration-300
                     hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
        >
          {/* Logo / nombre */}
          <Link
            href="/"
            className="text-xl font-semibold text-[#0f172a]
                       drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]
                       hover:text-blue-500 transition-colors"
          >
            Jair Olmos
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`text-[#0f172a]
                            drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]
                            hover:text-blue-400 transition-colors
                            ${
                              href === "/blog" && pathname === "/blog"
                                ? "text-blue-600 font-semibold"
                                : ""
                            }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Botón hamburguesa */}
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-[#0f172a]
                       drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]
                       hover:text-blue-400 transition-colors"
          >
            <FiMenu />
          </button>
        </nav>
      </header>

      {/* ---------- MENÚ MÓVIL ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-white/40 dark:bg-white/20
                         backdrop-blur-sm backdrop-brightness-125"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs
                         bg-white/60 dark:bg-white/30 backdrop-blur-md backdrop-brightness-110
                         border-r border-white/30 shadow-xl p-6
                         rounded-tr-3xl rounded-br-3xl overflow-y-auto flex flex-col space-y-6"
            >
              <button
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
                className="self-end text-2xl text-[#0f172a]
                           drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]
                           hover:text-blue-700"
              >
                <FiX />
              </button>

              <nav id="mobile-menu" className="flex-1">
                <ul className="space-y-6 text-lg font-medium">
                  {links.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-[#0f172a]
                                    drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]
                                    ${
                                      href === "/blog" && pathname === "/blog"
                                        ? "text-blue-700"
                                        : ""
                                    }`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
