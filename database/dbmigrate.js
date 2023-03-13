require('dotenv').config()
const mysql = require('mysql2/promise');

const connectionDB =async () => {
    try {
        
        const connection = await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            database:process.env.DB,
            password:process.env.PW
            });
            return {connection,er:false};
    } catch (error) {
        console.log(error)
        console.log("db connection faild chack on _/database/connection.js");
        return {er:true,error,msg:"Database connection fail !-",deta:"database connection faild ! pleas chack the DB connection--"}
    }

};

let loop= 0;
// moduls ------------>>>>>>>
const admin = `CREATE TABLE nextcom. admin (
    id INT NOT NULL AUTO_INCREMENT , 
    name VARCHAR(1000) NOT NULL ,
    user VARCHAR(1000) NOT NULL ,
    email VARCHAR(1000) NOT NULL ,
    password VARCHAR(9000) NOT NULL ,
    session VARCHAR(9000) NOT NULL ,
    status VARCHAR(9000) NOT NULL ,
    phone VARCHAR(9000) NOT NULL ,
    img VARCHAR(9000) NOT NULL ,
    role VARCHAR(9000) NOT NULL ,
    job INT NOT NULL ,
    PRIMARY KEY (id))
    ENGINE = InnoDB;`
    const category = `CREATE TABLE nextcom. category (
        id INT NOT NULL AUTO_INCREMENT , 
        name VARCHAR(1000) NOT NULL ,
        details VARCHAR(1000) NOT NULL ,
        img  VARCHAR(1000) NOT NULL ,
        PRIMARY KEY (id))
        ENGINE = InnoDB;`
// modal register heare 
const moduls = [admin,category]

const mygrate = async (query)=>{
    const rescon = await connectionDB();
    const {connection} = rescon;
    try {
        const [data] = await connection.execute(query);
        console.log(data);
        close();
    } catch (error) {
        console.log(error);
        
    }
};
moduls.forEach((q,i)=>{
    console.log("loop start")
    loop = i;
    mygrate(q);
},function allDone() {
    console.log("All done");
    process.exit()
 });

function close(){
    if(loop == moduls.length-1){
        process.exit()
    }
}
