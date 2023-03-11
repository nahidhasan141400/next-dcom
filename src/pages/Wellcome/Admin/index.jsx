import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import Layout from "./layout/Layout";

const Index = () => {
  return (
    <div>
      <Layout>
        <div className="relative flex justify-between items-center flex-wrap pt-10 px-3 space-x-1">
          {/* card start  */}
          <div className="flex-1  relative max-w-sm p-6 bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100 border border-gray-200 rounded-lg shadow-md">
            <div className="absolute text-4xl p-2 bg-white rounded-md -top-8 shadow-sm animate-bounce">
              <FcMoneyTransfer/>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Total income Today
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              12000 $
            </p>
            
          </div>
          {/* card end  */}
          {/* card start  */}
          <div className="flex-1  relative max-w-sm p-6 bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100 border border-gray-200 rounded-lg shadow-md">
            <div className="absolute text-4xl p-2 bg-white rounded-md -top-8 shadow-sm animate-bounce">
              <FcMoneyTransfer/>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Total income Today
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              12000 $
            </p>
            
          </div>
          {/* card end  */}
          {/* card start  */}
          <div className="flex-1  relative max-w-sm p-6 bg-gradient-to-r from-blue-300 via-red-200 to-yellow-100 border border-gray-200 rounded-lg shadow-md">
            <div className="absolute text-4xl p-2 bg-white rounded-md -top-8 shadow-sm animate-bounce">
              <FcMoneyTransfer/>
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Total income Today
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              12000 $
            </p>
            
          </div>
          {/* card end  */}
       </div>
       {/* resent order  */}
       <div className="relative" >
        <div>
          <h1><span>@</span> Resent Orders</h1>
        </div>

       </div>
      </Layout>
    </div>
  );
};

export default Index;
