import { BlogPost, Meta } from "@/types"
import { compileMDX } from 'next-mdx-remote/rsc'
import { isConstructorDeclaration } from "typescript"
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import Video from "@/app/components/article/Video"
import CustomImage from "@/app/components/article/CustomImage"

type Filetree = {
    "tree": [
        {
            "path": string
        }
    ]
}

export async function getArticleByName(filename: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/VittorioMorellini/articles/main/${filename}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    }) 

    if (!res.ok) return undefined

    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            },
        }
    })

    const id = filename.replace(/\.mdx$/, '')
    const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }

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
    //console.log('res is not undefined')
    const repoFileTree: Filetree = await res.json()
    console.log('FILE tree repo', JSON.stringify(repoFileTree))
    const filesArray = repoFileTree.tree.map(obj => obj.path).filter((path: string) => path.endsWith('.mdx'))
    //console.log({filesArray})

    const posts: Meta[] = []
    for (const file of filesArray) {
        //console.log('File name in loop', file)
        const article = await getArticleByName(file)
        console.log({article})
        if (article) {
            const {meta, content} = article
            //console.log('meta in loop list: ', meta)
            posts.push(meta)
        }
    }
    //console.log({posts})
    return posts.sort((a,b) => a.date < b.date ? 1 : -1)
}

  