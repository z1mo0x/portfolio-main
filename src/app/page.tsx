import Skills from "@/components/ui/skills/skills";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import ProjectsBlock from "@/components/ui/projects/projects-block";
import AboutBlock from "@/components/ui/about/about-block";
import ServicesBlock from "@/components/ui/services/services-block";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutBlock />
      <ServicesBlock />
      <Skills />
      <ProjectsBlock />
    </>

  );
}
