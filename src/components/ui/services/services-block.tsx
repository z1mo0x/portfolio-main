"use client"

import Title from '@/components/common/title'
import React, { memo } from 'react'
import ServicesItem from './services-item'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default memo(function ServicesBlock() {
    return (
        <div className="mt-20 py-10 bg-foreground rounded-xl">
            <div className="container">
                <Title className='text-secondary'>Мои услуги</Title>
                <Swiper className='mt-10' slidesPerView={4} spaceBetween={30}>
                    <SwiperSlide>
                        <ServicesItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
})