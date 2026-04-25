import BlogBlock from '@/components/ui/blog/blog-block'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Блог frontend-разработчика | Next.js, React, SEO',
    description: 'Статьи о Next.js App Router, React 19, framer-motion, Bitrix CMS, SEO. Практика из проектов на Vercel.',
    keywords: 'Next.js, React, frontend, JavaScript, TypeScript, CSS анимации, SEO, Bitrix',
    authors: [{ name: 'Андрей' }],
    creator: 'Андрей',
    publisher: 'Портфолио Андрея',
    openGraph: {
        title: 'Блог Андрея | Frontend разработка',
        description: 'Next.js, React, анимации, SEO — практические статьи.',
        url: 'https://z1mo0x.vercel.app/blog',
        siteName: 'Портфолио Андрея',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Блог | Frontend',
        description: 'Next.js, React статьи',
    },
    alternates: {
        canonical: 'https://z1mo0x.vercel.app/blog',
    },
};


const BlogPage = () => {
    return (
        <BlogBlock headingLevel={1} />
    )
}

export default BlogPage;