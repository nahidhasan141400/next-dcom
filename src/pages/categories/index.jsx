import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../../layout/main";

const Index = () => {
  const {color} = useSelector((state)=> state.Theme)
  return (
    <Layout>
      <div className="container relative mx-auto">
        <div className="w-full bg-gray-50 text-center rounded-md md:m-3 p-3 md:shadow-md">
          <h1 className={`text-xl capitalize text-${color}-700`}>
            browse all categories
          </h1>
        </div>
        <div className="container relative p-2">
          <div className="w-full flex flex-wrap justify-center ">
            {/* card  */}
            {
              [1,1,1,1,1,1,1,1,1,1].map((e,i)=>{
                return(
                  <div key={i} className={`m-2 w-56 h-56 bg-${color}-100 rounded-md shadow-md relative overflow-hidden hover:shadow-xl hover:transform hover:scale-105 duration-300 `}>
                  <div className="w-full h-full relative ">
                    <img
                      src="/img/product/pr (2).jpeg"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <Link href={'/products'}>
                  <div className={`absolute z-10 w-full bottom-0 bg-${color}-300 text-center p-2 text-xl capitalize hover:text-2xl cursor-pointer`}>
                    <p>silk </p>
                  </div>
                  </Link>
                </div>
                )
              })
            }
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
