import Image from "next/image";
import Style from "./slide.module.scss";

const Slide = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className={Style.con}>
        <div className="w-full h-96 flex-1 relative">
          <Image
            src="/img/baner/b2.jpg"
            alt={"img"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-96 flex-1 relative">
          <Image
            src="/img/baner/b1.jpg"
            alt={"img"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-96 flex-1 relative">
          <Image
            src="/img/baner/b3.jpg"
            alt={"img"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
