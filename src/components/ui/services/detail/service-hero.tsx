'use client'

import React, { memo } from 'react'
import Button from '../../buttonMain'
import Link from 'next/link'
import LightRays from '@/components/LightRays'
import { ServicesProps, ServicesPropsDetail } from '@/types/services'
import { Check, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const leftContainer = {
    hidden: {
        opacity: 0.5,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const leftVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const rightContainer = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .7,
            staggerChildren: 0.1,
            delayChildren: .8,
        },
    },
}

const rightVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            stiffness: 0,
        }
    },
}

const ServiceHero = memo(({ title, descr, info }: Pick<ServicesProps, "title" | 'descr' | 'info'>) => {
    return (
        <>
            <div className="h-screen">
                <div className='absolute right-0 top-0 w-full h-full -z-1'>
                    <LightRays
                        raysOrigin="right"
                        raysColor="#ff6c00"
                        raysSpeed={0}
                        lightSpread={0.9}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={1}
                        noiseAmount={0}
                        distortion={0}
                        className="custom-rays"
                        pulsating={false}
                        fadeDistance={2}
                        saturation={0}

                    />
                </div>
                <div className="container h-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="grid grid-cols-[2fr_1fr] relative z-1 h-full items-center">
                        <motion.div className="" initial="hidden" whileInView="visible" variants={leftContainer}>
                            <motion.div
                                variants={leftVariants}
                                className="w-max rounded-full px-4 py-2 flex gap-2 items-center bg-accent/75 border border-accent"><Code className='text-primary' />Разработка</motion.div>
                            <motion.div
                                variants={leftVariants} className="text-5xl bungee mt-15">
                                {title}
                            </motion.div>
                            <motion.div
                                variants={leftVariants} className="pr-10 mt-5 text-white/75">{descr}</motion.div>
                            <motion.div
                                variants={leftVariants} className="mt-20 flex gap-5">
                                <Button variant='shadow'>Обсудить проект</Button>
                                <Link href={'#stages'}>
                                    <Button className='border border-primary' variant='arrow'>Этапы разработки</Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={rightContainer} initial="hidden" whileInView='visible'
                            className="h-max border border-border rounded-lg bg-[rgba(255,255,255,.025)] backdrop-blur-lg p-5 py-5 grid gap-5">
                            {info.map((item, index) => {
                                return (
                                    <motion.div variants={rightVariants} key={item.name + index} className="flex gap-10 items-center">
                                        <div className="bg-primary/35 p-2 rounded-xl grid items-center justify-center"><Check /></div>
                                        <div className="">{item.name}</div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>
                <div className="absolute -bottom-[50px] h-[100px] w-full z-1 bg-rgba(255,255,255,.1) backdrop-blur-[3px]"></div>
            </div>
        </>
    )
})

ServiceHero.displayName = 'ServiceHero';


export default ServiceHero