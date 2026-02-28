"use client"

import Title from '@/components/common/title'
import React, { memo } from 'react'
import ServicesItem from './services-item'
import { siteConfig } from '@/config/siteConfig';

export default memo(function ServicesBlock() {
    return (
        <div className="mt-20 py-10 rounded-xl">
            <div className="container">
                <Title className=''>Мои услуги</Title>
                <div className="mt-15 grid grid-cols-4 gap-5">
                    {siteConfig.services.map((service, index) => {
                        return (
                            <ServicesItem key={service.title + index}
                                title={service.title}
                                descr={service.descr}
                                price={service.price}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>
        </div >
    )
})