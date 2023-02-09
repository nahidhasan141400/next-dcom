import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
const {color} = useSelector((state)=> state.Theme)
  return (
    <>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <a
                      href="#!"
                      className={`text-sm text-gray-400 focus:outline-none focus:text-${color}-500 hover:text-${color}-500 dark:hover:text-indigo-300`}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <Link href={"/user"}>
                      <button
                        type="button"
                        className={`w-full px-3 py-4 text-white bg-${color}-500 rounded-md hover:bg-${color}-600 focus:bg-indigo-600 focus:outline-none`}
                      >
                        Sign in
                      </button>
                  </Link>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?
                  <Link href="/signup">
                    <a className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                      Sign up
                    </a>
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
