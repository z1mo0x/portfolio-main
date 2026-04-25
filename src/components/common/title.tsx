"use client"

import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    lvl?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title({ children, className, lvl = 2 }: Props) {

    const MotionTag = motion[`h${lvl}`] as React.ComponentType<HTMLMotionProps<'h1'>>

    return (
        <MotionTag
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold ${className}`}>
            {children}
        </MotionTag>
    )
}