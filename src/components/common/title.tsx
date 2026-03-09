"use client"

import { motion } from 'framer-motion';
import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

export default function Title({ children, className }: Props) {
    return (
        <motion.h2
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold ${className}`}>{children}</motion.h2>
    )
}