import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function buildBlogs() {
    // gather all blog posts from directory
    const files = fs.readdirSync(path.join('blogs'))
    
    // loop through each post & extract frontmatter & content
    const blogPosts = files.map((file) => {
        const markdownFile = fs.readFileSync(path.join('blogs', file), 'utf-8')
    
        // extract slug from filename to create final path later on
        const slug = file.replace('.mdx', '')
    
        const { data: frontMatter, content } = matter(markdownFile)
    
        return {
            frontMatter,
            slug,
            content,
        }
    })
    blogPosts.sort((a, b) => {

    })
    const outputString = `export const blogPosts = ${JSON.stringify(blogPosts)}`

    fs.writeFileSync('app/blogs/blogs_gen.ts', outputString, { 'flag': 'w+' })

}

buildBlogs()
