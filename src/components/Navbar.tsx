/* components/Navbar.tsx */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ ENLACES ------------------ */
const links = [
  { name: "Inicio",        href: "#inicio" },
  { name: "Sobre mí",      href: "#sobre-mi" },
  { name: "Empresas",      href: "#empresas" },
  { name: "Proyectos",     href: "#proyectos" },
  { name: "Habilidades",   href: "#habilidades" },
  { name: "Contacto",      href: "#contacto" },
  { name: "Blog",          href: "/blog" },
];

/* ------------------ NAVBAR ------------------- */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Esc + bloquear scroll cuando el menú está abierto */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
 
  return (
    <>
      {/* ---------- BARRA FIJA ---------- */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
        <nav
          role="navigation"
          aria-label="Menú principal"
          className="w-[90%] flex items-center justify-between px-6 py-3 rounded-full
                     backdrop-blur-md bg-white/40 dark:bg-white/20
                     border border-white/30 shadow-xl ease-in-out animate-fade-in-down"
        >
          {/* Logo / nombre */}
        <Link
          href="/"
          className="text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200"
        >
          Jair Olmos
        </Link>



          {/* Links desktop */}
          <ul className="hidden md:flex space-x-6">
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className={`
                    relative inline-block transition-colors duration-200
                    ${pathname === href
                      ? "text-blue-700"
                      : "text-black dark:text-black hover:text-blue-700"}
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-blue-600 after:origin-left
                    after:transition-transform after:duration-300
                    ${
                      pathname === href
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }
                  `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-black dark:text-black hover:text-blue-700 transition-colors duration-200"
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
                onClick={() => setMenuOpen(false)}
                className="self-end text-2xl text-black dark:text-black hover:text-blue-700"
              >
                <FiX />
              </button>

              <nav className="flex-1">
                <ul className="space-y-6 text-lg font-medium text-black dark:text-black">
                  {links.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={pathname === href ? "text-blue-700" : ""}
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
