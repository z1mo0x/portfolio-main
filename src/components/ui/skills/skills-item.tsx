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
        >
            <ElectricBorder
                speed={.5}
                chaos={.04}
                style={{ borderRadius: 16 }}
                color='#2b7fff'
                className={"p-5 flex flex-col text-center"}>
                <div className="justify-self-center">
                    {icon}
                </div>
                <div className="font-bold text-xl mt-2.5">
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
            </ElectricBorder >
        </motion.div>
    )
})