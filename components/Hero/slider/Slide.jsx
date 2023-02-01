import Image from "next/image";
import Style from "./slide.module.scss";

const Slide = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className={Style.con}>
        <div className="w-full h-96 relative">
          <Image
            src="/img/baner/b1.jpg"
            alt={"img"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-full h-96 relative">
          <Image
            src="/img/baner/b1.jpg"
            alt={"img"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-full h-96 relative">
          <Image
            src="/img/baner/b1.jpg"
            alt={"img"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
