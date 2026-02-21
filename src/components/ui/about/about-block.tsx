import Title from '@/components/common/title'
import React, { memo } from 'react'

export default memo(function AboutBlock() {
    return (
        <div className="min-h-screen pt-30">
            <div className="container">
                <Title>Обо мне</Title>
            </div>
        </div>
    )
})