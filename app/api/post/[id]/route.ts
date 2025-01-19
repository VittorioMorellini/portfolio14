import { dbconfig } from '@/lib/config';
import { Post } from '@/models/post';
import parseISO from 'date-fns/parseISO';
import { NextRequest, NextResponse } from 'next/server';
const sql = require('mssql')

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
    const id = (await (params)).id;
    
    console.log('API POST by id: ' + id)
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
            return NextResponse.json({ error }); 
        })
    }
    return NextResponse.json({ res });

    // else {
        //Insert new post Done by Server actions
        // pool.request().input('content', sql.NVarChar, res.content)
        //     .input('author', sql.NVarChar, res.author)
        //     .input('title', sql.NVarChar, res.title)
        //     .query(`Insert into Post (content, author, title) values (@content, @author, @title)`
        // )
        // .then(function(result: Post)
        // {
        //     //do whatever you want with the results
        //     console.log(result)
        // })
        // .catch(function(error: Error)
        // {
        //     //do whatever when you get an error
        //     console.log(error)
        // })
    // }
    
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
}