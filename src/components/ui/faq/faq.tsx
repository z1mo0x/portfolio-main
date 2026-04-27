'use client'

import Title from '@/components/common/title';
import { ServicesPropsDetail } from '@/types/services';
import React, { memo } from 'react'
import PrismCode from '@/components/common/prism-code';
import FaqItem from './faq-item';


const FaqBlock = memo(({ faq }: Pick<ServicesPropsDetail, 'faq'>) => {

  return (
    <div className="mt-30">
      <div className="container">
        <PrismCode transparent={true}>
          {'<FAQ items={service.faq}/>'}
        </PrismCode>
        <Title className='mt-2.5'>Часто задаваемые вопросы</Title>
        <div className="mt-5 grid gap-5">
          {faq.map((item, index) => {
            return <FaqItem key={item.q + index} index={index} q={item.q} a={item.a} />
          })}
        </div>
      </div>
    </div>
  )
})

FaqBlock.displayName = "FaqBlock";

export default FaqBlock;