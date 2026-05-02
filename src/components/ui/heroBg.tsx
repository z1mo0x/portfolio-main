import React, { useEffect, useState } from 'react'
import Silk from '../Silk';
import { AnimatePresence, motion } from 'framer-motion';
const HeroBg = () => {


    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 500)
    }, [])

    return (
        <AnimatePresence mode='popLayout'>
            {mounted ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top left w-full h-full z-0"
                >
                    <Silk speed={3} color="5227ff" />
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}

export default HeroBg;
