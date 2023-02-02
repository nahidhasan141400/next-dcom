import React from "react";

const Sort = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex justify-between items-center mt-4 px-6">
      <div className="flex-1">
        <h1 className="md:text-3xl">Products</h1>
      </div>
      <div className="w-auto flex-1 flex justify-center h-5 items-center">
        <p className="block md:w-16 flex-1 md:text-2xl text-right px-1">sort_by:</p>
        <select className="select w-full flex-1 max-w-xs">
          <option disabled selected>
            sort by
          </option>
          <option>Recent</option>
          <option>Top sell</option>
          <option>price Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
