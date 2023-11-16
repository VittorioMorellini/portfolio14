import { getAllPostBySql } from '@/lib/postSupport';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

    console.log('Sono in APP API GET api/post')
    //console.log('I have posts in number', results.length)
    let results: Post[] = await getAllPostBySql()    
    // Recommendation: handle errors
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data');
    // }
    //const result = await res.json()
    //const posts = result.results as Post[]
    
    return NextResponse.json({results})
}
