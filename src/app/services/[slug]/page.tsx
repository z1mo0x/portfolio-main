import { siteConfig } from '@/config/siteConfig'
import React from 'react'
import ServiceHero from '@/components/ui/services/detail/service-hero';
import ForWhoDetail from '@/components/ui/services/detail/for-who';
import ServicesAdvantages from '@/components/ui/services/detail/services-adv';
import ServicesStages from '@/components/ui/services/detail/stages';
import ServicesResult from '@/components/ui/services/detail/result';
import FaqBlock from '@/components/ui/faq/faq';


export async function generateStaticParams() {
    return siteConfig.services.map((service) => ({
        id: service.page_id.toString(),
    }))
}


const ServiceDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;

    const current = siteConfig.services.find(
        (item) => item.page_id.toString() === slug
    );


    return (
        <div className="">
            <ServiceHero
                title={current?.title ?? 'Название не получено.'}
                descr={current?.descr ?? 'Описание не получено.'}
                info={current?.info ?? []}
            />

            {current?.forWho && <ForWhoDetail forWho={current.forWho} />}
            {current?.benefits && <ServicesAdvantages benefits={current.benefits} />}
            {current?.process && <ServicesStages process={current.process} />}
            {current?.result && <ServicesResult result={current.result} />}
            {current?.faq && <FaqBlock faq={current.faq} />}
        </div>
    )
}
ServiceDetail.displayName = "ServiceDetail";

export default ServiceDetail