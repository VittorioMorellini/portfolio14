import { prisma } from '@/db/prisma';
import { Post } from '@/models/post';
import parseISO from 'date-fns/parseISO';
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request: Request,{ params }: {params: { id: string }}) {
    const id = params.id;
    //const { url, method, body } = request
    console.log('New API app POST post id: ' + id)
    //console.log('New API app POST post url: ' + url)
    //console.log("Body from request: " + body)
    const res = await request.json() as Post
    //console.log("Post from request body-Res: " + JSON.stringify(res))
    const upsertPost = await prisma.post.upsert({
        where: {
            Id: parseInt(id),
        },
        update: {
            Author: res.author,
            ContentText: res.contentText,
            InsertDate: parseISO(res.insertDate),
            UpdateDate: parseISO(res.updateDate),
            Title: res.title,
            //Id: res.id
        },
        create: {
            Author: res.author,
            ContentText: res.contentText,
            InsertDate: parseISO(res.insertDate),
            UpdateDate: parseISO(res.updateDate),
            Title: res.title,
            //Id: res.id
        }
    })
    //const result: Post = {id: parseInt(id as string), title: '', insertDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), contentText: '', author: '', updateDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss') }
    return NextResponse.json({ upsertPost });
}

export async function DELETE(request: Request, { params }: {params: { id: string }}) {
    const id = params.id;
    //const { url, method, body } = request
    console.log('New API app DELETE post: ' + id)
    
    const deletedPost = await prisma.post.delete({
        where: {
            Id: parseInt(id),
        },
    })

    return NextResponse.json({ deletedPost });
}
