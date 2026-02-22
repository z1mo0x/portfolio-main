import Title from '@/components/common/title'
import React, { memo } from 'react'
import AboutItem from './about-item'

export default memo(function AboutBlock() {

    return (
        <div className="min-h-screen pt-30">
            <div className="container">
                <Title>Обо мне</Title>
                <div className="about-section">
                    <div className="absolute w-[3px] left-1/2 h-full bg-red-500"></div>
                    <AboutItem index={1} />
                    <AboutItem index={2} />
                    <AboutItem index={3} />
                    <AboutItem index={4} />
                </div>
            </div>
        </div>
    )
})