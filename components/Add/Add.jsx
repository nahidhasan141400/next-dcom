import style from "./Add.module.scss";

const Add = () => {
  return (
    <div className={style.add}>
        <div className={style.one}>
            <img src="/img/baner/b1.jpg" alt="" />
        </div>
        <div className={style.tow}>
            <div className={style.tcon}>
                <img src="/img/baner/b2.jpg" alt="" />
            </div>
            <div className={style.tcon}>
                <img src="/img/baner/b3.jpg" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Add;
