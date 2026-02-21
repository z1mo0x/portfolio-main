import { GitBranch, GitCommit } from "lucide-react";
import { DiCss3, DiCss3Full, DiHtml5, DiHtml53dEffects, DiJavascript1, DiReact } from "react-icons/di";
import { GrGithub } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const siteConfig = {
    nav: [
        {
            title: 'Обо мне',
            link: '/about',
        },
        {
            title: 'Портфолио',
            link: '/portfolio',
        },
        {
            title: 'Контакты',
            link: '/contacts',
        },
    ],
    skills: [
        {
            title: 'React',
            icon: <DiReact size={100} className="text-blue-500" />,
            progress: 85
        },
        {
            title: 'TypeScript',
            icon: <SiTypescript size={100} className="text-blue-600" />,
            progress: 70
        },
        {
            title: 'JavaScript',
            icon: <DiJavascript1 size={100} className="text-yellow-400" />,
            progress: 90
        },
        {
            title: 'Tailwind',
            icon: <RiTailwindCssFill size={100} className="text-blue-500" />,
            progress: 100
        },
        {
            title: 'Next.js',
            icon: <RiNextjsLine size={100} className="text-white" />,
            progress: 75
        },
        {
            title: 'HTML',
            icon: <DiHtml5 size={100} className="text-orange-500" />,
            progress: 100
        },
        {
            title: 'CSS',
            icon: <DiCss3Full size={100} className="text-blue-400" />,
            progress: 100
        },
        {
            title: 'Github',
            icon: <GrGithub size={100} className="text-orange-300" />,
            progress: 100
        },
        {
            title: 'Github',
            icon: <GrGithub size={100} className="text-orange-300" />,
            progress: 100
        },
        {
            title: 'Github',
            icon: <GrGithub size={100} className="text-orange-300" />,
            progress: 100
        },

    ]
}