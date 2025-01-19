'use server'
//import { signIn } from "next-auth/react";
//import { prisma } from "@/db/prisma";
import { Post } from "@/models/post";
import { parseISO } from "date-fns";
//import sql from "msnodesqlv8";
import { signIn } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbconfig } from "./config";
const sql = require("mssql")

export async function addPost(post: Post) {
    console.log('I am in server action')
    //Insert new post
    let pool = await sql.connect(dbconfig)
    pool.request().input('content', sql.NVarChar, post.content)
        .input('author', sql.NVarChar, post.author)
        .input('title', sql.NVarChar, post.title)
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
    revalidatePath('/post')
    redirect('/post')
    // return newPost;
}

export async function deletePost(id: number) {
  console.log('New server action DELETE post: ' + id)
  
//   const deletedPost = await prisma.post.delete({
//       where: {
//           Id: id,
//       },
//   })
    await sql.connect(dbconfig)
    const result = await sql.query(`Delete From Post WHERE Id = ${id}`)
    const deletedPost = result.recordset[0] as Post
    await sql.close()
    
    revalidatePath('/post')
    return deletedPost;
}

export async function authenticate(prevState: string | undefined, formData: FormData,) {
  try {
      console.log('Sto per fare signIn')
      await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
          return 'CredentialSignin';
      }
      throw error;
  }
}
