import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

export default function Title({ children, className }: Props) {
    return (
        <div className={`text-4xl font-bold ${className}`}>{children}</div>
    )
}