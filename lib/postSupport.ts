import { Post } from "@/models/post";
import { dbconfig } from "./config";
const sql = require('mssql')

export async function getAllPostBySql() {
  //await sql.connect(process.env.CONNECTION_STRING!)
  //await sql.connect('driver={tedious};Server=S-2020-150127\\SQLEXPRESS,1433;Database=Portfolio;User Id=sa;Password=sapwd;trustServerCertificate=Yes;encrypted=yes;')
  await sql.connect(dbconfig)
  const result = await sql.query('SELECT top 10 id, insertDate, updateDate, redactorId, title, content From Post')
  console.log({result})
  const results = result.recordset as Post[]
  console.log({results})
  await sql.close()
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
  console.log({id})
  await sql.connect(dbconfig)
  const result = await sql.query(`SELECT id, insertDate, updateDate, redactorId, title, content From Post WHERE id = ${id}`)
  //const result = await sql.query('SELECT * From Post')
  console.log({result})
  const post = result?.recordset[0] as Post
  await sql.close()
  return post
}