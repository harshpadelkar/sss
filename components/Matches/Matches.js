import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PendingMatches from "./PendingMatches";

// Import Swiper styles
import "swiper/css";

const Matches = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(e) => console.log(e)}
      onSwiper={(swiper) => console.log(swiper.browser)}
    >
      <SwiperSlide>
        <PendingMatches />
      </SwiperSlide>
      <SwiperSlide>
        <PendingMatches />
      </SwiperSlide>
      <SwiperSlide>
        <PendingMatches />
      </SwiperSlide>
      <SwiperSlide>
        <PendingMatches />
      </SwiperSlide>
    </Swiper>
  );
};

export default Matches;
