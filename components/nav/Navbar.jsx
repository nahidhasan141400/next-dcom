import Link from 'next/link';
import { useState } from "react";

import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';






// '@heroicons/react/24/outline'


const catagory = [
    "silk","New","Men","offer","Women","kids"
]


export default function Navbar() {

  const [open,setOpen] = useState(false);

  return (
    <>
    <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#">
                        <img className="w-auto h-16 sm:h-12" src={ "/img/logo/logo.png"} alt=""/>
                    </a>

                    <div className="hidden mx-10 md:block">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon  className="h-6 text-gray-500" />
                            </span>

                            <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                        </div>
                    </div>
                </div>

                <div className="flex lg:hidden">
                    <button onClick={()=>{
                      setOpen(!open)
                    }}  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                       <Bars3Icon className="h-6 h-6 text-gray-500" />
                    </button>
                </div>
            </div>

            <div className={`   ${ open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                <div className="flex flex-col md:flex-row md:mx-1">
                    <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                    <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Products</a>
                    <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Cart</a>
                    <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href="#">Login</a>
                </div>

                <div className="my-4 md:hidden">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon  className="h-6 text-gray-500" />
                        </span>

                        <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap text-center scroll-hidden">
                    {catagory.map((e,i)=>{
                        return(
                            <Link href='/' key={i}>
                            <span className="mx-4 text-sm leading-5 cursor-pointer text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-600 dark:hover:text-blue-400 md:my-0">{e}</span>
                            </Link>
                        )
                    })}
                
        </div>
    </div>
</nav>
    </>
  );
}
