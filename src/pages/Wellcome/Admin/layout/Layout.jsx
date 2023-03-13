import React from "react";
import Aside from "./Aside";
import Navbar from "./navbar";
const Layout = ({ children,user }) => {
  return (
    <div>
      {/* <div className='relative h-20'></div> */}
      <div className="flex relative w-full">
        {/* aside  */}
        <div className="md:relative absolute left-0  w-auto top-10  md:top-0 md:h-screen z-40 pr-3">
          <Aside />
        </div>
        {/* body  */}
        <div className="relative flex-1 md:pl-0 pl-14">
          <Navbar user={user} />
          <div className="w-full overflow-y-auto overflow-x-hidden demo">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
