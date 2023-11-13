import { Post } from "@/models/post";
import { prisma } from '@/db/prisma';
import sql from 'mssql'
import { dbConfig } from "@/dbConstants";


export async function getAllPosts() {
    //console.log('Sono in getAllPost e chiamo la fetch')
    //const res = await fetch(getBaseUrlFromEnviroment() + '/api/post', {cache: 'no-store'});
    const postsFromDb = await prisma.post.findMany({
      where: { 
          Id: { gt: 0 }
      }
    });
    let results: Post[] = []
    postsFromDb.map((item) => {
        let post: Post = {
        insertDate: item.InsertDate.toString(),
        updateDate: item.InsertDate.toString(),
        id: item.Id,
        author: item.Author,
        title: item.Title,
        contentText: item.ContentText
        }
        results.push(post)
    });  
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return results;
}

export async function getAllPostBySql() {
  // S-2020-150127
  const connection: string = 'Server=localhost\\SQLEXPRESS,1433;Initial Catalog=Portfolio;User Id=sa;Password=sapwd;trustServerCertificate=true;Encrypt=true' //process.env.CONNECTION_STRING!
  //console.log({connection})
  //sql.connect(dbConfig)
  sql.connect(connection)
  //console.log('Ho aperto la connessione')
  const result = await sql.query('SELECT id, insertDate, updateDate, author, title, contentText From Post')
  //const result = await sql.query('SELECT * From Post')
  //console.log({result})
  const results = result.recordset as Post[]
  return results
}

export async function getPost(id: number) {
    console.log('Sono in getPost with id: ' + id)
    const item = await prisma.post.findFirst({
      where: { 
          Id: id 
      }
    });
    console.log({item})
    if (item) {
      let post: Post = {
        insertDate: item.InsertDate.toString(),
        updateDate: item.InsertDate.toString(),
        id: item.Id,
        author: item.Author,
        title: item.Title,
        contentText: item.ContentText
      }
      return post
    }
    return null;
}

export async function getPostBySql(id: number) {
  //const connection: string = 'Server=localhost\\SQLEXPRESS,1433;Database=Portfolio;User Id=sa;Password=sapwd;TrustServerCertificate=true;Encrypt=true'    //process.env.CONNECTION_STRING!
  //console.log({connection})
  sql.connect(dbConfig)

  const result = await sql.query(`SELECT id, insertDate, updateDate, author, title, contentText From Post WHERE id = ${id}`)
  //const result = await sql.query('SELECT * From Post')
  console.log({result})
  const post = result.recordset[0] as Post
  return post
}