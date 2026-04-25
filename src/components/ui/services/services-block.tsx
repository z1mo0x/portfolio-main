"use client"

import Title from '@/components/common/title'
import React, { memo, useState } from 'react'
import ServicesItem from './services-item'
import { siteConfig } from '@/config/siteConfig';
import { ServicesProps } from '@/types/services';
import ServicesModal from './services-modal';
import { AnimatePresence } from 'framer-motion';

export default memo(function ServicesBlock() {

    const [selectedService, setSelectedService] = useState<ServicesProps | null>(null)

    return (
        <>
            <div className="pt-30 py-10 rounded-xl">
                <div className="container">
                    <Title className=''>Мои услуги</Title>
                    <div className="mt-15 grid grid-cols-4 gap-5">
                        {siteConfig.services.map((service, index) => {
                            return (
                                <ServicesItem key={service.title + index}
                                    title={service.title}
                                    descr={service.descr}
                                    info={service.info}
                                    price={service.price}
                                    index={index}
                                    detail_link={service.page_id}
                                    onCardClick={() => setSelectedService(
                                        {
                                            title: service.title,
                                            descr: service.descr,
                                            price: service.price,
                                            info: service.info,
                                            detail_link: service.page_id,
                                        }
                                    )}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            {selectedService && (
                <AnimatePresence mode='wait'>
                    <ServicesModal
                        title={selectedService.title}
                        descr={selectedService.descr}
                        info={selectedService.info}
                        open={!!selectedService}
                        price={selectedService.price}
                        onOpenChange={(open: boolean) => {
                            if (!open) setSelectedService(null)  // закрываем только при false
                        }}
                    />
                </AnimatePresence>
            )}
        </>
    )
})