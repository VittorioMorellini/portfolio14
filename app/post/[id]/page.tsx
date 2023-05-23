import { Post } from "../../../models/post";
import { PrismaClient } from '@prisma/client';
import PostDetail from "@/components/post/detail";

async function getPost(id: number) {
  console.log('Sono in getPost with id: ' + id)
  let prisma = new PrismaClient() 
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
    //console.log('sono sul client: ', posts)
    
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

// export async function getStaticProps({ params }: { params: {} }) {
//   // const posts: Post[] = []
//   console.log('Sono in Static props')
//   let prisma = new PrismaClient() 
//   const postsFromDb = await prisma.post.findMany({
//     //where: { published: true },
//     // include: {
//     //   author: {
//     //     select: { name: true },
//     //   },
//     // },
//   });
//   const results: Post[] = []
//   postsFromDb.map((item) => {
//     let post: Post = {
//       insertDate: item.InsertDate.toString(),
//       updateDate: item.InsertDate.toString(),
//       id: item.Id,
//       author: item.Author,
//       title: item.Title,
//       contentText: item.ContentText
//     }
//     results.push(post)
//   });  
//   console.log('I have posts', results)

//   return {
//     props: {
//       posts: results
//     }
//   }
// }
