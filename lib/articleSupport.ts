import { BlogPost, Meta } from "@/types"
import { compileMDX } from 'next-mdx-remote/rsc'

type Filetree = {
    "tree": [
        {
            "path": string
        }
    ]
}

export async function getArticleByName(filename: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/vittoriomorellini/articles/main/${filename}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    }) 

    if (!res.ok) return undefined

    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[]}>({ source: rawMDX })
    const id = filename.replace(/\.mdx$/, '')
    const blogPostObj: BlogPost = {meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }
    
    return blogPostObj
}

export async function getArticlesMeta(): Promise<Meta[] | undefined> {
    //const res = await fetch('https://api.github.com/repos/gitdagray/test-blogposts/git/trees/main?recursive=1', {
    //const res = await fetch('https://api.github.com/repos/VittorioMorellini/articles/git/trees/main?recursive=1', {
    const res = await fetch('https://api.github.com/repos/VittorioMorellini/articles/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
        cache: 'no-store'
    }) 

    console.log('load mdx from github', res)
    if (!res.ok) return undefined

    const repoFileTree: Filetree = await res.json()
    const filesArray = repoFileTree.tree.map(obj => obj.path).filter((path: string) => path.endsWith('.mdx'))

    const posts: Meta[] = []
    for (const file of filesArray) {
        const post = await getArticleByName(file)
        if (post) {
            const {meta} = post
            posts.push(meta)
        }
    }
    return posts.sort((a,b) => a.date < b.date ? 1 : -1)
}

  