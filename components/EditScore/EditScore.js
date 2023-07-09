import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import Scoring from "./Scoring";

function EditScore() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        onSlideChange={(e) => console.log(e)}
        onSwiper={(swiper) => console.log(swiper.browser)}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Scoring />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default EditScore;
