import { getAllPosts } from '@/lib/postSupport';
import { Post } from '@/models/post';
import { NextResponse } from 'next/server';
import stream from 'stream';
import { promisify } from 'util';

export async function GET(request: Request, nextResponse: NextResponse) {

    console.log('Sono in api get Resume')
    const pipeline = promisify(stream.pipeline);

    const response = await fetch("/public/static/Resume.pdf")
    
    console.log('Ho recuperato la response')
    let array = await response.arrayBuffer();
    //return await pipeline(response.body as any);
    return NextResponse.rewrite(array as any)
    //return pipeline(response.body as any)
    
    //console.log('I have posts in number', results.length)
    // Recommendation: handle errors
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data');
    // }
    //const result = await res.json()
    //const posts = result.results as Post[]
    
    //return NextResponse.sen({results})
}

// const pipeline = promisify(stream.pipeline);

// const handler = async (req: Request, res: Response) => {
//     console.log('sono nel handling route')
//   const response = await fetch('/static/Resume.pdf'); // replace this with your API call & options
//   if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

//   //res.setHeader('Content-Type', 'application/pdf');
//   //res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');
//   await pipeline(response.body as any);
// };

// export default handler;
