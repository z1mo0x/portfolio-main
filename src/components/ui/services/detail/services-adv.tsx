'use client'

import React, { memo } from 'react'
import Title from '@/components/common/title'
import { ServicesPropsDetail } from '@/types/services'
import { AnimatePresence, motion } from 'framer-motion'

const ServicesAdvantages = memo(({ benefits }: Pick<ServicesPropsDetail, 'benefits'>) => {
    return (
        <div className='mt-30'>
            <div className="container">
                <Title>Преимущества </Title>
                <div className="grid grid-cols-4 gap-5 mt-15">
                    <AnimatePresence>
                        {benefits.map((adv, index) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, rotate: 5, scale: .9 }}
                                    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                                    transition={{ delay: .15 * index }}
                                    viewport={{ once: true }}
                                    key={adv.name + index}
                                    className="border relative border-border p-5 rounded-lg
                                hover:border-primary/50 duration-300">
                                    <div className="text-xl font-bold">{adv.name}</div>
                                    <div className="text-white/75 mt-15">{adv.text}</div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>

        </div>
    )
})

ServicesAdvantages.displayName = 'ServicesAdvantages';

export default ServicesAdvantages