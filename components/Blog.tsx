import { blogPosts } from '@/app/blogs/blogs_gen'

import Link from 'next/link'

export default function Blog() {

  // if there are no blogs don't render any details
  if (!blogPosts.length) {
    return null
  }

  return (

    <div className="bg-slate-900 max-w-[98%] mx-auto py-2 px-5 shadow-2xl max-h-[83%] opacity-85 rounded-lg fixed overflow-scroll">
      <div className='mx-auto'>
        < br />
        <h1 className='text-3xl font-bold'>
          Blog
        </h1>

          <div className='py-2'>
            {blogPosts.map(blog => (
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                <div className='py-2 flex justify-between align-middle gap-4 overflow-scroll'>
                    <div className='basis-[70%]'>
                        <h3 className="text-lg font-bold">{blog.frontMatter.title}</h3>
                        <p className="text-gray-400">{blog.frontMatter.description}</p>
                    </div>
                    <div className="my-auto text-gray-400 text-right basis-[30%]">
                        <p>{blog.frontMatter.date}</p>
                    </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
}
