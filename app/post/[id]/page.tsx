import { Post } from "../../../models/post";
import { PrismaClient } from '@prisma/client';
import PostDetail from "@/components/post/detail";
import { prisma } from "@/db/prisma";
import { getBaseUrlFromEnviroment } from "@/utils/functions";

async function getPost(id: number) {
  //console.log('Sono in getPost with id: ' + id)
  const url = getBaseUrlFromEnviroment() + `/api/post/${id}`
  console.log({url})
  const res = await fetch(url);
  //console.log({res})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for single post');
  }
  const result = await res.json()
  //console.log('result', JSON.stringify(result))
  const post = result.post as Post
  //console.log('post in server Page', post)
  return post
}

async function Page({params}: { params: { id: string }}) {
    //for confirm delete
    const post = await getPost(parseInt(params.id))
    
    return (
      <PostDetail post={post}/>
    );
}
export default Page;

export async function generateStaticParams() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany({
    //where: { published: true },
  });
  console.log('Data fetched in server static params api id blog SSR', posts)
  return posts.map(post => ({
    id: post.Id.toString(),
  }));
}