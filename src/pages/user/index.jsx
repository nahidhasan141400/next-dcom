import React, { useState } from "react";
import ChangeInfo from "../../../components/user/changeInfo/ChangeInfo";
import UserInfo from "../../../components/user/info/UserInfo";
import Layout from "../../../layout/main";

const Index = () => {
    const [tab ,detTab] = useState("info");
  return (
    <Layout>
      <div className="container  mx-auto min-h-screen w-full relative">
        {/* user head start */}
        <div className="w-full py-2 bg-gray-100 my-3 rounded-lg shadow-sm flex flex-col md:flex-row">
          <div className="p-5 bg-gray-50 m-3 rounded-xl shadow-md flex-1">
            <h1 className="text-3xl capitalize text-blue-600">
              nahid hasan sagar
            </h1>
            <p>nahidhasan141400@gmail.com</p>
          </div>
          <div className="p-5 m-3 rounded-xl  flex-1 text-right">
            <div>
              <span>
                Total orders: <span className="text-gray-600">20</span>
              </span>
            </div>
            <div>
              <span>
                Completed orders: <span className="text-gray-600">3</span>
              </span>
            </div>
          </div>
        </div>
        {/* user head start */}
        <div className="w-full">
          <div className="w-full mx-auto flex justify-center">
            <div className="tabs md:tab-lg">
              <a onClick={()=>{detTab("info")}} className={ `tab tab-bordered ${ (tab==="info")?"tab-active":""}`} >information</a>
              <a onClick={()=>{detTab("update")}} className={ `tab tab-bordered ${ (tab==="update")?"tab-active":""}`}>update</a>
              <a onClick={()=>{detTab("setting")}} className={ `tab tab-bordered ${ (tab==="setting")?"tab-active":""}`}>settings</a>
              <a onClick={()=>{detTab("orders")}} className={ `tab tab-bordered ${ (tab==="orders")?"tab-active":""}`}>Orders</a>
            </div>
          </div>

          <div className="w-full relative">
            {
                tab==="update"?<ChangeInfo/>:""
            }
            {
                tab==="info"?<UserInfo setpage={detTab} />:""
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
