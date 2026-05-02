import Skills from "@/components/ui/skills/skills";
import Hero from "@/components/ui/hero";
import ProjectsBlock from "@/components/ui/projects/projects-block";
import AboutBlock from "@/components/ui/about/about-block";
import ReviewsBlock from "@/components/ui/reviews/reviews-block";
import BlogBlock from "@/components/ui/blog/blog-block";
import dynamic from "next/dynamic";


const ServicesBlockLazy = dynamic(() => import('@/components/lazy/services-block'))

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ServicesBlockLazy />
      <Skills />
      <ProjectsBlock />
      <ReviewsBlock />
      <BlogBlock headingLevel={2} />
    </>

  );
}
