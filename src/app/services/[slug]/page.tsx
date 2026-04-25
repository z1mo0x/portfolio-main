import { siteConfig } from '@/config/siteConfig'
import { ServicesPropsDetail } from '@/types/services';
import React from 'react'
import ServiceHero from '@/components/ui/services/detail/service-hero';
import Title from '@/components/common/title';
import ForWhoDetail from '@/components/ui/services/detail/for-who';


export async function generateStaticParams() {
    return siteConfig.services.map((service) => ({
        id: service.page_id.toString(),
    }))
}


const ServiceDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params

    const current: ServicesPropsDetail | undefined = siteConfig.services.find(
        (item) => item.page_id.toString() === slug
    )

    return (
        <div className="">
            <ServiceHero
                title={current?.title ?? 'Название не получено.'}
                descr={current?.descr ?? 'Описание не получено.'}
                info={current?.info ?? []}
            />
            <div className="container">
                <div className="pt-20">
                    <Title>Для кого</Title>
                    <ForWhoDetail forWho={current?.forWho ?? []} />
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail