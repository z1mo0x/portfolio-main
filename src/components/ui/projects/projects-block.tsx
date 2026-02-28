import Title from '@/components/common/title'
import React from 'react'
import { ProjectItem } from './project-item'

export default function ProjectsBlock() {
    return (
        <div className="pt-30" id='works'>
            <div className="container">
                <Title>Мои работы</Title>
                <div className='grid gap-5 mt-15'>
                    <ProjectItem />
                </div>
            </div>
        </div>
    )
}