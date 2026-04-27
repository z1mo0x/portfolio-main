'use client';

import Title from '@/components/common/title';
import { ServicesPropsDetail } from '@/types/services';
import CodeTag from '../../codeTag';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServicesStages = ({ process }: Pick<ServicesPropsDetail, 'process'>) => {

    const [showStack, setShowStack] = useState(true);
    useEffect(() => {
        const onScroll = () => {
            const { scrollY } = window;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            const scrollEnd = documentHeight - windowHeight;

            if (scrollY > scrollEnd * .9) {
                setShowStack(false);
            } else {
                setShowStack(true);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <>
            <div id='stages' className="relative min-h-screen mt-30"
                style={{ scrollbarWidth: 'none' }}>
                <div className="container">
                    <Title>Как я работаю</Title>
                    <div className={`mt-15 grid gap-y-40 h-full duration-300`}>
                        <AnimatePresence>
                            {process.map((item, index) => {
                                const top = 20 + 3 * index;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, scale: .8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: .5 }}
                                        viewport={{ margin: "0% 0% -25% 0%" }}
                                        key={index}
                                        className={`sticky rounded-2xl bg-accent border border-border  p-8 shadow-lg `}
                                        style={{ top: `${top}%` }}
                                    >
                                        <div className="text-5xl mt-2.5 font-black text-blue-500">
                                            [0{index + 1}]
                                        </div>

                                        <h2 className="text-3xl font-semibold text-white mt-4 mb-3">
                                            <CodeTag color="text-blue-400">
                                                {item.name}
                                            </CodeTag>
                                        </h2>

                                        <p className="text-white/90 text-base leading-relaxed mt-3">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStages;