// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import CompaniesSection from "@/components/CompaniesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="pt-20">
      <section id="inicio"><Hero /></section>
      <section id="sobre-mi"><About /></section>
      <section id="habilidades"><Skills /></section>
      <section id="empresas"><CompaniesSection /></section>
      <section id="proyectos"><ProjectsSection /></section>
      <section id="contacto"><Contact /></section>
    </div>
  );
}
