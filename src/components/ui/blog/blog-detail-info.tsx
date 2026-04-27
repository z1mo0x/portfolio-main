'use client';
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'

type Props = {
    html: string;
}

const BlogDetailInfo = ({ html }: Props) => {

    const cleanHTML = DOMPurify.sanitize(html);

    return (
        <div className="" dangerouslySetInnerHTML={{ __html: cleanHTML }}></div>
    )
}

export default BlogDetailInfo;