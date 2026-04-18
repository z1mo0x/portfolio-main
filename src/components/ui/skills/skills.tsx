'use client'

import Title from '@/components/common/title'
import React, { memo } from 'react'
import AboutItem from './skills-item'
import { siteConfig } from '@/config/siteConfig'
import { motion } from 'framer-motion'

export default memo(function Skills() {
    return (
        <motion.div
            initial={{ borderRadius: "150px" }}
            whileInView={{ borderRadius: "0px" }}
            viewport={{ once: false, amount: 'all' }}
            transition={{ duration: .5 }}
            className="mt-15 pt-15 bg-accent pb-15">
            <div className="container h-full">
                <Title>Навыки и Технологии</Title>
                <div className="grid grid-cols-5 mt-10 gap-5">
                    {siteConfig.skills.map((skill, index) => {
                        return <AboutItem key={skill.title + index} index={index} icon={skill.icon} title={skill.title} progress={skill.progress} />
                    })}
                </div>
                {/* <div className="p-2.5 mt-10 text-xl text-center bg-accent rounded-xl">В этом блоке расписано все, что я умею, какими навыками обладаю, чтобы вы сразу понял, что от меня ожидать!</div> */}
            </div>
        </motion.div>
    )
})