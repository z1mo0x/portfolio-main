'use client'

import Title from '@/components/common/title';
import { ServicesPropsDetail } from '@/types/services';
import { UsersRound } from 'lucide-react';
import React, { memo } from 'react'

const ForWhoBlock = memo(({ index, text, className }: { index: number, text: string, className: string }) => {
    return (
        <div className={`${className} items-center relative p-5 border border-border hover:border-primary/50 duration-200 rounded-lg`}>
            <div className="bg-primary/50 w-[50px] h-[50px] grid place-items-center rounded-lg bungee text-2xl text-white/75">{index + 1}</div>
            {/* <div className="absolute right-5 top-5 text-8xl text-accent"></div> */}
            <div className="mt-5">{text}</div>
        </div>
    )
})
ForWhoBlock.displayName = 'ForWhoBlock';

const ForWhoDetail = memo(({ forWho }: Pick<ServicesPropsDetail, 'forWho'>) => {

    const renderForWho = () => {
        const list = forWho;
        let rows: number = 0;
        if (list) {
            return list.map((item, index) => {
                if (index % 2 === 0) {
                    rows += 1;
                }

                if (rows % 2 !== 0) {
                    return (
                        <ForWhoBlock key={item.name + index} className={`${index % 2 === 0 ? '' : 'col-span-2'}`} text={item.text} index={index} />
                    )
                }
                else {
                    return (
                        <ForWhoBlock key={item.name + index} className={`${index % 2 !== 0 ? '' : 'col-span-2'}`} text={item.text} index={index} />
                    )
                }

            })
        }
    }


    return (
        <div className="container">
            <div className="pt-30">
                <Title>Для кого</Title>
                <div className="grid grid-cols-3 mt-10 gap-5">
                    {renderForWho()}
                </div>
            </div>
        </div>
    )
})

ForWhoDetail.displayName = 'ForWhoDetail';

export default ForWhoDetail