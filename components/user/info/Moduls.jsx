import React from "react";

const Moduls = ({ id }) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="w-full py-3">
            <div className="w-full text-center ">
              <p className="text-2xl capitalize ">{id}</p>
            </div>
            <div>
              <span className="capitalize text-gray-800">name: </span>
              <span className=" text-black">nahid</span>
            </div>
            <div>
              <span className="capitalize text-gray-800">phone: </span>
              <span className=" text-black text-sm">01741013363</span>
            </div>
            <div>
              <span className="capitalize text-gray-800">address: </span>
              <span className="text-sm text-black">
                Chattogram,Chandpur - Matlab,Matlab Uttar
                Amiyapur,hapaniya,beltolibajar
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <label htmlFor={id} className="btn">
              closed
            </label>
            <button className="btn bg-blue-400 hover:bg-blue-300 border-none text-gray-800 hover:shadow-lg">
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moduls;
