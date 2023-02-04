// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CataAdd = () => {


  const params = {
    spaceBetween:30,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination:{
      clickable: true,
    },
    loop:true,
    modules:[Autoplay, Pagination],
    className:"mySwiper",
  }


  return (
    <div className="w-full h-auto container mx-auto">
      <Swiper {...params} slidesPerView={2} spaceBetween={50}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((e, i) => {
          return (
            <SwiperSlide tag="div"  key={i}>
              <div className="w-full h-36 flex flex-col justify-center items-center relative bg-gray-50 rounded-sm  shadow-sm mb-14 text-center hover:transform hover:shadow-lg cursor-pointer">
                <div className="avatar ">
                  <div className="w-24 mask mask-squircle 0">
                    <img
                      className="object-cover"
                      src="/img/product/pr (1).jpeg"
                    />
                  </div>
                </div>
                <p className="w-full relative text-center text-2xl">silk</p>
              </div>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  );
};

export default CataAdd;
