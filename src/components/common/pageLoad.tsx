"use client"

import React, { memo, useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

export default memo(function PageLoad() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingBar, setLoadingBar] = useState(false);
    const progress = useMotionValue(0)
    const progressValue = useTransform(() => Math.round(progress.get()))

    useEffect(() => {

        const isReload = 'performance' in window && (window.performance as Performance).navigation?.type === 1;
        const sessionKey = 'pageLoadShown';
        const shownInSession = sessionStorage.getItem(sessionKey);

        // if (isReload || shownInSession) {
        //     setIsLoaded(true);
        //     return;
        // }

        sessionStorage.setItem(sessionKey, 'true');

        const controls = animate(progress, 100, { duration: 1 })

        const timer = setTimeout(() => {
            setLoadingBar(true)
        }, 1000)

        const timer2 = setTimeout(() => {
            setIsLoaded(true)
        }, 1500)

        return () => {
            controls.stop()
            clearTimeout(timer)
            clearTimeout(timer2)
        }
    }, [])

    return (
        isLoaded ? null
            :
            <>
                <div className="fixed w-full h-full grid grid-cols-8 z-100">

                    {Array.from({ length: 8 }).map((item, index) => {
                        return (
                            <motion.div
                                initial={{ scaleY: 1 }}
                                whileInView={{ scaleY: 0 }}
                                transition={{ duration: .3, delay: 1 + (.03 * index) }}
                                key={index} className={`bg-background origin-top`}>
                            </motion.div>
                        )
                    })}
                    {
                        loadingBar
                            ?
                            null
                            :
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-5">
                                <div className="w-[500px] h-[20px] bg-gray-700 rounded-lg">
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: `100%` }}
                                        transition={{ duration: 1 }}
                                        className='bg-primary h-full drop-shadow-[0px_0px_10px] drop-shadow-primary/50 rounded-lg'>
                                    </motion.div>
                                </div>
                                <div className="w-[50px] items-center flex gap-1">
                                    <motion.div className="font-bold">{progressValue}</motion.div>
                                    <div className="">%</div>
                                </div>
                            </div>
                    }
                </div >
            </>
    )
})