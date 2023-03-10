import React from 'react'
import Aside from "./Aside"
import Navbar from './navbar'
const Layout = () => {
  return (
    <div>
        
        {/* <div className='relative h-20'></div> */}
        <div className='flex relative w-full'>
          {/* aside  */}
          <div className='relative w-48 px-3 h-screen z-40 p-3'>
              <Aside/>
          </div>
          {/* body  */}
          <div className='relative flex-1'>
          <Navbar/>
          <div  className='w-full overflow-y-auto overflow-x-hidden demo'>
            <p>Loreptas in, nostrum eaque atque, totam officiis, dolorem voluptatibus tempore aliquam cum? Laborum, quibusdam pariatur amet veritatis illo autem suscipit consectetur qui quaerat debitis eius dicta id omnis?
            Dolorem voluptatum corporis placeat eos architecto quam a, itaque libero? Laborum cupiditate quod eveniet ipsam? Consequatur perferendis ad illo harum est dignissimos, dolor itaque aperiam omnis nostrum. Commodi, explicabo quaerat!
            Quis adipisci soluta, facilis laboriosam magni voluptas quod neque amet inventore sequi laborum ab labore sit reiciendis. </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Layout