import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import React from 'react'

type Props = {
    name: string,
    text: string,
    created_at: string,
}

export default function ReviewsItem({ name, text, created_at }: Props) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{}}
            className='review-item relative border-accent border rounded-lg h-full'>
            <div className="absolute right-0 bottom-0 gap-5 text-xs text-primary/75 bg-primary/20 px-2 py-1 rounded-br-lg rounded-tl-xl">{created_at}</div>
            <div className="review-name duration-300 absolute border-accent/75 rounded-bl-[0] border backdrop-blur-xl -top-[20px] -left-[1px] rounded-xl font-bold px-4 py-2 flex gap-2 items-center">
                <User /> {name}
            </div>
            <div className="p-5 pb-7 text-gray-300 mt-5">
                {text}
            </div>
        </motion.div>
    )
}