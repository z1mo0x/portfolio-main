"use client"

import React, { useCallback, useRef } from 'react'
import ReviewsItem from './reviews-item'
import Title from '@/components/common/title'
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react"
import 'swiper/css';
import { siteConfig } from '@/config/siteConfig'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const arrowStyle = "bg-primary/75 p-2.5 rounded-md cursor-pointer"

export default function ReviewsBlock() {

    const refSlider = useRef<SwiperRef>(null)

    const handleNext = useCallback(() => {
        refSlider.current?.swiper?.slideNext()
    }, [])

    const handlePrev = useCallback(() => {
        refSlider.current?.swiper?.slidePrev()
    }, [])


    return (
        <div className='pt-30'>
            <div className="container">
                <div className="flex items-center justify-between gap-5">
                    <Title>Отзывы моих клиентов</Title>
                    <div className="flex gap-5 items-center">
                        <div className={`${arrowStyle}`} onClick={handlePrev}><ArrowLeft /></div>
                        <div className={`${arrowStyle}`} onClick={handleNext}><ArrowRight /></div>
                    </div>
                </div>
                <Swiper ref={refSlider}
                    slidesPerView={4} spaceBetween={20} className='m-12.5 !py-5'>
                    {siteConfig.reviews.map((item, index) => {
                        return (
                            <SwiperSlide key={item.name + item.created_at + index} className='h-auto!'>
                                <ReviewsItem name={item.name} text={item.text} created_at={item.created_at} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div >
    )
}