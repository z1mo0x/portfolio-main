'use client'

import Title from '@/components/common/title'
import { siteConfig } from '@/config/siteConfig';
import React from 'react'
import BlogItem from './blog-item';
import { usePathname } from 'next/navigation';

type BlogBlockProps = {
    headingLevel?: 1 | 2;
};

const BlogBlock = ({ headingLevel }: BlogBlockProps) => {

    return (
        <div className="pt-30">
            <div className="container">
                <Title lvl={headingLevel}>Блог о React и Next.js</Title>
                <div className="mt-12.5 grid grid-cols-3 gap-10">
                    {siteConfig.blog.map((blog_item, index) => {
                        return <BlogItem key={blog_item.title + index} {...blog_item} index={index} />
                    })}
                </div>
            </div>
        </div >
    )
}
export default BlogBlock;