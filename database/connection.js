const mysql = require('mysql2/promise');
const connectionDB =async () => {
    try {
        const connection = await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER ,
            database: process.env.DB,
            password: process.env.PW
            });
            return {connection,er:false};
    } catch (error) {
        console.log(error)
        console.log("db connection faild chack on _/database/connection.js");
        return {er:true,error,msg:"Database connection fail !-",deta:"database connection faild ! pleas chack the DB connection--"}
    }
    
  
}

export default connectionDB