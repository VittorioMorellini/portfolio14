import { Post } from "@/models/post";
import { Meta } from "@/types/meta";
import { getBaseUrlFromEnviroment } from "@/utils/utils";

export async function getAllPosts() {
    //console.log('Sono in getAllPost e chiamo la fetch')
    const res = await fetch(getBaseUrlFromEnviroment() + '/api/post', {cache: 'no-store'});
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    const result = await res.json()
    const posts = result.results as Post[]
    //console.log({posts})
    return posts;
}

export async function getPost(id: number) {
    //console.log('Sono in getPost with id: ' + id)
    const url = getBaseUrlFromEnviroment() + `/api/post/${id}`
    //console.log({url})
    const res = await fetch(url, {cache: 'no-cache'});
    //console.log({res})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data for single post');
    }
    const result = await res.json()
    const post = result.post as Post
    //console.log('post in server Page', post)
    return post
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/gitdagray/test-blogposts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    }) 

    if (!res.ok) return undefined

    const repoFileTree: Filetree = await res.json()
    const filesArray = repoFileTree.tree.map(obj => obj.path).filter((path: string) => path.endsWith('.mdx'))
}
  