import { getUsers } from "../repositories/passengers.repository.js";
import { getTravelsByUser } from "../repositories/passengers.repository.js";


export async function infoServices(){
    const users = await getUsers();
    let final = [];
    for(let i = 0; i < users.rows.length; i++){
        const travels =  await getTravelsByUser(users.rows[i].id);
        const object = {
            passenger: users.rows[i].fullName,
            travels: travels.rows.length
        }
        final.push(object);
    }
    return final;
}