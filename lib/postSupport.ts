import { Post } from "@/models/post";
import { prisma } from '@/db/prisma';

export async function getAllPosts() {
    //console.log('Sono in getAllPost e chiamo la fetch')
    //const res = await fetch(getBaseUrlFromEnviroment() + '/api/post', {cache: 'no-store'});
    const postsFromDb = await prisma.post.findMany({
      where: { 
          Id: { gt: 0 }
      }
    });
    let results: Post[] = []
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
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    return results;
}

export async function getPost(id: number) {
    console.log('Sono in getPost with id: ' + id)
    //const url = `/api/post/${id}`
    //console.log({url})
    //const res = await fetch(url, {cache: 'no-cache'});
    const item = await prisma.post.findFirst({
      where: { 
          Id: id 
      }
    });
    console.log({item})
    if (item) {
      let post: Post = {
        insertDate: item.InsertDate.toString(),
        updateDate: item.InsertDate.toString(),
        id: item.Id,
        author: item.Author,
        title: item.Title,
        contentText: item.ContentText
      }
      return post
    }
    return null;
}

