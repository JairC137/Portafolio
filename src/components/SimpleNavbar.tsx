"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleNavbar() {
  const pathname = usePathname();

  /* Utilidad para enlaces */
  const linkClasses = (href: string) =>
    `text-[#0f172a]
     drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]
     hover:text-blue-500 transition-colors
     ${pathname === href ? "font-semibold text-blue-600" : ""}`;

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
      <nav
        className="w-[70%] max-w-5xl px-8 py-3 rounded-full flex items-center justify-between
                   bg-white/15 dark:bg-[#ffffff14]
                   backdrop-blur-xl backdrop-saturate-150
                   ring-1 ring-white/30 dark:ring-white/20
                   shadow-[0_2px_6px_rgba(0,0,0,0.25)]
                   transition-shadow duration-300
                   hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                   animate-fade-in-down"
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

        {/* Enlaces desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/"        className={linkClasses("/")}>Inicio</Link>
          <Link href="/about"   className={linkClasses("/about")}>Sobre mí</Link>
        </div>
      </nav>
    </header>
  );
}
