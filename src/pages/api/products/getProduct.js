

import axios from "axios";
export default async function handler(req,res) {
  try {
    const {data} = await axios("http://127.0.0.1:8000/api/products");
    // console.log(data)
    res.send(data)
  } catch (error) {
    res.send("ok")
    console.log(error)
  }
  
}
