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
    forWho: {
        name: string,
        text: string
    }[];
    benefits: {
        name: string,
        text: string,
    }[];
    process: {
        name: string,
        text: string,
    }[];
    faq: {
        q: string;
        a: string;
    }[];
    result: {
        name: string,
        text: string,
    }[];
}
