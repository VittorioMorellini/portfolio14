import { User } from "@/models/user";
import { Principal } from "../models/principal";
const sql = require('mssql')

export async function loadPrincipal(username: string) {
    console.log('Sono in loadPrincipal with username: ' + username)
    const conn = await sql.promises.open(process.env.CONNECTION_STRING!)
    const result = await conn.promises.query(`SELECT id, insertDate, updateDate, name, mail, surname, phone FROM Principal WHERE username = '${username}'`)

    const item = result.first[0] as Principal
    // const item = await prisma.principal.findFirst({
    //   where: { 
    //       Username: username 
    //   }
    // });

    console.log({item})
    if (item) {
      let user: User = {
        insertDate: item.insertDate.toString(),
        updateDate: item.updateDate.toString(),
        id: item.id.toString(),
        name: item.username,
        password: '',
        //name: item.Name,
        email: item.mail,
        phone: item.phone,
        surname: item.surname
      }
      return user
    }
    return null;
}

