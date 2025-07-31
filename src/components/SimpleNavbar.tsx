// src/components/SimpleNavbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleNavbar() {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-center py-4 fixed top-0 z-50">
      <nav
        className="w-[80%] max-w-5xl backdrop-blur-md bg-white/30 border border-white/40 
        shadow-xl rounded-full px-8 py-3 flex items-center justify-between transition-all 
        duration-300 ease-in-out animate-fade-in-down"
      >
        <Link
          href="/"
          className="text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200"
        >
          Jair Olmos
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link
            href="/"
            className={`hover:text-blue-600 transition ${
              pathname === "/" ? "text-blue-700 font-bold" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className={`hover:text-blue-600 transition ${
              pathname === "/about" ? "text-blue-700 font-bold" : ""
            }`}
          >
            Sobre mí
          </Link>
        </div>
      </nav>
    </header>
  );
}
