'use client'
import React, { memo, useState } from 'react'
import Button from './buttonMain'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import CodeTag from './codeTag'
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default memo(function Header() {

    const [open, setOpen] = useState<boolean>(false)



    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .25 }}
            className={`header fixed h-[100px] px-5 will-change pt-5 z-10 w-full
            ${open ? 'active' : ''} max-sm:px-0 max-sm:pt-0`}>
            <div
                className="header__wrapper bg-[rgba(255,255,255,.025)] backdrop-blur-xs flex h-full gap-5 justify-between items-center 
                 rounded-[100px] px-5 py-2.5 duration-300
                 max-sm:rounded-[0px_0px_50px_50px]
                 "
            >
                <Link href={'/'} className="bungee max-sm:text-xl text-blue-500 text-3xl">
                    <CodeTag color='text-white'>dev</CodeTag>
                </Link>
                <div className="rounded-2xl flex gap-10 bg-accent text-black py-3 px-10
                max-lg:hidden">
                    {siteConfig.nav.map((item) => {
                        return <Link key={item.title} href={item.link} className="">
                            <CodeTag>
                                <span className='text-blue-500 font-medium'>{item.title}</span>
                            </CodeTag>
                        </Link>
                    })}
                </div>
                <div className="max-lg:flex max-lg:gap-5 max-lg:items-center">
                    <div className="flex flex-col">
                        <Button size='lg' className='px-10 !rounded-[100px] max-sm:text-[14px] max-sm:!px-3'>
                            <span className='max-sm:hidden'>
                                Связаться
                            </span>
                            <PhoneCall className='hidden max-sm:block' />
                        </Button>
                    </div>
                    <Button onClick={() => setOpen(prev => !prev)}
                        className='gap-y-1 max-lg:grid hidden' variant='ghost'>
                        <span className='block w-6 h-[3px] bg-white'></span>
                        <span className='block w-6 h-[3px] bg-white'></span>
                        <span className='block w-6 h-[3px] bg-white'></span>
                    </Button>
                </div>
                <div className="menu-mobile">
                    <div className="rounded-2xl flex flex-col gap-10 text-black py-3 px-10">
                        {siteConfig.nav.map((item) => {
                            return <Link key={item.title} href={item.link} className="">
                                <CodeTag>
                                    <span className='text-blue-500 font-medium'>{item.title}</span>
                                </CodeTag>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
})