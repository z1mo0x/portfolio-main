import Hero from "@/components/ui/hero";
import AboutBlock from "@/components/ui/about/about-block";
import dynamic from "next/dynamic";


const HeroLazy = dynamic(() => import('@/components/ui/hero'))
const ServicesBlockLazy = dynamic(() => import('@/components/lazy/services-block'))
const SkillsLazy = dynamic(() => import('@/components/ui/skills/skills'))
const ProjectsBlockLazy = dynamic(() => import('@/components/ui/projects/projects-block'))
const ReviewsBlockLazy = dynamic(() => import('@/components/ui/reviews/reviews-block'))
const BlogBlockLazy = dynamic(() => import('@/components/ui/blog/blog-block'))

export default function Home() {
  return (
    <>
      <HeroLazy />
      <AboutBlock />
      <ServicesBlockLazy />
      <SkillsLazy />
      <ProjectsBlockLazy />
      <ReviewsBlockLazy />
      <BlogBlockLazy headingLevel={2} />
    </>

  );
}
