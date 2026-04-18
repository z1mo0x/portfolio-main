import { siteConfig } from '@/config/siteConfig'
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';

export async function generateStaticParams() {
    return siteConfig.blog.map((post) => ({
        page: post.id.toString(),
    }))
}

async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const current = siteConfig.blog.find((item) => item.id === Number(id));

    if (!current) return <div>Пост #{id} не найден!</div>

    const clearDate = Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(current ? current.created_at : "01.01.0000"))

    const cleanHTML = DOMPurify.sanitize(current.detail_info);

    return (
        <div className='pt-30'>
            <div className="container">
                <div className="mt-15">
                    <div className="">
                        <h1 className="font-bold text-4xl">
                            {current?.title}
                        </h1>
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="mt-5">
                            {clearDate}
                        </div>
                        <Image
                            width={500}
                            height={300}
                            src={current ? current.image : ''}
                            alt={current ? current.title : 'Картинка'}
                        />
                    </div>
                </div>
                <div className="blog-detail">

                    <div className="language-jsx">
                        <div className="" dangerouslySetInnerHTML={{ __html: cleanHTML }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;