import React from 'react'
import Button from '../button'
import CodeTag from '../codeTag'

type Props = {}

export default function ServicesItem({ }: Props) {
    return (
        <div className="border border-accent rounded-xl overflow-hidden">
            <div className="">

            </div>
            <div className="font-bold text-center text-xl bg-accent px-5 py-2.5">
                <CodeTag color='text-ring'>
                    Landing Page
                </CodeTag>
            </div>
            <div className="flex flex-col items-center p-5 text-secondary">
                <div className="mt-2.5">Красиво, быстро и надежно</div>
                <div className="mt-5">
                    от
                    <span className='font-medium text-lg px-2 py-1 text-foreground mx-1 bg-primary rounded-xl'> 30 000 </span>
                    руб.
                </div>
                <Button className='mt-5 text-foreground' size='lg'>Заказать</Button>
            </div>
        </div>
    )
}