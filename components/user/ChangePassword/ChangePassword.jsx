import React from "react";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const { color } = useSelector((s) => s.Theme);
  return (
    <div>
      <section
        className={`max-w-4xl p-6 mx-auto bg-white  rounded-md md:shadow-md mt-2 md:ring-1 ring-${color}-400`}
      >
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Change password
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="username"
              >
                New Password
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Confirm New Password
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Current Password
              </label>
              <input
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-${color}-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600`}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ChangePassword;
