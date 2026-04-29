import ArchitekturaTicha from "@/components/architektura_ticha";
import Hero from "@/components/hero";
import { Kolekce } from "@/components/kolekce";
import Proces from "@/components/proces";
import SluzbyNaMiru from "@/components/sluzby_na_miru";

export default function Home() {
  return (
    <main>
      <Hero />
      <Kolekce />
      <Proces />
      <SluzbyNaMiru />
      <ArchitekturaTicha />
    </main>
  );
}
