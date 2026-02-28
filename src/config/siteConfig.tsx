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
    ],
    about: [
        {
            title: 'Индивидуальное начало',
            workName: 'Personal work',
            year: "2025-XXXX",
            descr: "Разработал свое портфолио и начал активно искать клиентов. Именно сейчас я развиваюсь, чтобы самостоятельно создавать сайты для всех."
        },
        {
            title: 'Знакомство с React',
            year: 2024,
            descr: "Когда HMTL, CSS, JS были изучены достаточно чтобы создавать почти любые сайты без бекенда, я встретил гайд по React и мне очень понравилось как быстро работают на нем сайты, и как удобно на нем писать простенький на тот момент, но бэкенд и начал очень активно его изучать."
        },
        {
            title: 'Работа в Агентстве',
            workName: 'Brevis Inc.',
            year: 2022,
            descr: "Устроился работать в digital-агенство и работал с огромным количеством сайтов, где я очень хорошо подтянул все мои навыки и приобрел кучу новых."
        },
        {
            title: 'Самообучение',
            year: '2020',
            descr: "В колледже нам 2 недели показывали что такое разработка сайтов на HTML,CSS. После этого меня зацепило и я начал активно учиться, чтобы делать идеальные и удобные интерфейсы для пользователей!"
        },
    ]
}