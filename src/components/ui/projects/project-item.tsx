"use client"
import React from 'react'
import project from '@/img/project-1.png'
import Image from 'next/image'
import { DiCss3Full, DiHtml5, DiJavascript1 } from 'react-icons/di'
import { motion } from 'framer-motion'
import Button from '../button'
import { ChartSpline, CircleGauge, Rotate3d } from 'lucide-react'


const list = [
    {
        title: '+50% заявок',
        icon: <ChartSpline className='text-primary' />,
    },
    {
        title: 'Lighthouse 95+',
        icon: <CircleGauge className='text-primary' />
    },
    {
        title: 'Приятные анимации',
        icon: <Rotate3d className='text-primary' />

    }
]

export const ProjectItem = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileHover={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ duration: .3 }}
            className='grid grid-cols-2 gap-5'>
            <div className="">
                <Image className='w-max rounded-xl block mx-auto' src={project} alt='Фото' />
            </div>
            <div className="px-5 py-[15px] flex flex-col border border-primary/50 rounded-xl">
                <div className="font-bold text-3xl">Сайт риэлтора</div>
                <div className="mt-2.5">
                    <div className="grid gap-y-2.5">
                        {list.map((item) => {
                            return <div className='flex gap-2'>
                                {item.icon} {item.title}
                            </div>
                        })}
                    </div>
                    <div className="mt-2.5">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свою переписывается пор знаках послушавшись ручеек правилами продолжил но, текста домах. Он деревни домах переписали использовало меня возвращайся речью маленькая!</div>
                    <div className="mt-4 font-medium text-xl">Технологии:</div>
                    <div className="flex gap-2 flex-wrap">
                        <div className=""><DiHtml5 size={50} className='text-orange-400' /></div>
                        <div className=""><DiCss3Full size={50} className='text-blue-400' /></div>
                        <div className=""><DiJavascript1 size={50} className='text-yellow-300' /></div>
                    </div>
                </div>
                <Button className='w-max mt-auto' size='lg' variant='outline'>Изучить проект</Button>
            </div>
        </motion.div>

    )
}