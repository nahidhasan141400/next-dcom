import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { change } from "../../../store/Theme";

const ChangeColor = () => {



  const { color } = useSelector((s) => s.Theme);
  const dispatch = useDispatch();
  const handler = (col) => {
    localStorage.setItem("color", col);
    dispatch(change(col));
  };
  useEffect(()=>{
    const locCol = localStorage.getItem("color");
    if(locCol){
        handler(locCol);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <div className="w-full p-2 ">
        <p className="text-2xl pb-2">Change UI Color </p>
      </div>
      <div className=" px-4">
        <input
          checked={color == "blue"}
          onChange={() => {
            handler("blue");
          }}
          type="radio"
          name="r"
          title="blue"
          className="radio checked:bg-blue-500 bg-blue-600 appearance-none mx-2"
        />
        <input
          checked={color == "red"}
          onChange={() => {
            handler("red");
          }}
          type="radio"
          name="r"
          title="red"
          className="radio checked:bg-red-500 bg-red-600 appearance-none mx-2"
        />
        <input
          checked={color == "green"}
          onChange={() => {
            handler("green");
          }}
          type="radio"
          name="r"
          title="green"
          className="radio checked:bg-green-500 bg-green-600 appearance-none mx-2"
        />
        <input
          checked={color == "yellow"}
          onChange={() => {
            handler("yellow");
          }}
          type="radio"
          name="r"
          title="Yellow"
          className="radio checked:bg-yellow-500 bg-yellow-600 appearance-none mx-2"
        />
        <input
          checked={color == "pink"}
          onChange={() => {
            handler("pink");
          }}
          type="radio"
          name="r"
          title="pink"
          className="radio checked:bg-pink-500 bg-pink-600 appearance-none mx-2"
        />
        <input
          checked={color == "violet"}
          onChange={() => {
            handler("violet");
          }}
          type="radio"
          name="r"
          title="Violet"
          className="radio checked:bg-violet-500 bg-violet-600 appearance-none mx-2"
        />
        <input
          checked={color == "cyan"}
          onChange={() => {
            handler("cyan");
          }}
          type="radio"
          name="r"
          title="cyan"
          className="radio checked:bg-cyan-500 bg-cyan-600 appearance-none mx-2"
        />
        <input
          checked={color == "lime"}
          onChange={() => {
            handler("lime");
          }}
          type="radio"
          name="r"
          title="Lime"
          className="radio checked:bg-lime-500 bg-lime-600 appearance-none mx-2"
        />
      </div>
    </div>
  );
};

export default ChangeColor;
