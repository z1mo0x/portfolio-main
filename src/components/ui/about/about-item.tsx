"use client"

import GradientText from '@/components/GradientText'
import { motion } from 'framer-motion'
import React, { memo } from 'react'

const styleMain = `w-full border border-primary/25 rounded-xl p-5 `
const left = "absolute z-1 left-[calc(100%+20px)] top-1/2 -translate-y-1/2"
const right = "absolute z-1 right-[calc(100%+20px)] top-1/2 -translate-y-1/2"
type ItemProps = {
    index: number,
    title: string,
    year: string | number,
    workName?: string,
    descr: string
}

export default memo(function AboutItem({ title, index, workName, year, descr }: ItemProps) {

    const isOdd = index % 2 === 0;
    const AboutVariants = {
        hiddenOdd: {
            opacity: 0,
            x: 100,
        },
        hiddenEven: {
            opacity: 0,
            x: -100,
        },
        showEven: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5,
            }
        },
        showOdd: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5,
            }
        }
    }

    return (
        <>
            <motion.div
                variants={AboutVariants}
                initial={`${!isOdd ? 'hiddenOdd' : 'hiddenEven'}`}
                whileInView={`${!isOdd ? 'showOdd' : 'showEven'}`}
                viewport={{ amount: .5, margin: "0% 0% -15% 0%" }}
                className={`${styleMain} relative`}>
                <div className={`${!isOdd ? `${right}` : `${left}`} bungee bg-[rgba(255,255,255,.1)] p-2 rounded-lg border border-accent w-max backdrop-blur-[10px]`}>
                    {year}</div>
                <GradientText
                    colors={["#ffa873", "#2b7fff"]}
                    animationSpeed={3}
                    yoyo={false}
                    className="font-bold m-0! cursor-default! text-2xl bg-transparent">
                    {title}
                </GradientText>
                {/* <div className="font-black text-2xl">{title}</div> */}
                <div className="text-md font-thin text-gray-400">{workName}</div>
                <div className="mt-5">
                    {descr}
                </div>
            </motion.div >
            {isOdd
                ?
                <>
                    <div className=""></div>
                    <div className=""></div>
                </>
                :
                ''

            }
        </>
    )
})