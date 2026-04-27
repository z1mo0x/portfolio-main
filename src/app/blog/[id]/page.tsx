import BlogDetailInfo from '@/components/ui/blog/blog-detail-info';
import { siteConfig } from '@/config/siteConfig'
import { Metadata } from 'next';

export async function generateStaticParams() {
    return siteConfig.blog.map((post) => ({
        id: post.id.toString(),
    }))
}


export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params;
    const current = siteConfig.blog.find((item) => item.id === Number(id));

    if (!current) {
        return {
            title: 'Пост не найден',
            description: 'Запрашиваемая статья не существует.',
            robots: {
                index: false,
                follow: false,
            },
        };
    }


    return {
        title: `${current.title} | ${siteConfig.main.branding}`,
        description: current.descr,
        creator: 'Андрей',
        publisher: 'Андрей',
        alternates: {
            canonical: `/blog/${current.id}`,
        },
        openGraph: {
            title: current.title,
            description: current.descr,
            url: `/blog/${current.id}`,
            siteName: 'Андрей — Frontend Developer',
            type: 'article',
            locale: 'ru_RU',
            images: [
                {
                    url: current.image || '/og-blog.jpg',
                    width: 1200,
                    height: 630,
                    alt: current.title,
                },
            ],
            publishedTime: current.created_at,
        },
        twitter: {
            card: 'summary_large_image',
            title: current.title,
            description: current.descr,
            images: [current.image || '/og-blog.jpg'],
        },
    }
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
                        {/* <Image
                            width={500}
                            height={300}
                            src={current ? current.image : ''}
                            alt={current ? current.title : 'Картинка'}
                        /> */}
                    </div>
                </div>
                <div className="blog-detail">
                    <div className="language-jsx">
                        <BlogDetailInfo html={current.detail_info} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;