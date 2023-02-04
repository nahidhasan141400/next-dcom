import React from "react";

const UserInfo = () => {
  return (
    <div className="w-full relative p-4 py-3 flex flex-row ">
      <div className="flex-1 p-3 bg-gray-100 rounded-xl shadow-md m-1 relative">
        <div>
            <p className="w-full text-center text-lg text-blue-500 capitalize">user information</p>
        </div>
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-lg text-gray-500">Name: </span>
          <span className="text-lg  capitalize">
            Nahid Hasan Sagar
          </span>
        </div>
        {/* info end  */}
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-lg  text-gray-500">email: </span>
          <span className="text-lg">
            nahidhasan141400@gmail.com
          </span>
        </div>
        {/* info end  */}
        {/* ifo  */}
        <div className="py-2 ml-2">
          <span className="text-lg text-gray-500">phone: </span>
          <span className="text-lg ">
            01234567890
          </span>
        </div>
        {/* info end  */}
      </div>
      <div className="flex-1 w-full p-3 bg-blue-50 m-1 rounded-xl shadow-md"></div>
    </div>
  );
};

export default UserInfo;
