import Title from '@/components/common/title'
import React, { memo } from 'react'
import AboutItem from './about-item'
import { siteConfig } from '@/config/siteConfig'

export default memo(function AboutBlock() {

    return (
        <div className="min-h-screen pt-30">
            <div className="container">
                <Title>Обо мне</Title>
                <div className="about-section">
                    <div className="absolute w-[3px] z-0 left-1/2 h-full bg-primary">
                        <div className="w-[3px]  absolute left-0 top-0 h-full bg-primary blur-xs"></div>
                        <div className="w-[5px] absolute
                         left-0 top-0 -ml-[1px] h-full bg-primary blur-md"></div>
                        <div className="w-[10px] absolute
                         left-0 top-0 -ml-[4.5px] h-full bg-primary blur-xl"></div>
                    </div>
                    {siteConfig.about.map((item, index) => {
                        return <AboutItem
                            key={item.title + index}
                            index={index}
                            title={item.title}
                            descr={item.descr}
                            year={item.year}
                            workName={item.workName}
                        />
                    })}
                </div>
            </div>
        </div>
    )
})