import { Post } from "@/models/post";
import sql from "msnodesqlv8";

interface PostFromDb {
  Id: number,
  InsertDate: Date,
  UpdateDate: Date,
  Title: string | null,
  Content: string | null,
  AuthorId: number,
}
// export async function getAllPosts() {
//     //console.log('Sono in getAllPost e chiamo la fetch')
//     //const res = await fetch(getBaseUrlFromEnviroment() + '/api/post', {cache: 'no-store'});
//     const postsFromDb = await prisma.post.findMany({
//       where: { 
//           Id: { gt: 0 }
//       }
//     });
//     let results: Post[] = []
//     postsFromDb.map((item: PostFromDb) => {
//         let post: Post = {
//         insertDate: item.InsertDate.toString(),
//         updateDate: item.InsertDate.toString(),
//         id: item.Id,
//         authorId: item.AuthorId,
//         title: item.Title,
//         content: item.Content
//         }
//         results.push(post)
//     });  
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//     return results;
// }

export async function getAllPostBySql() {
  //const connection: string = 'Server=S-2020-150127\\SQLEXPRESS,1433;Database=Portfolio;User Id=sa;Password=sapwd;trustServerCertificate=true;encrypt=false' //process.env.CONNECTION_STRING!
  const conn = await sql.promises.open(process.env.CONNECTION_STRING!)
  const result = await conn.promises.query('SELECT top 100 id, insertDate, updateDate, authorId, title, content From Post')
  const results = result.first as Post[]
  await conn.promises.close()
  return results
}

// export async function getPost(id: number) {
//     console.log('Sono in getPost with id: ' + id)
//     const item = await prisma.post.findFirst({
//       where: { 
//           Id: id 
//       }
//     });
//     //console.log({item})
//     if (item) {
//       let post: Post = {
//         insertDate: item.InsertDate.toString(),
//         updateDate: item.InsertDate.toString(),
//         id: item.Id,
//         authorId: item.AuthorId,
//         title: item.Title,
//         content: item.Content
//       }
//       return post
//     }
//     return null;
// }

export async function getPostBySql(id: number) {
  const conn = await sql.promises.open(process.env.CONNECTION_STRING!)

  const result = await conn.promises.query(`SELECT id, insertDate, updateDate, author, title, contentText From Post WHERE id = ${id}`)
  //const result = await sql.query('SELECT * From Post')
  console.log({result})
  const post = result.first[0] as Post
  await conn.promises.close()
  return post
}