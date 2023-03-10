import React from "react";
import { useSelector } from "react-redux";
import Address from "./Address";
import Table from "./Table";


const UserInfo = ({setpage}) => {
  const {color} = useSelector((s)=>s.Theme)
  return (
    <div className="w-full relative p-4 py-3 flex flex-col md:flex-row">
      <div className="flex-1 p-3 bg-gray-100 rounded-xl shadow-md m-1 relative">
        <div>
          <p className={`w-full text-center text-lg text-${color}-500 capitalize`}>
            user information
          </p>
        </div>
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-sm md:text-lg text-gray-500">Name: </span>
          <span className="text-sm md:text-lg  capitalize">
            Nahid Hasan Sagar
          </span>
        </div>
        {/* info end  */}
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-sm md:text-lg  text-gray-500">email: </span>
          <span className="text-sm md:text-lg">nahidhasan141400@gmail.com</span>
        </div>
        {/* info end  */}
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-sm md:text-lg text-gray-500">phone: </span>
          <span className="text-sm md:text-lg ">01234567890</span>
        </div>
        <div className="w-full text-right">
          <button onClick={()=>{setpage("update")}} className={`btn bg-${color}-400 hover:bg-${color}-600 border-none text-gray-800 hover:shadow-lg`}>
            {" "}
            <span className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </span>{" "}
            update Info
          </button>
        </div>
        {/* info end  */}
      </div>
      <div className="flex-1 w-full p-3 bg-blue-50 m-1 rounded-xl shadow-md">
        <div className="w-full flex justify-between">
          <p className={`text-lg text-${color}-500 capitalize`}>Shipping Address</p>
          <label htmlFor={"addadress"} className={`btn btn-sm bg-${color}-400 hover:bg-${color}-300 border-none text-gray-800 hover:shadow-lg`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            
            add addresse
          </label>
          <Address id={"addadress"}/>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
