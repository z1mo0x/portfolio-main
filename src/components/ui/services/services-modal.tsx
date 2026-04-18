"use client"

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../dialog'
import { ServicesProps } from '@/types/services'
import Button from '../buttonMain'
import CodeTag from '../codeTag'
import { motion } from 'framer-motion'

type ServicesModal = {
    open: boolean,
}


const ServicesModal = ({ title, info, open, onOpenChange }:
    ServicesProps & { open: boolean; onOpenChange?: (open: boolean) => void }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='p-0 bg-transparent border-none' showCloseButton={false}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ duration: .5 }}
                >
                    <DialogTitle className='relative top-2 px-5 py-4 bg-accent rounded-lg text-2xl'>
                        <CodeTag color='text-ring'>
                            {title}
                        </CodeTag>
                    </DialogTitle>
                    <div className="p-5 bg-background pt-6 pb-7.5">
                        <p>В данную услугу входит:</p>
                        <ul className='list'>
                            {info.map((item, index) => {
                                return <li key={item.name + index}>{item.name}</li>
                            })}
                        </ul>
                    </div>
                    <DialogFooter className='bg-background p-7.5 pt-0 rounded-b-lg'>
                        <Button variant='outline'>Заказать {title.toLocaleLowerCase()}</Button>
                    </DialogFooter>
                    <DialogClose asChild >
                        <div className=' absolute cursor-pointer font-bold text-xl flex items-center justify-center -top-3 -right-5 bg-accent rounded-[50%] w-10 h-10'>
                            ⨉
                        </div>
                    </DialogClose>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}

export default ServicesModal