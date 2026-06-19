import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
}
