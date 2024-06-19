import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// mdx configuration
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import '@/styles/highlight-js/github-dark.css'

// mdx components
import Button from '@/components/mdx/Button'
import CustomLink from '@/components/mdx/CustomLink'
import YouTube from '@/components/mdx/YouTube'


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
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export async function generateMetadata({ params }: any) {
    const blog = getPost(params)

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}

function getPost({slug}:{slug: string}) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({ params }: any) {
    const props = getPost(params)

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
