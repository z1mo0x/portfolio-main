"use client"

import GradientText from '@/components/GradientText'
import { motion } from 'framer-motion'
import React from 'react'

const styleMain = `w-full border border-accent rounded-xl p-5 shadow-md shadow-[rgba(255,255,255,.1)] `
const left = "absolute left-[calc(100%+20px)] top-1/2 -translate-y-1/2"
const right = "absolute right-[calc(100%+20px)] top-1/2 -translate-y-1/2"
type ItemProps = {
    index: number
}

export default function AboutItem({ index }: ItemProps) {

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
                duration: .5
            }
        },
        showOdd: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5
            }
        }
    }

    return (
        <>
            <motion.div
                variants={AboutVariants}
                initial={`${isOdd ? 'hiddenOdd' : 'hiddenEven'}`}
                whileInView={`${isOdd ? 'showOdd' : 'showEven'}`}
                viewport={{ amount: .5, margin: "0% 0% -10% 0%" }}
                className={`${styleMain} relative`}>
                <div className={`${isOdd ? `${right}` : `${left}`} bungee bg-[rgba(255,255,255,.1)] p-2 rounded-lg border border-accent w-max backdrop-blur-[10px]`}>
                    {2027 - index}</div>
                <GradientText
                    colors={["#ffa873", "#2b7fff"]}
                    animationSpeed={3}
                    yoyo={false}
                    className="font-bold m-0! text-2xl">
                    Индивидуальное начало
                </GradientText>
                <div className="text-md font-thin text-gray-400">Personal work</div>
                <div className="mt-5">
                    Разработал свое портфолио и начал активно искать клиентов, для разработки
                </div>
            </motion.div >
            {!isOdd
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
}