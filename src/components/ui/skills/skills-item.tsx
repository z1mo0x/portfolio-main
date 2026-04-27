'use client'

import React, { memo } from 'react'
import ElectricBorder from "@/components/ElectricBorder"
import { motion } from 'framer-motion'

type Props = {
    icon: React.ReactNode,
    title: string,
    progress: number,
    index: number;
}

export default memo(function SkillItem({ index, icon, title, progress }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, delay: index * .10 }}
            viewport={{ once: true }}
            className='border border-blue-500 p-5 
             rounded-xl flex flex-col items-center 
             shadow-[0px_0px_10px] shadow-blue-500 
             inset-shadow-[0px_0px_10px] inset-shadow-blue-500
             max-lg:flex-row max-lg:p-2.5 max-lg:gap-2 max-sm:flex-col
             '
        >
            <div className="skill-item h-[100px] shrink-0 w-[100px] max-xl:h-[50px] max-xl:w-[50px]">
                {icon}
            </div>
            <div className="h-full w-full flex flex-col justify-end items-center">
                <div className="bungee text-xl mt-2.5 max-xl:text-lg max-lg:text-md">
                    {title}
                </div>
                <div className="overflow-hidden rounded-xl mt-2.5 h-[8px] bg-gray-700 w-full">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: .15 * index }}
                        viewport={{ once: true }}
                        className="bg-primary h-full"></motion.div>
                </div>
            </div>
            {/* </ElectricBorder > */}
        </motion.div>
    )
})