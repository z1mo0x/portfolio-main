"use client"

import Title from '@/components/common/title'
import React, { memo } from 'react'
import AboutItem from './about-item'
import { siteConfig } from '@/config/siteConfig'
import { motion } from 'framer-motion'

const container = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: .5, staggerChildren: .2 },

    }
}
const items = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: .3 }
    }
}

export default memo(function AboutBlock() {

    return (
        <div className="min-h-screen pt-30">
            <div className="container">
                <Title>Обо мне</Title>
                <div className="about-section">
                    <motion.div
                        variants={container}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ margin: "0% 0% -20% 0%" }}
                        className="rounded-lg absolute w-[3px] z-0 left-1/2 h-full bg-primary"
                    >
                        <motion.div variants={items}
                            className="w-[3px]  absolute left-0 top-0 h-full bg-primary blur-xs">
                        </motion.div>
                        <motion.div variants={items}
                            className="w-[5px] absolute
                         left-0 top-0 -ml-[1px] h-full bg-primary blur-md">
                        </motion.div>
                        <motion.div variants={items}
                            className="w-[10px] absolute
                         left-0 top-0 -ml-[4.5px] h-full bg-primary blur-xl">
                        </motion.div>
                    </motion.div>
                    {siteConfig.about.map((item, index) => {
                        return <AboutItem
                            key={item.title + index}
                            index={index}
                            title={item.title}
                            descr={item.descr}
                            year={item.year}
                            workName={item.workName}
                        />
                    })}
                </div>
            </div>
        </div >
    )
})