import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Title({ children }: Props) {
    return (
        <div className='text-4xl font-bold'>{children}</div>
    )
}