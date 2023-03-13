import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { GiAtSea } from "react-icons/gi";
import { RiToolsFill, RiUserSettingsLine } from "react-icons/ri";
import { RxActivityLog, RxAspectRatio, RxClipboardCopy, RxCodesandboxLogo, RxDesktop, RxMix } from "react-icons/rx";
const Aside = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: RxActivityLog ,link:'/Wellcome/Admin'},
    { title: "Orders", src: RxClipboardCopy,link:'/Wellcome/order' },
    { title: "Products", src: RxCodesandboxLogo, gap: true ,link:'/Wellcome/Admin/Product'},
    { title: "category", src: RxMix ,link:'/Wellcome/Admin/category' },
    { title: "Front-End", src: RxDesktop ,gap:true ,link:'/Wellcome/frontend'},
    { title: "Pages", src: RxAspectRatio ,link:'/Wellcome/page'},
    { title: "Setting", src: RiToolsFill, gap: true ,link:'/Wellcome/setting' },
    { title: "User", src: RiUserSettingsLine ,link:'/Wellcome/user' },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <span
          className={`absolute cursor-pointer -right-3 top-9 bg-slate-100 w-7 h-7 text-2xl flex justify-center items-center rounded-full border-dark-purple
           border-2   ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <BsArrowLeftCircleFill />
        </span>

        <div className="flex gap-x-4 items-center">
          <span
            className={`cursor-pointer duration-500 bg-slate-100 p-1 text-2xl ${
              open && "rotate-[360deg]"
            }`}
          >
            <GiAtSea />
          </span>

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DashBoard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link key={index} href={Menu.link}>
            <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9 border-t border-slate-600" : "mt-2"} ${
                router.asPath === Menu.link ? 'bg-light-white' : '' 
              } `}
            >
              
              <span className="text-xl">
                <Menu.src />
              </span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            
              
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;

// // <!-- drawer init and show -->
// <div className="text-center">
//    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" ariaControls="drawer-navigation">
//    Show navigation
//    </button>
// </div>

// // <!-- drawer component -->
