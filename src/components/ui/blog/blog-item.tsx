"use client"

import { BlogItemProps } from '@/types/blog';
import React from 'react'
import Button from '../buttonMain';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogItem = (props: BlogItemProps) => {

    const clearDate = Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(props.created_at))

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, delay: .3 * (props.index ? props.index : 1) }}
            viewport={{ once: true }}
            className='blog-item flex flex-col border border-border h-full rounded-lg'>
            <div className="blog-image w-full h-[250px] relative">
                <Image className='object-cover rounded-t-lg' src={props.image} alt={props.title} fill />
            </div>
            <div className="p-5 flex flex-col grow">
                <div className="text-right text-[14px] text-muted-foreground">{clearDate}</div>
                <div className="mt-2.5 flex-grow">
                    <div className="font-bold max-[992px]:line-clamp-2">
                        {props.title}
                    </div>
                    <div className="mt-4 line-clamp-3 ">
                        {props.descr}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={`/blog/${props.id}`} className='mt-5'>
                        <Button size='lg'>Подробнее</Button>
                    </Link>
                </div>
            </div>

        </motion.div>
    )
}



export default BlogItem;