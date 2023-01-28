const mysql = require('mysql2/promise');
const connectionDB =async () => {
    try {
        const connection = await mysql.createConnection({
            host:'localhost',
            user: 'root2',
            database: 'new'
            });
            return connection;
    } catch (error) {
        console.log(error)
        console.log("db connection faild chack on _/database/connection.js");
        return {error,msg:"Database connection fail !-",deta:"database connection faild ! pleas chack the DB connection--"}
    }
    
  
}

export default connectionDB