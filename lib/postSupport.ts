import { Post } from "@/models/post";
import sql from "msnodesqlv8";

export async function getAllPostBySql() {
  const conn = await sql.promises.open(process.env.CONNECTION_STRING!)
  const result = await conn.promises.query('SELECT top 10 id, insertDate, updateDate, redactorId, title, content From Post')
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

  const result = await conn.promises.query(`SELECT id, insertDate, updateDate, redactorId, title, content From Post WHERE id = ${id}`)
  //const result = await sql.query('SELECT * From Post')
  console.log({result})
  const post = result.first[0] as Post
  await conn.promises.close()
  return post
}