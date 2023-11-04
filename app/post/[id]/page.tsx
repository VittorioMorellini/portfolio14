import PostDetail from "@/components/post/detail";
import { getPost } from "@/lib/postSupport";
import PageTransition from '@/components/pageTransition';

async function Page({params}: { params: { id: string }}) {
    const post = await getPost(parseInt(params.id))
    
    return (
      <PageTransition>  
        <PostDetail post={post}/>
      </PageTransition>  
    );
}
export default Page;
