import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-black-100 sm:px -10">
      <div className="w-full max-w-7xl">
        <Hero />
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
      </div>
      <br />
      <br />
    </main>
  );
}
