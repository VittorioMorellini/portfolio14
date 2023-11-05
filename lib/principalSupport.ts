import { prisma } from "@/db/prisma";
import { User } from "@/models/user";
import { Principal } from "../models/principal";

export async function loadPrincipal(username: string) {
    console.log('Sono in loadPrincipal with username: ' + username)
    const item = await prisma.principal.findFirst({
      where: { 
          Username: username 
      }
    });

    console.log({item})
    if (item) {
      let user: User = {
        insertDate: item.InsertDate.toString(),
        updateDate: item.InsertDate.toString(),
        id: item.Id.toString(),
        name: item.Username,
        password: item.Password,
        //name: item.Name,
        email: item.Mail,
        //phone: item.Phone,
        //surname: item.Surname
      }
      return user
    }
    return null;
}

