import jwt from "jsonwebtoken";
import React from 'react';
import Layout from '../layout/Layout';
const index = ({user}) => {
  return (
    <Layout user={user}>
        products
    </Layout>
  )
}
//secrate route 
export const getServerSideProps = async (ctx)=>{
  let {cart} = ctx.req.cookies;
  let host = ctx.req.headers.host;
  console.log(cart);
  console.log(process.env.JWTT);
  let err = null;
  let Props ={
    user:null,
  };
    try{
      var decoded = jwt.verify(cart, process.env.JWTT);
      console.log(decoded);
      if(!decoded){
        return{
          redirect:{
            destination: "/Wellcome/Admin/Login",
            permanent: false
          }
        }
      }
      else{
        Props.user = decoded;
      }
    }catch(e){
      console.log(e);
      return{
        redirect:{
          destination: "/Wellcome/Admin/Login",
          permanent: false
        }
      }
    }
    return{
      props: Props
    }
  }

export default index