import Title from '@/components/common/title'
import React, { memo } from 'react'
import AboutItem from './skills-item'
import { siteConfig } from '@/config/siteConfig'

export default memo(function Skills() {
    return (
        <div className="pt-30">
            <div className="container h-full">
                <Title>Навыки и Технологии</Title>
                <div className="grid grid-cols-5 mt-10 gap-5">
                    {siteConfig.skills.map((skill, index) => {
                        return <AboutItem key={skill.title + index} index={index} icon={skill.icon} title={skill.title} progress={skill.progress} />
                    })}
                </div>
                {/* <div className="p-2.5 mt-10 text-xl text-center bg-accent rounded-xl">В этом блоке расписано все, что я умею, какими навыками обладаю, чтобы вы сразу понял, что от меня ожидать!</div> */}
            </div>
        </div>
    )
})