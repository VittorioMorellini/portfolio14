import { ResponseError } from "@/models";
import { Post } from "@/models/post";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

async function PostsHandler(req: NextApiRequest, res: NextApiResponse<Post[] | ResponseError>) {
    try {
        //console.log({server})                
        require('dotenv').config()
        const prisma = new PrismaClient()
        const posts = await prisma.post.findMany()
    
        //console.log('post found', result);
        //return res.status(200).json(result);
        // const posts = result.map(record => {
        //     return {Id: record.id, ...record.fields }
        // })
        return res.status(200).json(/*posts ? posts : */[]);

    } catch (e) {
        console.log('post error', e);
        res.status(400).json({ error: (e as Error).message });
    }
}

export default PostsHandler;