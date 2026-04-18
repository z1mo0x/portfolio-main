import { DiCss3Full, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { GrGithub } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


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
    ],
    services: [
        {
            title: 'Одностраничный сайт',
            descr: "1 страница, максимальная конверсия. Подходит для рекламы и запуска продукта!",
            info: [
                {
                    name: "Адаптивный дизайн",
                    checked: true
                },
                {
                    name: "Интеграция форм заявок и чат-ботов",
                    checked: true
                },
                {
                    name: "Скорость загрузки <2 сек (Core Web Vitals)",
                    checked: true
                },
                {
                    name: "Микроразметка Schema.org для rich snippets",
                    checked: true
                },
                {
                    name: "Интеграция аналитики (Яндекс.Метрика, Google Analytics)",
                    checked: true
                },
                {
                    name: "Параллакс-эффекты и анимации (Framer Motion)",
                    checked: true
                },
            ],

            price: 30000,
        },
        {
            title: 'Многостраничный сайт',
            descr: "Структурированный сайт для бизнеса. Seo-оптимизация + удобная навигация.",
            info: [
                {
                    name: "Архитектура сайта (5-15 страниц)",
                    checked: true
                },
                {
                    name: "Многоуровневая навигация (меню, breadcrumbs)",
                    checked: true
                },
                {
                    name: "СЕО для каждой страницы (H1-H3, meta, sitemap.xml)",
                    checked: true
                },
                {
                    name: "Каталог товаров/услуг с фильтрами",
                    checked: true
                },
                {
                    name: "Блог/новости с пагинацией",
                    checked: true
                },
                {
                    name: "Формы обратной связи + CRM-интеграция",
                    checked: true
                },
                {
                    name: "Адаптивная верстка всех страниц",
                    checked: true
                },
                {
                    name: "Админ-панель для контента (Next.js + Supabase)",
                    checked: true
                },
                {
                    name: "Интеграция Яндекс.Метрика + Google Analytics",
                    checked: true
                }
            ],
            price: 60000,
        },
        {
            title: 'Интернет-магазин',
            descr: "Каталог, корзина, оплата онлайн. Подключение CRM и аналитики.",
            info: [
                {
                    name: "Каталог товаров с фильтрами и поиском",
                    checked: true
                },
                {
                    name: "Корзина с редактированием (добавление/удаление)",
                    checked: true
                },
                {
                    name: "Личный кабинет пользователя",
                    checked: true
                },
                {
                    name: "Управление заказами и складом",
                    checked: true
                },
                {
                    name: "СЕО-оптимизация каталога (SSG/ISR)",
                    checked: true
                },
                {
                    name: "Админ-панель для товаров/заказов",
                    checked: true
                },
                {
                    name: "Аналитика (Яндекс.Метрика + Google Analytics)",
                    checked: true
                }
            ],
            price: 80000,
        },
        {
            title: 'Уникальный сайт',
            descr: "Индивидуальный дизайн и архитектура. Разработка под нестандартные задачи.",
            info: [
                {
                    name: "Кастомный дизайн (Figma → React)",
                    checked: true
                },
                {
                    name: "Индивидуальная архитектура сайта",
                    checked: true
                },
                {
                    name: "3D-анимации и интерактив (Three.js/Framer)",
                    checked: true
                },
                {
                    name: "Авторизация и роли пользователей",
                    checked: true
                },
                {
                    name: "Dashboard/личный кабинет с графиками",
                    checked: true
                },
                {
                    name: "База данных",
                    checked: true
                },
                {
                    name: "Админ-панель с правами доступа",
                    checked: true
                },
                {
                    name: "СЕО + производительность (PWA)",
                    checked: true
                },
                {
                    name: "Тестирование и деплой (Vercel/Netlify)",
                    checked: true
                }
            ],
            price: 100000,
        },
    ],
    reviews: [
        {
            name: "Андрей",
            text: "Работает один, разработал все достаточно быстро, и очень качественно, залил сайт на хостинг и сопровождает по сей день!",
            created_at: "09.03.2026"
        },
        {
            name: "Виктор Николаевич",
            text: "Работает один, разработал все достаточно быстро, и очень качественно!",
            created_at: "09.03.2026"
        },
        {
            name: "Станислав Яцкевиц",
            text: "Работает один, разработал все достаточно быстро, и очень качественно, залил сайт на хостинг!",
            created_at: "09.03.2026"
        },
        {
            name: "Александр Парадеев",
            text: "Работает один, разработал все достаточно быстро!",
            created_at: "09.03.2026"
        },
        {
            name: "ООО 'Новые поля'",
            text: "Работает один, разработал все достаточно быстро, и очень качественно!",
            created_at: "12.02.2026",
        }
    ],
    blog: [
        {
            "id": 1,
            "title": "Оптимизация производительности Next.js: 5 практических советов для мобильных устройств",
            "descr": "Узнайте, как ускорить загрузку страниц на 40% с помощью SSR, Image Optimization и lazy loading. Практические примеры кода для React-разработчиков.",
            "image": "/img/project-1.png",
            "created_at": "2026-04-01T10:00:00Z",
            "detail_info": `
            <h2>Введение</h2>
            <p>В эпоху мобильного трафика скорость — это конверсия. В этой статье разберём, как оптимизировать Next.js-приложение для мобильных устройств.</p>
            <h3>1. Используйте Image Component</h3>
            <p>Next.js Image автоматически оптимизирует изображения: WebP, lazy loading и responsive sizes. Пример:</p>
            <pre><code>&lt;Image src=\"/hero.jpg\" alt=\"Hero\" width={800} height={600} priority /&gt;</code></pre>
            <p>Результат: загрузка на 30% быстрее.</p>
            <h3>2. Dynamic Imports и Lazy Loading</h3>
            <p>Загружайте компоненты по требованию:</p>
            <pre><code>const DynamicComponent = dynamic(() =&gt; import('../components/Heavy'), { loading: () =&gt; &lt;p&gt;Loading...&lt;/p&gt; });</code></pre>
            <h3>3. Bundle Analyzer</h3>
            <p>Установите @next/bundle-analyzer и найдите 'жирные' зависимости.</p>
            <h3>4. ISR и SSG</h3>
            <p>Static Generation для статичных страниц: getStaticProps</p>
            <h3>5. Core Web Vitals</h3>
            <p>Мониторьте LCP, FID, CLS в Google PageSpeed. Цель: 90+ баллов.</p>
            <p>Примените эти советы — и ваше приложение взлетит!</p>`
        },
        {
            "id": 2,
            "title": "Анимации в React с Framer Motion: Создаём плавный UI/UX без библиотек CSS",
            "descr": "Пошаговый гайд по Framer Motion для интерактивных анимаций. Примеры: hover-эффекты, page transitions и scroll-анимации. Идеально для портфолио.",
            "image": "/img/project-1.png",
            "created_at": "2026-03-28T14:30:00Z",
            "detail_info": `
            <h2>Почему Framer Motion?</h2>
            <p>Библиотека упрощает сложные анимации в React. Работает с TypeScript и Next.js. Установите: 
            <pre><code>npm i framer-motion</code></pre></p>
            <h3>Пример 1: Hover-эффект карточки</h3>
            <pre><code>import { motion } from 'framer-motion';\n\n&lt;motion.div\n  whileHover={{ scale: 1.05, rotate: 2 }}\n  transition={{ type: 'spring', stiffness: 300 }}\n&gt;\n  Карточка\n&lt;/motion.div&gt;
                </code></pre>
            <h3>Пример 2: Page Transition</h3>
            <pre><code>const variants = {\n  hidden: { opacity: 0, x: -100 },\n  visible: { opacity: 1, x: 0 },\n  exit: { opacity: 0, x: 100 }\n};\n\n&lt;motion.div variants={variants} initial=\"hidden\" animate=\"visible\" exit=\"exit\" /&gt;
            </code></pre>
            <h3>Пример 3: Scroll-анимация</h3>
            <p>Используйте useInView хук для анимации при скролле.</p>
            <h3>Советы</h3>
            <ul>
                <li>Используйте transform для GPU-ускорения.</li>
                <li>Тестируйте на мобильных — добавьте drag.</li>
                <li>Интегрируйте с Tailwind CSS.</li>
            </ul>
            <p>Экспериментируйте и делитесь результатами в комментах!</p>`
        },
        {
            "id": 3,
            "title": "SEO с Schema.org в React: Микроразметка для топ-выдачи Google",
            "descr": "Реализуем structured data для локального бизнеса, отзывов и FAQ. Интеграция с Next.js и Bitrix. Увеличиваем CTR на 15-20%.",
            "image": "/img/project-1.png",
            "created_at": "2026-03-20T09:15:00Z",
            "detail_info": `
            <h2>Зачем Schema.org?</h2>
            <p>Google использует structured data для rich snippets: звёздочки, цены, FAQ. В проектах для Мирбалконов это дало +18% кликов.</p>
            <h3>Шаг 1: Установка react-schemaorg</h3>
            <pre><code>npm i react-schemaorg @schemaorg/core</code></pre>
            <h3>Шаг 2: LocalBusiness</h3>
            <pre><code>import { Organization, PostalAddress } from 'schema-dts';\n\nconst schema = {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"LocalBusiness\",\n  \"name\": \"BREVIS\",\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"addressLocality\": \"Миасс\",\n    \"addressRegion\": \"Челябинская область\"\n  }\n};</code></pre>
            <p>Вставьте в &lt;Head&gt; Next.js: <code>&lt;script type=\"application/ld+json\"&gt;{JSON.stringify(schema)}&lt;/script&gt;</code></p>
            <h3>Шаг 3: Отзывы и FAQ</h3>
            <pre><code>{\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"Как ускорить сайт?\",\n    \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Оптимизируйте изображения...\" }\n  }]\n}</code></pre>
            <h3>Интеграция с Bitrix</h3>
            <p>Генерируйте JSON-LD динамически из инфоблоков.</p>
            <h3>Проверка</h3>
            <p>Используйте Google Rich Results Test. Тестируйте на production.</p>
            <p>Результат: топ-3 по локальным запросам. Пробовали на своих проектах?</p>`
        }
    ]
}