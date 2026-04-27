'use client'

import Title from '@/components/common/title'
import { siteConfig } from '@/config/siteConfig';
import React from 'react'
import BlogItem from './blog-item';
import { Swiper, SwiperSlide } from 'swiper/react';

type BlogBlockProps = {
    headingLevel?: 1 | 2;
};

const BlogBlock = ({ headingLevel }: BlogBlockProps) => {
    return (
        <div className="pt-30">
            <div className="container">
                <Title lvl={headingLevel}>Блог о React и Next.js</Title>
                <Swiper slidesPerView={3}
                    spaceBetween={20}
                    className='mt-15'
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2
                        },
                        768: {
                            slidesPerView: 2.2
                        },
                        1024: {
                            slidesPerView: 2.5
                        },
                        1200: {
                            slidesPerView: 3
                        },
                    }}>
                    {siteConfig.blog.map((blog_item, index) => {
                        return <SwiperSlide key={blog_item.title + index} className='!h-[unset]'>
                            <BlogItem {...blog_item} index={index} />
                        </SwiperSlide>
                    })}
                </Swiper>

            </div>
        </div >
    )
}
export default BlogBlock;