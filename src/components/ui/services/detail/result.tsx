"use client"


import Title from '@/components/common/title';
import { ServicesPropsDetail } from '@/types/services';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import React, { memo } from 'react'


const ServicesResult = memo(({ result }: Pick<ServicesPropsDetail, 'result'>) => {
    return (
        <div className="">
            <div className="container">
                <div
                    className="mt-30 p-10 grid grid-cols-2 gap-20 border border-primary/50 rounded-xl
                    backdrop-blur-xs relative"
                >
                    <div className="absolute w-full h-full -z-1 overflow-hidden">
                        <div className="bg-primary/25 blur-[100px] absolute right-0 top-1/2 w-1/2 h-full"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .3 }}
                        viewport={{ once: true, margin: "0% 0% -25% 0%" }}
                        className="">
                        <Title>Результат</Title>
                        <div className="mt-5 text-lg max-w-2/3">В итоге вы получаете полностью готовое решение, которое решает ваши бизнес-задачи.</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: " 0% 0% -25% 0%" }}
                        transition={{ duration: .3, delay: .3 }}
                        className="grid gap-y-5">
                        {result.map((item, index) => {
                            return (
                                <div key={item.name + index} className="flex gap-5 items-center">
                                    {/* <div className="">{item.name}</div> */}
                                    <div className="h-10 w-10 bg-primary rounded-xl grid place-items-center">
                                        <Check />
                                    </div>
                                    <div className="">{item.text}</div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div >
    )
})

ServicesResult.displayName = 'ServicesResult';

export default ServicesResult;