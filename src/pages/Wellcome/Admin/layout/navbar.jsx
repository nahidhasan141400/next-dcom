import { useRouter } from 'next/router';
import React, { useState } from "react";
import { toast } from "react-toastify";

const Navbar = ({user}) => {
  const [avater, setAvater] = useState(false);
  const router = useRouter()

  const logout = ()=>{
    document.cookie = "cart=''";
    router.push('/');
    setTimeout(()=>{
      window.location.reload();
    },2000)
    toast.success("logout");

  }
  return (
    <div className="w-full relative top-0 left-0 backdrop-blur-md text-underline h-16 flex justify-center items-center z-50">
      <div className=" relative w-full flex justify-between mx-auto px-5 py-3">
        <div>
          <h1 className="font-extrabold text-2xl text-slate-900">
            Welcome {user.name}
          </h1>
        </div>
        <div className="relative">
          <img
            onClick={() => {
              setAvater((s) => !s);
            }}
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 bg-slate-500 hover:p-2 cursor-pointer"
            src="/img/logo/logo.png"
            alt="Bordered avatar"
          />
          <div
            className={`bg-slate-200 rounded-lg shadow-md absolute right-0 whitespace-nowrap ease-in mt-2  ${
              avater
                ? "h-auto overflow-hidden p-10"
                : "h-0 overflow-hidden p-0 py-0"
            } py-2`}
          >
            <ul>
              <li className="my-2">
                <a
                  href="#"
                  className="text-xl cursor-pointer text-slate-900 hover:text-slate-700 whitespace-nowrap flex items-center"
                >
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </span>
                  setting
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-xl cursor-pointer text-slate-900 hover:text-slate-700 whitespace-nowrap flex items-center"
                >
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </span>
                  profile
                </a>
              </li>
              <li className="my-2">
                <a
                  onClick={logout}
                  className="text-xl cursor-pointer text-slate-900 hover:text-slate-700 whitespace-nowrap flex items-center"
                >
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </span>
                  logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
