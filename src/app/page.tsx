import Skills from "@/components/ui/skills/skills";
import Hero from "@/components/ui/hero";
import ProjectsBlock from "@/components/ui/projects/projects-block";
import AboutBlock from "@/components/ui/about/about-block";
import ServicesBlock from "@/components/ui/services/services-block";
import ReviewsBlock from "@/components/ui/reviews/reviews-block";
import BlogBlock from "@/components/ui/blog/blog-block";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ServicesBlock />
      <Skills />
      <ProjectsBlock />
      <ReviewsBlock />
      <BlogBlock headingLevel={2} />
    </>

  );
}
