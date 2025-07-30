"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Inicio", href:"#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Empresas", href: "#empresas" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Marca */}
        <Link href="#inicio" className="text-xl font-bold text-gray-800">
          Jair Olmos
        </Link>

        {/* Menú en desktop */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className="relative text-gray-600 hover:text-black transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-gray-700"
        >
          <FiMenu />
        </button>
      </nav>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fondo difuminado */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar animado */}
          <div className="relative z-50 w-[80%] max-w-xs bg-white p-6 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 text-2xl"
            >
              <FiX />
            </button>

            <ul className="mt-12 space-y-6 text-lg font-medium text-gray-800">
              {links.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} onClick={() => setMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
