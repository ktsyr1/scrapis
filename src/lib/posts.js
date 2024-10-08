import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


// export const getPostData = id => {
//     const fullPath = path.join(postsDirectory, `${id}.mdx`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Use mdx to convert MDX into a React component
//     const content = mdx(matterResult.content, {
//         hastPlugins: [],
//         rehypePlugins: []
//     })

//     // Combine the data with the id and content
//     return {
//         id,
//         content,
//         ...matterResult.data
//     }
// }
const postsDirectory = path.join(process.cwd(), 'data/dev')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    // let filter = fileNames .filter 
    let allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        if (!matterResult.data?.edit) {
            return {
                id,
                ...matterResult.data
            }
        } else return
    })
    allPostsData = allPostsData.filter(post => typeof post === "object")

    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) return 1
        else if (a > b) return -1
        else return 0
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    
    const contentHtml = processedContent.toString()

    return { id, contentHtml, ...matterResult.data }
}
