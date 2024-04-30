// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      effect="cube"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      height={300}
      autoplay={true}
      pagination={true}
      //   className="max-h-40 lg:max-h-[550px] w-full"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="max-h-60 lg:max-h-[550px] w-full"
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/HpWJ4MY/crafted-Reflection-14.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/J5mcK4q/crafted-Reflection-19.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/Fsp9WNW/crafted-Reflection-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/ZTxHcR3/crafted-Reflection-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/Y71MXb1/crafted-Reflection-6.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/G5Qpxrk/crafted-Reflection-7.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
