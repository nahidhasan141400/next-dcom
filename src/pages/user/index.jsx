import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChangeColor from "../../../components/user/ChangeColor/ChangeColor";
import ChangeInfo from "../../../components/user/changeInfo/ChangeInfo";
import ChangePassword from "../../../components/user/ChangePassword/ChangePassword";
import UserInfo from "../../../components/user/info/UserInfo";
import Order from "../../../components/user/Order/Order";
import Layout from "../../../layout/main";
const Index = () => {
  const [tab, detTab] = useState("info");
  const [color, setcolor] = useState("blue");
  const theme = useSelector((state) => state.Theme);

  const name = "red";
  useEffect(()=>{
    setcolor(theme.color)
  },[theme.color])

  return (
    <Layout>
      <div className="hidden text-red-600 ">
      <div>
        <div className='text-green-900'></div>
        <div className='text-green-800'></div>
        <div className='text-green-700'></div>
        <div className='text-green-600'></div>
        <div className='text-green-500'></div>
        <div className='text-green-400'></div>
        <div className='text-green-300'></div>
        <div className='text-green-200'></div>
        <div className='text-green-100'></div>
        <div className='text-green-50'></div>
        {/* red */}
        <div className='text-red-900'></div>
        <div className='text-red-800'></div>
        <div className='text-red-700'></div>
        <div className='text-red-600'></div>
        <div className='text-red-500'></div>
        <div className='text-red-400'></div>
        <div className='text-red-300'></div>
        <div className='text-red-200'></div>
        <div className='text-red-100'></div>
        <div className='text-red-50'></div>
        {/* blue */}
        <div className='text-blue-900'></div>
        <div className='text-blue-800'></div>
        <div className='text-blue-700'></div>
        <div className='text-blue-600'></div>
        <div className='text-blue-500'></div>
        <div className='text-blue-400'></div>
        <div className='text-blue-300'></div>
        <div className='text-blue-200'></div>
        <div className='text-blue-100'></div>
        <div className='text-blue-50'></div>
        {/* cyan */}
        <div className='text-cyan-900'></div>
        <div className='text-cyan-800'></div>
        <div className='text-cyan-700'></div>
        <div className='text-cyan-600'></div>
        <div className='text-cyan-500'></div>
        <div className='text-cyan-400'></div>
        <div className='text-cyan-300'></div>
        <div className='text-cyan-200'></div>
        <div className='text-cyan-100'></div>
        <div className='text-cyan-50'></div>
        {/* pink */}
        <div className='text-pink-900'></div>
        <div className='text-pink-800'></div>
        <div className='text-pink-700'></div>
        <div className='text-pink-600'></div>
        <div className='text-pink-500'></div>
        <div className='text-pink-400'></div>
        <div className='text-pink-300'></div>
        <div className='text-pink-200'></div>
        <div className='text-pink-100'></div>
        <div className='text-pink-50'></div>
        {/* yello */}
        <div className='text-yellow-900'></div>
        <div className='text-yellow-800'></div>
        <div className='text-yellow-700'></div>
        <div className='text-yellow-600'></div>
        <div className='text-yellow-500'></div>
        <div className='text-yellow-400'></div>
        <div className='text-yellow-300'></div>
        <div className='text-yellow-200'></div>
        <div className='text-yellow-100'></div>
        <div className='text-yellow-50'></div>
        {/* lime */}
        <div className='text-lime-900'></div>
        <div className='text-lime-800'></div>
        <div className='text-lime-700'></div>
        <div className='text-lime-600'></div>
        <div className='text-lime-500'></div>
        <div className='text-lime-400'></div>
        <div className='text-lime-300'></div>
        <div className='text-lime-200'></div>
        <div className='text-lime-100'></div>
        <div className='text-lime-50'></div>
        {/* viole */}
        <div className='text-violet-900'></div>
        <div className='text-violet-800'></div>
        <div className='text-violet-700'></div>
        <div className='text-violet-600'></div>
        <div className='text-violet-500'></div>
        <div className='text-violet-400'></div>
        <div className='text-violet-300'></div>
        <div className='text-violet-200'></div>
        <div className='text-violet-100'></div>
        <div className='text-violet-50'></div>

        {/* bg */}
        <div className='bg-green-900'></div>
        <div className='bg-green-800'></div>
        <div className='bg-green-700'></div>
        <div className='bg-green-600'></div>
        <div className='bg-green-500'></div>
        <div className='bg-green-400'></div>
        <div className='bg-green-300'></div>
        <div className='bg-green-200'></div>
        <div className='bg-green-100'></div>
        <div className='bg-green-50'></div>
        {/* red */}
        <div className='bg-red-900'></div>
        <div className='bg-red-800'></div>
        <div className='bg-red-700'></div>
        <div className='bg-red-600'></div>
        <div className='bg-red-500'></div>
        <div className='bg-red-400'></div>
        <div className='bg-red-300'></div>
        <div className='bg-red-200'></div>
        <div className='bg-red-100'></div>
        <div className='bg-red-50'></div>
        {/* blue */}
        <div className='bg-blue-900'></div>
        <div className='bg-blue-800'></div>
        <div className='bg-blue-700'></div>
        <div className='bg-blue-600'></div>
        <div className='bg-blue-500'></div>
        <div className='bg-blue-400'></div>
        <div className='bg-blue-300'></div>
        <div className='bg-blue-200'></div>
        <div className='bg-blue-100'></div>
        <div className='bg-blue-50'></div>
        {/* cyan */}
        <div className='bg-cyan-900'></div>
        <div className='bg-cyan-800'></div>
        <div className='bg-cyan-700'></div>
        <div className='bg-cyan-600'></div>
        <div className='bg-cyan-500'></div>
        <div className='bg-cyan-400'></div>
        <div className='bg-cyan-300'></div>
        <div className='bg-cyan-200'></div>
        <div className='bg-cyan-100'></div>
        <div className='bg-cyan-50'></div>
        {/* pink */}
        <div className='bg-pink-900'></div>
        <div className='bg-pink-800'></div>
        <div className='bg-pink-700'></div>
        <div className='bg-pink-600'></div>
        <div className='bg-pink-500'></div>
        <div className='bg-pink-400'></div>
        <div className='bg-pink-300'></div>
        <div className='bg-pink-200'></div>
        <div className='bg-pink-100'></div>
        <div className='bg-pink-50'></div>
        {/* yello */}
        <div className='bg-yellow-900'></div>
        <div className='bg-yellow-800'></div>
        <div className='bg-yellow-700'></div>
        <div className='bg-yellow-600'></div>
        <div className='bg-yellow-500'></div>
        <div className='bg-yellow-400'></div>
        <div className='bg-yellow-300'></div>
        <div className='bg-yellow-200'></div>
        <div className='bg-yellow-100'></div>
        <div className='bg-yellow-50'></div>
        {/* lime */}
        <div className='bg-lime-900'></div>
        <div className='bg-lime-800'></div>
        <div className='bg-lime-700'></div>
        <div className='bg-lime-600'></div>
        <div className='bg-lime-500'></div>
        <div className='bg-lime-400'></div>
        <div className='bg-lime-300'></div>
        <div className='bg-lime-200'></div>
        <div className='bg-lime-100'></div>
        <div className='bg-lime-50'></div>
        {/* viole */}
        <div className='bg-violet-900'></div>
        <div className='bg-violet-800'></div>
        <div className='bg-violet-700'></div>
        <div className='bg-violet-600'></div>
        <div className='bg-violet-500'></div>
        <div className='bg-violet-400'></div>
        <div className='bg-violet-300'></div>
        <div className='bg-violet-200'></div>
        <div className='bg-violet-100'></div>
        <div className='bg-violet-50'></div>
        {/* shadow */}
        <div className='shadow-green-900'></div>
        <div className='shadow-green-800'></div>
        <div className='shadow-green-700'></div>
        <div className='shadow-green-600'></div>
        <div className='shadow-green-500'></div>
        <div className='shadow-green-400'></div>
        <div className='shadow-green-300'></div>
        <div className='shadow-green-200'></div>
        <div className='shadow-green-100'></div>
        <div className='shadow-green-50'></div>
        {/* red */}
        <div className='shadow-red-900'></div>
        <div className='shadow-red-800'></div>
        <div className='shadow-red-700'></div>
        <div className='shadow-red-600'></div>
        <div className='shadow-red-500'></div>
        <div className='shadow-red-400'></div>
        <div className='shadow-red-300'></div>
        <div className='shadow-red-200'></div>
        <div className='shadow-red-100'></div>
        <div className='shadow-red-50'></div>
        {/* blue */}
        <div className='shadow-blue-900'></div>
        <div className='shadow-blue-800'></div>
        <div className='shadow-blue-700'></div>
        <div className='shadow-blue-600'></div>
        <div className='shadow-blue-500'></div>
        <div className='shadow-blue-400'></div>
        <div className='shadow-blue-300'></div>
        <div className='shadow-blue-200'></div>
        <div className='shadow-blue-100'></div>
        <div className='shadow-blue-50'></div>
        {/* cyan */}
        <div className='shadow-cyan-900'></div>
        <div className='shadow-cyan-800'></div>
        <div className='shadow-cyan-700'></div>
        <div className='shadow-cyan-600'></div>
        <div className='shadow-cyan-500'></div>
        <div className='shadow-cyan-400'></div>
        <div className='shadow-cyan-300'></div>
        <div className='shadow-cyan-200'></div>
        <div className='shadow-cyan-100'></div>
        <div className='shadow-cyan-50'></div>
        {/* pink */}
        <div className='shadow-pink-900'></div>
        <div className='shadow-pink-800'></div>
        <div className='shadow-pink-700'></div>
        <div className='shadow-pink-600'></div>
        <div className='shadow-pink-500'></div>
        <div className='shadow-pink-400'></div>
        <div className='shadow-pink-300'></div>
        <div className='shadow-pink-200'></div>
        <div className='shadow-pink-100'></div>
        <div className='shadow-pink-50'></div>
        {/* yello */}
        <div className='shadow-yellow-900'></div>
        <div className='shadow-yellow-800'></div>
        <div className='shadow-yellow-700'></div>
        <div className='shadow-yellow-600'></div>
        <div className='shadow-yellow-500'></div>
        <div className='shadow-yellow-400'></div>
        <div className='shadow-yellow-300'></div>
        <div className='shadow-yellow-200'></div>
        <div className='shadow-yellow-100'></div>
        <div className='shadow-yellow-50'></div>
        {/* lime */}
        <div className='shadow-lime-900'></div>
        <div className='shadow-lime-800'></div>
        <div className='shadow-lime-700'></div>
        <div className='shadow-lime-600'></div>
        <div className='shadow-lime-500'></div>
        <div className='shadow-lime-400'></div>
        <div className='shadow-lime-300'></div>
        <div className='shadow-lime-200'></div>
        <div className='shadow-lime-100'></div>
        <div className='shadow-lime-50'></div>
        {/* viole */}
        <div className='shadow-violet-900'></div>
        <div className='shadow-violet-800'></div>
        <div className='shadow-violet-700'></div>
        <div className='shadow-violet-600'></div>
        <div className='shadow-violet-500'></div>
        <div className='shadow-violet-400'></div>
        <div className='shadow-violet-300'></div>
        <div className='shadow-violet-200'></div>
        <div className='shadow-violet-100'></div>
        <div className='shadow-violet-50'></div>
        {/* hover */}
        <div className='hover:bg-green-900'></div>
        <div className='hover:bg-green-800'></div>
        <div className='hover:bg-green-700'></div>
        <div className='hover:bg-green-600'></div>
        <div className='hover:bg-green-500'></div>
        <div className='hover:bg-green-400'></div>
        <div className='hover:bg-green-300'></div>
        <div className='hover:bg-green-200'></div>
        <div className='hover:bg-green-100'></div>
        <div className='hover:bg-green-50'></div>
        {/* red */}
        <div className='hover:bg-red-900'></div>
        <div className='hover:bg-red-800'></div>
        <div className='hover:bg-red-700'></div>
        <div className='hover:bg-red-600'></div>
        <div className='hover:bg-red-500'></div>
        <div className='hover:bg-red-400'></div>
        <div className='hover:bg-red-300'></div>
        <div className='hover:bg-red-200'></div>
        <div className='hover:bg-red-100'></div>
        <div className='hover:bg-red-50'></div>
        {/* blue */}
        <div className='hover:bg-blue-900'></div>
        <div className='hover:bg-blue-800'></div>
        <div className='hover:bg-blue-700'></div>
        <div className='hover:bg-blue-600'></div>
        <div className='hover:bg-blue-500'></div>
        <div className='hover:bg-blue-400'></div>
        <div className='hover:bg-blue-300'></div>
        <div className='hover:bg-blue-200'></div>
        <div className='hover:bg-blue-100'></div>
        <div className='hover:bg-blue-50'></div>
        {/* cyan */}
        <div className='hover:bg-cyan-900'></div>
        <div className='hover:bg-cyan-800'></div>
        <div className='hover:bg-cyan-700'></div>
        <div className='hover:bg-cyan-600'></div>
        <div className='hover:bg-cyan-500'></div>
        <div className='hover:bg-cyan-400'></div>
        <div className='hover:bg-cyan-300'></div>
        <div className='hover:bg-cyan-200'></div>
        <div className='hover:bg-cyan-100'></div>
        <div className='hover:bg-cyan-50'></div>
        {/* pink */}
        <div className='hover:bg-pink-900'></div>
        <div className='hover:bg-pink-800'></div>
        <div className='hover:bg-pink-700'></div>
        <div className='hover:bg-pink-600'></div>
        <div className='hover:bg-pink-500'></div>
        <div className='hover:bg-pink-400'></div>
        <div className='hover:bg-pink-300'></div>
        <div className='hover:bg-pink-200'></div>
        <div className='hover:bg-pink-100'></div>
        <div className='hover:bg-pink-50'></div>
        {/* yello */}
        <div className='hover:bg-yellow-900'></div>
        <div className='hover:bg-yellow-800'></div>
        <div className='hover:bg-yellow-700'></div>
        <div className='hover:bg-yellow-600'></div>
        <div className='hover:bg-yellow-500'></div>
        <div className='hover:bg-yellow-400'></div>
        <div className='hover:bg-yellow-300'></div>
        <div className='hover:bg-yellow-200'></div>
        <div className='hover:bg-yellow-100'></div>
        <div className='hover:bg-yellow-50'></div>
        {/* lime */}
        <div className='hover:bg-lime-900'></div>
        <div className='hover:bg-lime-800'></div>
        <div className='hover:bg-lime-700'></div>
        <div className='hover:bg-lime-600'></div>
        <div className='hover:bg-lime-500'></div>
        <div className='hover:bg-lime-400'></div>
        <div className='hover:bg-lime-300'></div>
        <div className='hover:bg-lime-200'></div>
        <div className='hover:bg-lime-100'></div>
        <div className='hover:bg-lime-50'></div>
        {/* viole */}
        <div className='hover:bg-violet-900'></div>
        <div className='hover:bg-violet-800'></div>
        <div className='hover:bg-violet-700'></div>
        <div className='hover:bg-violet-600'></div>
        <div className='hover:bg-violet-500'></div>
        <div className='hover:bg-violet-400'></div>
        <div className='hover:bg-violet-300'></div>
        <div className='hover:bg-violet-200'></div>
        <div className='hover:bg-violet-100'></div>
        <div className='hover:bg-violet-50'></div>
        {/* ring */}
        <div className='ring-green-900'></div>
        <div className='ring-green-800'></div>
        <div className='ring-green-700'></div>
        <div className='ring-green-600'></div>
        <div className='ring-green-500'></div>
        <div className='ring-green-400'></div>
        <div className='ring-green-300'></div>
        <div className='ring-green-200'></div>
        <div className='ring-green-100'></div>
        <div className='ring-green-50'></div>
        {/* red */}
        <div className='ring-red-900'></div>
        <div className='ring-red-800'></div>
        <div className='ring-red-700'></div>
        <div className='ring-red-600'></div>
        <div className='ring-red-500'></div>
        <div className='ring-red-400'></div>
        <div className='ring-red-300'></div>
        <div className='ring-red-200'></div>
        <div className='ring-red-100'></div>
        <div className='ring-red-50'></div>
        {/* blue */}
        <div className='ring-blue-900'></div>
        <div className='ring-blue-800'></div>
        <div className='ring-blue-700'></div>
        <div className='ring-blue-600'></div>
        <div className='ring-blue-500'></div>
        <div className='ring-blue-400'></div>
        <div className='ring-blue-300'></div>
        <div className='ring-blue-200'></div>
        <div className='ring-blue-100'></div>
        <div className='ring-blue-50'></div>
        {/* cyan */}
        <div className='ring-cyan-900'></div>
        <div className='ring-cyan-800'></div>
        <div className='ring-cyan-700'></div>
        <div className='ring-cyan-600'></div>
        <div className='ring-cyan-500'></div>
        <div className='ring-cyan-400'></div>
        <div className='ring-cyan-300'></div>
        <div className='ring-cyan-200'></div>
        <div className='ring-cyan-100'></div>
        <div className='ring-cyan-50'></div>
        {/* pink */}
        <div className='ring-pink-900'></div>
        <div className='ring-pink-800'></div>
        <div className='ring-pink-700'></div>
        <div className='ring-pink-600'></div>
        <div className='ring-pink-500'></div>
        <div className='ring-pink-400'></div>
        <div className='ring-pink-300'></div>
        <div className='ring-pink-200'></div>
        <div className='ring-pink-100'></div>
        <div className='ring-pink-50'></div>
        {/* yello */}
        <div className='ring-yellow-900'></div>
        <div className='ring-yellow-800'></div>
        <div className='ring-yellow-700'></div>
        <div className='ring-yellow-600'></div>
        <div className='ring-yellow-500'></div>
        <div className='ring-yellow-400'></div>
        <div className='ring-yellow-300'></div>
        <div className='ring-yellow-200'></div>
        <div className='ring-yellow-100'></div>
        <div className='ring-yellow-50'></div>
        {/* lime */}
        <div className='ring-lime-900'></div>
        <div className='ring-lime-800'></div>
        <div className='ring-lime-700'></div>
        <div className='ring-lime-600'></div>
        <div className='ring-lime-500'></div>
        <div className='ring-lime-400'></div>
        <div className='ring-lime-300'></div>
        <div className='ring-lime-200'></div>
        <div className='ring-lime-100'></div>
        <div className='ring-lime-50'></div>
        {/* viole */}
        <div className='ring-violet-900'></div>
        <div className='ring-violet-800'></div>
        <div className='ring-violet-700'></div>
        <div className='ring-violet-600'></div>
        <div className='ring-violet-500'></div>
        <div className='ring-violet-400'></div>
        <div className='ring-violet-300'></div>
        <div className='ring-violet-200'></div>
        <div className='ring-violet-100'></div>
        <div className='ring-violet-50'></div>
        {/* border  */}
        <div className='border-green-900'></div>
        <div className='border-green-800'></div>
        <div className='border-green-700'></div>
        <div className='border-green-600'></div>
        <div className='border-green-500'></div>
        <div className='border-green-400'></div>
        <div className='border-green-300'></div>
        <div className='border-green-200'></div>
        <div className='border-green-100'></div>
        <div className='border-green-50'></div>
        {/* red */}
        <div className='border-red-900'></div>
        <div className='border-red-800'></div>
        <div className='border-red-700'></div>
        <div className='border-red-600'></div>
        <div className='border-red-500'></div>
        <div className='border-red-400'></div>
        <div className='border-red-300'></div>
        <div className='border-red-200'></div>
        <div className='border-red-100'></div>
        <div className='border-red-50'></div>
        {/* blue */}
        <div className='border-blue-900'></div>
        <div className='border-blue-800'></div>
        <div className='border-blue-700'></div>
        <div className='border-blue-600'></div>
        <div className='border-blue-500'></div>
        <div className='border-blue-400'></div>
        <div className='border-blue-300'></div>
        <div className='border-blue-200'></div>
        <div className='border-blue-100'></div>
        <div className='border-blue-50'></div>
        {/* cyan */}
        <div className='border-cyan-900'></div>
        <div className='border-cyan-800'></div>
        <div className='border-cyan-700'></div>
        <div className='border-cyan-600'></div>
        <div className='border-cyan-500'></div>
        <div className='border-cyan-400'></div>
        <div className='border-cyan-300'></div>
        <div className='border-cyan-200'></div>
        <div className='border-cyan-100'></div>
        <div className='border-cyan-50'></div>
        {/* pink */}
        <div className='border-pink-900'></div>
        <div className='border-pink-800'></div>
        <div className='border-pink-700'></div>
        <div className='border-pink-600'></div>
        <div className='border-pink-500'></div>
        <div className='border-pink-400'></div>
        <div className='border-pink-300'></div>
        <div className='border-pink-200'></div>
        <div className='border-pink-100'></div>
        <div className='border-pink-50'></div>
        {/* yello */}
        <div className='border-yellow-900'></div>
        <div className='border-yellow-800'></div>
        <div className='border-yellow-700'></div>
        <div className='border-yellow-600'></div>
        <div className='border-yellow-500'></div>
        <div className='border-yellow-400'></div>
        <div className='border-yellow-300'></div>
        <div className='border-yellow-200'></div>
        <div className='border-yellow-100'></div>
        <div className='border-yellow-50'></div>
        {/* lime */}
        <div className='border-lime-900'></div>
        <div className='border-lime-800'></div>
        <div className='border-lime-700'></div>
        <div className='border-lime-600'></div>
        <div className='border-lime-500'></div>
        <div className='border-lime-400'></div>
        <div className='border-lime-300'></div>
        <div className='border-lime-200'></div>
        <div className='border-lime-100'></div>
        <div className='border-lime-50'></div>
        {/* viole */}
        <div className='border-violet-900'></div>
        <div className='border-violet-800'></div>
        <div className='border-violet-700'></div>
        <div className='border-violet-600'></div>
        <div className='border-violet-500'></div>
        <div className='border-violet-400'></div>
        <div className='border-violet-300'></div>
        <div className='border-violet-200'></div>
        <div className='border-violet-100'></div>
        <div className='border-violet-50'></div>
    </div>
      </div>
      <div className="container  mx-auto min-h-screen w-full relative">
        {/* user head start */}
        <div className="w-full py-2 bg-gray-100 my-3 rounded-lg shadow-sm flex flex-col md:flex-row">
          <div
            className={`p-5 bg-gray-50 m-3 rounded-xl shadow-md flex-1 shadow-${color}-200`}
          >
            <h1 className={`text-3xl capitalize text-${color}-600`}>
              nahid hasan sagar
            </h1>
            <p>nahidhasan141400@gmail.com</p>
          </div>
          <div className="p-5 m-3 rounded-xl text-gray-800  flex-1 text-right">
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
              <a
                onClick={() => {
                  detTab("info");
                }}
                className={`tab tab-bordered ${
                  tab === "info" ? "tab-active" : ""
                }`}
              >
                information
              </a>
              <a
                onClick={() => {
                  detTab("update");
                }}
                className={`tab tab-bordered ${
                  tab === "update" ? "tab-active" : ""
                }`}
              >
                update
              </a>
              <a
                onClick={() => {
                  detTab("setting");
                }}
                className={`tab tab-bordered ${
                  tab === "setting" ? "tab-active" : ""
                }`}
              >
                settings
              </a>
              <a
                onClick={() => {
                  detTab("orders");
                }}
                className={`tab tab-bordered ${
                  tab === "orders" ? "tab-active" : ""
                }`}
              >
                Orders 
              </a>
            </div>
          </div>

          <div className="w-full relative">
            {tab === "update" ? <ChangeInfo /> : ""}
            {tab === "info" ? <UserInfo setpage={detTab} /> : ""}
            {tab === "orders" ? <Order /> : ""}
            {tab === "setting" ? (
              <>
                
                <ChangeColor />
                <ChangePassword/>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
