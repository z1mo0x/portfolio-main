export type ServicesInfo = {
    name: string,
    checked: boolean
}

export interface ServicesProps {
    index?: number,
    title: string,
    descr: string,
    price: number,
    info: ServicesInfo[],
    onCardClick?: (() => void) | undefined,
    detail_link?: string
}
export interface ServicesPropsDetail extends ServicesProps {
    page_id: string;
    intro: string;
    forWho: string[];
    benefits: string[];
    process: string[];
    faq: {
        q: string;
        a: string;
    }[];
    result: string[];
}
