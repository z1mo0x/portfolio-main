import Skills from "@/components/ui/skills/skills";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import ProjectsBlock from "@/components/ui/projects/projects-block";
import AboutBlock from "@/components/ui/about/about-block";
import ServicesBlock from "@/components/ui/services/services-block";
import PageLoad from "@/components/common/pageLoad";
import ReviewsBlock from "@/components/ui/reviews/reviews-block";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutBlock />
      <ServicesBlock />
      <Skills />
      <ProjectsBlock />
      <ReviewsBlock />
    </>

  );
}
