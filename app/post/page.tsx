
import { getBaseUrlFromEnviroment } from "@/utils/utils";
import { Post } from "../../models/post";
import { Container } from "@/components/container";
import PostItem from "@/components/post/item";
import Link from "next/link";
import { getAllPosts } from "@/lib/postSupport";

//export const revalidate = 0

async function Page() {
    //for confirm delete
    const posts: Post[] = await getAllPosts() 
    //console.log({posts})   
    return (
      <div className="flex flex-col">
      <Container>
        <div className="flex flex-col items-center mb-4 md:flex-row">
            <div>
                <Link prefetch={false} href='post/0' passHref className='text-black hover:text-blue-500 w-32'>
                    Add post
                </Link>
            </div>
            <div className="text-center w-full">
              <h1 className="text-3xl font-black text-center">Tell me what do you think about my blog and articles</h1>
            </div>
        </div>
        {/*YYYY-MM-DDTHH:mm:ss.sssZ  post.Date.toString() */}
        {/* format(new Date(parseISO(post.Date).valueOf() + date.getTimezoneOffset() * 60 * 1000), "yyyy-MM-dd'T'HH:mm:ss") */}
      </Container>
      <div>
        <Container>
          <div className='bg-cyan-300 text-center'>
            {posts?.map((post: Post, index: number) => <PostItem key={index} post={post} /> )}
          </div>
        </Container>
      </div>
    </div>
    );
}
export default Page;

