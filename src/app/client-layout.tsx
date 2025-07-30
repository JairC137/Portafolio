'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import SimpleNavbar from "@/components/SimpleNavbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/about" ? <SimpleNavbar /> : <Navbar />}
      {children}
    </>
  );
}
