
import { Post } from "../../models/post";
import { PrismaClient } from '@prisma/client';
import PostIndex from "@/components/post/index";

async function getPosts() {
  // const posts: Post[] = []
  console.log('Sono in getPost')
  let prisma = new PrismaClient() 
  const postsFromDb = await prisma.post.findMany({
    //where: { published: true },
    // include: {
    //   author: {
    //     select: { name: true },
    //   },
    // },
  });
  const results: Post[] = []
  postsFromDb.map((item) => {
    let post: Post = {
      insertDate: item.InsertDate.toString(),
      updateDate: item.InsertDate.toString(),
      id: item.Id,
      author: item.Author,
      title: item.Title,
      contentText: item.ContentText
    }
    results.push(post)
  });  
  //console.log('I have posts', results)

  return results
}

async function Page() {
    // const navigate = useRouter();
    //const { addToast } = useToasts()
    //for confirm delete
    const posts: Post[] = await getPosts()
    //console.log('sono sul client: ', posts)
    
    return (
      <PostIndex posts={posts}/>
    );
}
export default Page;

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
