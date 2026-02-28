import React, { memo } from 'react'
import Button from '../button'
import CodeTag from '../codeTag'
import { motion } from 'framer-motion'

type ServicesProps = {
    index: number,
    title: string,
    descr: string,
    price: number
}

export default memo(function ServicesItem({ index, title, descr, price }: ServicesProps) {

    const correctPrice = new Intl.NumberFormat("RU-ru", {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)

    return (
        <div className="service-card relative flex flex-col h-full border border-accent rounded-xl overflow-hidden">
            <motion.div
                initial={{ y: 0 }}
                whileInView={{ y: "-100%" }}
                transition={{ duration: .3, delay: .15 * index }}
                viewport={{ once: true }}
                className="absolute w-full h-full top left bg-white/50 backdrop-blur-xs z-2">
            </motion.div>
            <div className="font-bold text-center text-xl bg-accent px-5 py-2.5">
                <CodeTag color='text-ring'>
                    {title}
                </CodeTag>
            </div>
            <div className="flex flex-col h-full items-center p-5 bg-[rgba(255,255,255,.025)]">
                <div className="mt-2.5"> {descr}</div>
                <div className="h-full flex flex-col justify-end items-center">
                    <div className="mt-5 text-foreground/50">
                        от
                        <span className='font-medium text-2xl text-primary 
                        text-shadow-xs text-shadow-primary/50 relative'>
                            <div className="absolute w-full h-full bg-primary blur-xl top-0 left-0 -z-1"></div> {correctPrice} </span>
                        руб.
                    </div>
                    <Button className='mt-5 text-foreground' variant='default' size='lg'>Заказать</Button>
                </div>
            </div>
        </div>
    )
})