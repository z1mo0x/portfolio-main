import Title from '@/components/common/title'
import React from 'react'
import { ProjectItem } from './project-item'
import { ProjectBig } from './project-big'

export default function ProjectsBlock() {
    return (
        <div className="pt-30" id='works'>
            <div className="container">
                <Title>Мои работы</Title>
                <div className='grid gap-5 mt-15'>
                    <ProjectBig />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    )
}