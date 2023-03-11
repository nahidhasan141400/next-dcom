import React from 'react'
import Aside from "./Aside"
import Navbar from './navbar'
const Layout = ({children}) => {
  return (
    <div>
        
        {/* <div className='relative h-20'></div> */}
        <div className='flex relative w-full'>
          {/* aside  */}
          <div className='relative w-auto  h-screen z-40 pr-3'>
              <Aside/>
          </div>
          {/* body  */}
          <div className='relative flex-1'>
            
          <Navbar/>
          <div  className='w-full overflow-y-auto overflow-x-hidden demo'>
            {children}
          </div>
          </div>
        </div>
    </div>
  )
}

export default Layout