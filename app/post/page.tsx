
import { getBaseUrlFromEnviroment } from "@/utils/functions";
import { Post } from "../../models/post";
import PostIndex from "@/components/post/index";

async function getPosts() {
  //console.log('Sono in getAllPost e chiamo la fetch')
  const res = await fetch(getBaseUrlFromEnviroment() + '/api/post');
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

async function Page() {
    //const navigate = useRouter();
    //for confirm delete
    const posts: Post[] = await getPosts() 
    //console.log({posts})   
    return (
      <PostIndex posts={posts}/>
    );
}
export default Page;

