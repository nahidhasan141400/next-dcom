import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Curchange } from "../../store/Curr";

const CurrModal = () => {
  const dispatch = useDispatch();
  const { cur } = useSelector((s) => s.Curr);
  const btn = useRef();
  useEffect(() => {
    if (btn.current) {
      btn.current.click();
    }
  }, []);
  const changeHandler = (st)=>{
    localStorage.setItem("cur", st);
      dispatch(Curchange(st))
  };
  return (
    <>
      {cur === "nun" ? (
        <p>
          <label
            ref={btn}
            htmlFor="my-modal"
            className="btn absolute opacity-0"
          ></label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Are you in USA ?</h3>
              <p className="py-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">NO</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-500 bg-red-600"
                      checked 
                      onClick={()=>{changeHandler("NO")}}
                    /> 
                  </label>                  
                </div> 
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">YES</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500 bg-blue-500"
                    />
                  </label>
                </div>
              </p> 
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Done
                </label>
              </div>
            </div>
          </div>
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default CurrModal;
