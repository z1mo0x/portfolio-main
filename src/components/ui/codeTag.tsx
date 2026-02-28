import { memo } from "react"

type Props = {
    children: React.ReactNode,
    color?: string
}


export default memo(function CodeTag({ children, color }: Props) {
    const spanStyle = color ?? 'text-gray-600'

    return (
        <>
            <span className={`${spanStyle}`}>{'<'}</span>
            <span className="px-0.5">
                {children}
            </span>
            <span className={`${spanStyle}`}>{'/>'}</span>
        </>
    )
})