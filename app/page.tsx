import Image from "next/image";
import {Hero}  from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
    </main>
  );
}
