import cookie from "cookie";
import DBcon from "../database";
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


export default async function handler(req,res) {
 
  
    const method = req.method;

    if(method === "POST"){
        try {

            const DataBase = await DBcon();
            const {connection} = DataBase;

            const body = req.body;
            const [data] = await connection.execute(`SELECT * FROM admin WHERE user="${body.user}"`);
                if(data.length !== 0){
                    if(!data[0].status){
                        res.status(500);
                        return res.send("not active")
                    }
                    // console.log("ok",data);
                    const plt = body.password;
                    const hash = data[0].password;
                    // console.log(plt,hash);
                    const chack = bcrypt.compareSync(plt,hash);
                    // bcrypt.compareSync("new134", hash)
                    if(chack){
                        // if login 
                        const token =await jwt.sign({user:data[0].user,role:data[0].id,name:data[0].name},process.env.JWTT,{
                            expiresIn:"2h"
                        });
                        res.setHeader("Set-Cookie",cookie.serialize("cart",token,{
                            maxAge: (60*60)*60,
                            sameSite: "strict",
                            path: "/"
                        }))


                        
                        res.status(200);
                        return res.send("nice")
                    }else {
                        // login not authhinticat 
                        res.status(500);
                        return res.send("bad")
                    }
                }else{
                    console.log("not-ok",data);
                    res.status(500);
                        return res.send("bad")
                }
            
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
  
}
