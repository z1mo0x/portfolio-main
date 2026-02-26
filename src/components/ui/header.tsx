'use client'
import React, { memo } from 'react'
import Button from './button'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import CodeTag from './codeTag'
import { motion } from 'framer-motion'



export default memo(function Header() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1.5 }}
            className="header fixed h-[100px] px-5 pt-5 z-10 w-full">
            <div
                className="header__wrapper bg-[rgba(255,255,255,.025)] backdrop-blur-xs flex h-full gap-5 justify-between items-center 
                 rounded-[100px] px-5 py-2.5"
            >
                <Link href={'/'} className="bungee text-blue-500 text-3xl">
                    <CodeTag color='text-white'>dev</CodeTag>
                </Link>
                <div className="rounded-2xl flex gap-10 bg-accent text-black py-3 px-10">
                    {siteConfig.nav.map((item) => {
                        return <Link key={item.title} href={item.link} className="">
                            <CodeTag>
                                <span className='text-blue-500 font-medium'>{item.title}</span>
                            </CodeTag>
                        </Link>
                    })}
                </div>
                <div className="flex flex-col">
                    <Button size='lg' className='px-10 !rounded-[100px]'>Связаться</Button>
                </div>
            </div>
        </motion.div>
    )
})