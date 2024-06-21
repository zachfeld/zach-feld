// mdx configuration
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import '@/styles/highlight-js/github-dark.css'

// mdx components
import Button from '@/components/mdx/Button'
import CustomLink from '@/components/mdx/CustomLink'
import YouTube from '@/components/mdx/YouTube'

import { blogPosts } from '../blogs_gen'
import { notFound } from 'next/navigation'

export const runtime = 'edge'

const components = {
    Button,
    CustomLink,
    YouTube,
}

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
    }
}

export async function generateStaticParams() {
    const paths = blogPosts.map((b) => b.slug )
    
    return paths
}

export async function generateMetadata({ params }: any) {
    const blog = getPost(params)

    if (!blog) {
        notFound()
    }

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}

function getPost({slug}:{slug: string}) {
    return blogPosts.find((b) => b.slug === slug)
}

export default function Post({ params }: any) {
    const props = getPost(params)

    if (!props) {
        notFound()
    }

    return (
    <div className='flex justify-center py-12'>
        <div className='bg-slate-900 max-w-[98%] mx-auto py-12 px-10 shadow-2xl max-h-[92%] rounded-lg fixed overflow-scroll'>
            <article className='prose prose-md md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
                <h1>
                    {props.frontMatter.title}
                </h1>

                <MDXRemote 
                    source={props.content} 
                    components={components}
                    options={options}
                />
            </article>
        </div>
    </div>
    )
}
