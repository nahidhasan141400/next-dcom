// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectionDB from "../../../database/connection.js";


export default async function handler(req,res) {
  const connection = await connectionDB();
  const [data] = await connection.execute('SELECT * FROM `admins` WHERE 1');
    

    res.send(data)
}
