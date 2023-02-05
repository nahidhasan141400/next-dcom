import React from "react";
import Module from "./Moduls";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nahid</td>
              <td>01741013363</td>
              <td><label htmlFor={"nahid"} className="underline text-blue-600 cursor-pointer hover:text-blue-800">details</label></td>
              <Module id={"nahid"}/>
            </tr>
            <tr>
              <td>hasan</td>
              <td>01741013363</td>
              <td><label htmlFor={"hasan"} className="underline text-blue-600 cursor-pointer hover:text-blue-800">details</label></td>
              <Module id={"hasan"}/>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
