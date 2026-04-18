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
    onCardClick?: (() => void) | undefined
}
