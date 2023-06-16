import { PrismaClient } from '@prisma/client';
import PostDetail from "@/components/post/detail";
import { getPost } from "@/lib/postSupport";

async function Page({params}: { params: { id: string }}) {
    const post = await getPost(parseInt(params.id))
    
    return (
      <PostDetail post={post}/>
    );
}
export default Page;

// export async function generateStaticParams() {
//   const prisma = new PrismaClient()
//   const posts = await prisma.post.findMany({});
//   //console.log('Data fetched in server static params api id blog SSR', posts)
//   return posts.map(post => ({
//     id: post.Id.toString(),
//   }));
// }