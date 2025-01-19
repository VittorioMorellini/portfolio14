import { getAllPostBySql } from '@/lib/postSupport';
import { Post } from '@/models/post';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(request: NextRequest) {

    console.log('Sono in APP API GET api/post')
    let results: Post[] = await getAllPostBySql()    
        
    return NextResponse.json({results})
}
