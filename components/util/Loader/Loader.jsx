import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import style from "./l.module.scss";

 export const Contextload = createContext();

 export const useLoader = ()=>{
      const setLoad = useContext(Contextload)
      return setLoad;
 }



const Loader = ({ children }) => {
  const { color } = useSelector((s) => s.Theme);

  const [load, SetLoad] = useState(true);

  return (
    <Contextload.Provider value={SetLoad}>
      <div>
        {load ? (
          <div className={`${style.main}`}>
            <div
              className={`${style.bar} bg-${color}-500 shadow-md shadow-${color}-200`}
            ></div>
          </div>
        ) : (
          ""
        )}
        {children}
      </div>
    </Contextload.Provider>
  );
};
export default Loader;
