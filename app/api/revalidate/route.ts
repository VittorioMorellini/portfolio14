import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
 
// export async function GET(request: NextRequest) {
//   //const path = request.nextUrl.searchParams.get('http://localhost:3000/api/post') || '/';
//   const path = request.nextUrl.searchParams.get('path') || '/';
//   //console.log('revalidate path', path)
//   revalidatePath(path);
//   return NextResponse.json({ revalidated: true, now: Date.now() });
// }

export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'
    revalidatePath(path)

    return NextResponse.json({ revalidated: true })
}