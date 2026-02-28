'use client'

import { AnimatePresence, motion } from "framer-motion"
import { memo } from "react"
import { BiLogoTypescript } from "react-icons/bi"
import { DiGit, DiHtml5, DiJavascript1, DiReact } from "react-icons/di"
import { RiCss3Line, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import Silk from '@/components/Silk'
import Button from "./button"
import Magnet from "@/components/Magnet"
import { useScrollTo } from "../hooks/ScrollTo"

const stackItems = 'flex gap-2 items-center'
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 1 }
    }
} as const;

const iconsVariants = {
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
    hidden: { y: 50, opacity: 0 }
} as const;

export default memo(function Hero() {

    const scrollTo = useScrollTo();

    return (
        <div className="relative h-screen">
            <AnimatePresence mode="popLayout">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                    className="absolute top left w-full h-full z-0">
                    <Silk
                        speed={3}
                        color="5227ff"

                    />
                </motion.div>
            </AnimatePresence>
            <div className="container flex-col flex items-center h-full justify-center relative z-1">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <motion.div
                        initial={{ x: -25, y: 60, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: .5, y: { delay: 1, duration: .3 }, opacity: { duration: .5 } }}
                        className="bungee text-7xl text-right">{'<Frontend'}</motion.div>
                    <motion.div
                        className={stackItems}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        <motion.div variants={iconsVariants} transition={{ delay: .5 }}>
                            <DiReact size={100} className="text-blue-400" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <RiNextjsLine size={100} className="" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <DiJavascript1 size={100} className="text-yellow-300" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <RiTailwindCssFill size={100} className="text-blue-500" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={`${stackItems} justify-end`}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        <motion.div variants={iconsVariants}>
                            <RiCss3Line size={100} className="text-blue-400" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <DiGit size={100} className="text-orange-400" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <BiLogoTypescript size={100} className="text-blue-500" />
                        </motion.div>

                        <motion.div variants={iconsVariants}>
                            <DiHtml5 size={100} className="text-orange-500" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 25, y: -60, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: .5, y: { delay: 1, duration: .3 }, opacity: { duration: .5 } }}
                        className="bungee text-7xl">{'Developer/>'}</motion.div>
                </div >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 1.5 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center font-medium text-xl">Создаю уникальные интерфейсы </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 1.6 }}
                    viewport={{ once: true }}
                    className="col-span-3 mt-10 flex gap-20">
                    <Magnet padding={25}>
                        <Button variant="shadow" size="lg">
                            Заказать проект
                        </Button>
                    </Magnet>
                    <Button
                        onClick={() => {
                            scrollTo("#works");
                        }}
                        className="backdrop-blur-xs border border-primary" variant="arrow" size="lg">
                        Портфолио
                    </Button>
                </motion.div>
            </div>
            <div className="absolute -bottom-[50px] h-[100px] w-full z-1 bg-rgba(255,255,255,.1) backdrop-blur-[3px]"></div>
        </div >
    )
})