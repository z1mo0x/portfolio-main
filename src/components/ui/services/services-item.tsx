import React, { memo } from 'react'
import Button from '../buttonMain'
import CodeTag from '../codeTag'
import { motion } from 'framer-motion'
import { ServicesProps } from '@/types/services'
import Link from 'next/link'


export default memo(function ServicesItem({ index, title, descr, price, onCardClick, detail_link }: ServicesProps) {

    const correctPrice = new Intl.NumberFormat("RU-ru", {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)

    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: .3, delay: index ? .3 * index : .3, ease: 'linear' }}
            viewport={{ once: true }}
            className="service-card relative flex flex-col h-full border border-accent rounded-xl overflow-hidden">
            <div className="font-bold text-center text-xl bg-accent px-5 py-2.5">
                <CodeTag color='text-ring'>
                    {title}
                </CodeTag>
            </div>
            <div className="flex flex-col h-full items-center p-5 bg-[rgba(255,255,255,.025)]">
                <div className="mt-2.5"> {descr}</div>
                <div className="h-full flex flex-col justify-end items-center">
                    <div className="mt-5 cursor-pointer rounded-lg px-3 py-1 flex gap-2 items-center" onClick={onCardClick}>
                        Что входит?
                        <span className='rounded-full bg-blue-500/50 w-6 h-6 block grid items-center justify-center font-bold'>!</span>
                    </div>
                    <div className="mt-5 text-foreground/50">
                        от
                        <span className='font-medium text-2xl text-primary 
                        text-shadow-xs text-shadow-primary/50 relative'>
                            <div className="absolute w-full h-full bg-primary blur-xl top-0 left-0 -z-1"></div> {correctPrice} </span>
                        руб.
                    </div>
                    <Link href={`services/${detail_link}`}>
                        <Button className='mt-5 text-foreground' variant='default' size='lg'>Подробнее</Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
})