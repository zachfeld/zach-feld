import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Blog() {


  
  // 1) Set blog directory
  const blogDirectory = "blogs"

  // 2) find all files in blog directory
  const files = fs.readdirSync(path.join(blogDirectory))

  // 3) loop through blogs
  const blogs = files.map(filename => {
    // 4) read content of blog
    const blogContent = fs.readFileSync(path.join(blogDirectory, filename), 'utf-8')

    // 5) extract metadata from blog content
    const { data: frontMatter } = matter(blogContent)

    // 6) return metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  return (
    <main>
      <h1 className='text-3xl font-bold'>
        Blog
      </h1>

        <div className='py-2'>
          {blogs.map(blog => (
            <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
              <div className='py-2 flex justify-between align-middle gap-4 overflow-scroll'>
                  <div className='basis-[70%]'>
                      <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                      <p className="text-gray-400">{blog.meta.description}</p>
                  </div>
                  <div className="my-auto text-gray-400 text-right basis-[30%]">
                      <p>{blog.meta.date}</p>
                  </div>
              </div>
            </Link>
          ))}
        </div>
    </main>
  );
}
