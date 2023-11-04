'use server'
import { prisma } from "@/db/prisma";
import { Post } from "@/models/post";
import { parseISO } from "date-fns";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addPost(post: Post) {
    console.log('I am in server action')
    const newPost = await prisma.post.create({
      data: {
          Author: post.author,
          ContentText: post.contentText,
          InsertDate: parseISO(post.insertDate),
          UpdateDate: parseISO(post.updateDate),
          Title: post.title,
          //Id: res.id
      }
    })
    revalidatePath('/post')
    redirect('/post')
    // return newPost;
  } 
  
  