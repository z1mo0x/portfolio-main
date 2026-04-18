import Title from '@/components/common/title'
import { siteConfig } from '@/config/siteConfig';
import React from 'react'
import BlogItem from './blog-item';

const BlogBlock = () => {
    return (
        <div className="pt-30">
            <div className="container">
                <Title>Последние новости</Title>
                <div className="mt-12.5 grid grid-cols-3 gap-10">
                    {siteConfig.blog.map((blog_item, index) => {
                        return <BlogItem key={blog_item.title + index} {...blog_item} index={index} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default BlogBlock;