'use client'

import Title from '@/components/common/title'
import React from 'react'
import { ProjectItem } from './project-item'
import { ProjectBig } from './project-big'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ProjectsBlock() {
    return (
        <div className="pt-30" id='works'>
            <div className="container">
                <Title>Мои работы</Title>
                <div className='grid gap-5 mt-15'>
                    <ProjectBig />
                </div>
                <div className="mt-5 gap-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2
                            },
                            768: {
                                slidesPerView: 2.2
                            },
                            1200: {
                                slidesPerView: 3
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ProjectItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}