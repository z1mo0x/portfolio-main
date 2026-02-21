"use client"
import React from 'react'
import project from '@/img/project-1.png'
import Image from 'next/image'
import { DiCss3Full, DiHtml5, DiJavascript1 } from 'react-icons/di'
import { motion } from 'framer-motion'
import Button from '../button'

export const ProjectItem = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: .3 }}
            className='grid grid-cols-3 border-y-2 border-white p-5'>
            <div className="h-full overflow-hidden rounded-xl">
                <Image className='h-full' src={project} alt='Фото' />
            </div>
            <div className="col-span-2 px-5 py-[15px] flex flex-col">
                <div className="font-bold text-4xl">Сайт риэлтора</div>
                <div className="flex gap-3 items-center mt-2.5">
                    <div className="font-medium text-xl">Технологии:</div>
                    <div className="flex gap-2 flex-wrap">
                        <div className=""><DiHtml5 size={50} className='text-orange-400' /></div>
                        <div className=""><DiCss3Full size={50} className='text-blue-400' /></div>
                        <div className=""><DiJavascript1 size={50} className='text-yellow-300' /></div>
                    </div>
                </div>
                <div className="flex gap-2 mt-2.5">
                    <div className="font-medium text-xl">Описание:</div>
                    <div className="text-xl">
                        <div className="">проект был выполнен как landing-page, в нем рассказывается об услугах и деятельности, так же присутствуют приятные анимации.</div>
                    </div>
                </div>
                <Button className='w-max mt-auto' size='lg' variant='outline'>Изучить проект</Button>
            </div>
        </motion.div>

    )
}