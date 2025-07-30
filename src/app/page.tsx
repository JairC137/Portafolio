// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import CompaniesSection from "@/components/CompaniesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="pt-20">
      <Analytics />
      <section id="inicio"><Hero /></section>
      <section id="sobre-mi"><About /></section>
      <section id="empresas"><CompaniesSection /></section>
      <section id="proyectos"><ProjectsSection /></section>
      <section id="habilidades"><Skills /></section>
      <section id="contacto"><Contact /></section>
    </div>
  );
}
