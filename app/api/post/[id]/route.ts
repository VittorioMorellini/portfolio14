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


export async function GET(request: Request, {params }: {params: { id: string }}) {
    console.log('GET API for Post with ID: ' + params.id)
    const item = await prisma.post.findFirst({
        where: { Id: parseInt(params.id) },
    });
    let post: Post = {id: 0, title: '', author: '', insertDate: '', updateDate: '', contentText: ''}
    //console.log({item})
    if (item) {
        post = {
            insertDate: item.InsertDate.toString(),
            updateDate: item.UpdateDate.toString(),
            id: item.Id,
            author: item.Author,
            title: item.Title,
            contentText: item.ContentText
        }
    }
    //console.log({post})
    return NextResponse.json({ post });   
}