// src/app/about/page.tsx
import Bio from "./components/Bio";
import AwsUser from "./components/AwsUser";
import LifeFitness from "./components/LifeFitness";
import Canhonero from "./components/Canhoneros";
import Contact from "./components/SimpleContact";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-neutral-100 to-neutral-200">
      <Bio />
      <AwsUser />
      <LifeFitness />
      <Canhonero />
      <Contact />

      {/* Sección de contacto */}
      
    </main>
  );
}
