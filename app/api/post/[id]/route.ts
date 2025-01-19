import { dbconfig } from '@/lib/config';
import { Post } from '@/models/post';
import parseISO from 'date-fns/parseISO';
import { NextRequest, NextResponse } from 'next/server';
const sql = require('mssql')

export async function POST(request: Request, { params }: { params: { id: string }}) {
    const id = params.id;
    
    console.log('New API app POST post id: ' + id)
    const res = await request.json() as Post
    //console.log("Post from request body-Res: " + JSON.stringify(res))
    let pool = await sql.connect(dbconfig)
    if (id !== '0') {
        pool.request().input('content', sql.NVarChar, res.content)
            .input('author', sql.NVarChar, res.author)
            .input('title', sql.NVarChar, res.title)
            .query(`Update Post set
                content = @content,
                author = @author,
                title = @title
                from Post where Id = ${id}` 
        )
        .then(function(result: Post)
        {
            //do whatever you want with the results
            console.log(result)
        })
        .catch(function(error: Error)
        {
            //do whatever when you get an error
            console.log(error)
        })
    }
    else {
        //Insert new post
        pool.request().input('content', sql.NVarChar, res.content)
            .input('author', sql.NVarChar, res.author)
            .input('title', sql.NVarChar, res.title)
            .query(`Insert into Post (content, author, title) values (@content, @author, @title)`
        )
        .then(function(result: Post)
        {
            //do whatever you want with the results
            console.log(result)
        })
        .catch(function(error: Error)
        {
            //do whatever when you get an error
            console.log(error)
        })
    }
    // const upsertPost = await prisma.post.upsert({
    //     where: {
    //         Id: parseInt(id),
    //     },
    //     update: {
    //         Author: res.author,
    //         ContentText: res.contentText,
    //         InsertDate: parseISO(res.insertDate),
    //         UpdateDate: parseISO(res.updateDate),
    //         Title: res.title,
    //         //Id: res.id
    //     },
    //     create: {
    //         Author: res.author,
    //         ContentText: res.contentText,
    //         InsertDate: parseISO(res.insertDate),
    //         UpdateDate: parseISO(res.updateDate),
    //         Title: res.title,
    //         //Id: res.id
    //     }
    // })
    return NextResponse.json({ res });
}


// export async function GET(request: Request, {params }: {params: { id: string }}) {
//     console.log('GET API for Post with ID: ' + params.id)
//     const item = await prisma.post.findFirst({
//         where: { Id: parseInt(params.id) },
//     });
//     let post: Post = {id: 0, title: '', author: '', insertDate: '', updateDate: '', contentText: ''}
//     if (item) {
//         post = {
//             insertDate: item.InsertDate.toString(),
//             updateDate: item.UpdateDate.toString(),
//             id: item.Id,
//             author: item.Author,
//             title: item.Title,
//             contentText: item.ContentText
//         }
//     }
//     return NextResponse.json({ post });   
// }