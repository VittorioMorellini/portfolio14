import PostDetail from "@/components/post/detail";
import { getPostBySql } from "@/lib/postSupport";
import PageTransition from '@/components/pageTransition';

async function Page({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const post = await getPostBySql(parseInt(id))
    return (
      <PageTransition>
        <PostDetail post={post}/>
      </PageTransition>  
    );
}
export default Page;
