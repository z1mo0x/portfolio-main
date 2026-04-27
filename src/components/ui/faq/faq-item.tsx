'use client'

import { ServicesPropsDetail } from '@/types/services';
import React, { memo, useState } from 'react'


const FaqItem = memo(({ q, a, index }: ServicesPropsDetail['faq'][0] & { index: number }) => {

    const colors = [
        'shadow-chart-1/50',
        'shadow-chart-3/50',
        'shadow-chart-2/50',
        'shadow-chart-4/50',
        'shadow-chart-5/50',
    ]

    const colorsText = [
        'text-chart-1',
        'text-chart-3',
        'text-chart-2',
        'text-chart-4',
        'text-chart-5',
    ]

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`grid grid-cols-[200px_1fr] shadow-[0px_0px_2px] ${colors[index]} border rounded-lg border-border`}>
            <div className={`p-5 border-r-1 border-border`}>
                <div className={`${colorsText[index]} text-lg`}>0{index + 1}</div>
                <div className="text-xs text-white/25">error</div>
                <div className="text-xs text-white/50 mt-5">
                    {`faq.question[{${index}}]`}
                </div>
            </div>
            <div className="p-5">
                <div className="cursor-pointer" onClick={() => setOpen(prev => !prev)}>
                    <div className="text-2xl"><span className='text-blue-500'>{"//"}</span> {q}</div>
                </div>
                <div className="h-0 overflow-hidden">
                    <div className=""></div>
                    <div className="">{'> '}{a}</div>
                </div>
            </div>
        </div >
    )
})

FaqItem.displayName = "FaqItem";

export default FaqItem;