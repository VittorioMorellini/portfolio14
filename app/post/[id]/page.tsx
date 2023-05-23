import { Post } from "../../../models/post";
import { PrismaClient } from '@prisma/client';
import PostDetail from "@/components/post/detail";
import { prisma } from "@/db/prisma";

async function getPost(id: number) {
  //console.log('Sono in getPost with id: ' + id)
  const item = await prisma.post.findFirst({
    where: { Id: id },
  });
  let post: Post = {id: 0, title: '', author: '', insertDate: '', updateDate: '', contentText: ''}
  if (item) {
    post = {
      insertDate: item.InsertDate.toString(),
      updateDate: item.UpdateDate.toString(),
      id: item.Id,
      author: item.Author,
      title: item.Title,
      contentText: item.ContentText
    }
  }
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