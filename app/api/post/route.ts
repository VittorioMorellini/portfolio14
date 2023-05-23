import { prisma } from '@/db/prisma';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

    console.log('Sono in APP API GET api/post')
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
    //console.log('I have posts in number', results.length)
    return NextResponse.json({results})
}
