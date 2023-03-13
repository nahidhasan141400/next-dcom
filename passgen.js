const bcrypt = require('bcrypt');
const saltRounds = 10;


const gen = async ()=>{
    try {
        const hash =await bcrypt.hash("new1234", saltRounds);
        console.log(hash);
        console.log(bcrypt.compareSync("new134", hash));
    } catch (error) {
        console.log(error);
    }
}
gen()

