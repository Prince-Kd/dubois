import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSwiper() {
  return (
    <Swiper
    data-aos="fade-up" data-aos-delay="900"
      // onSwiper={setThumbsSwiper}
      style={{
        "--swiper-pagination-color": "orange",
      }}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      pagination
      autoplay={{
        delay: 5000,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper h-72 "
    >
      <SwiperSlide className="relative h-full w-3/4 px-44 py-10  ">
        <div className="justify-between w-full gap-10 border-l-4 h-full border-l-orange-600 flex flex-row items-center pl-10">
            <div>

            </div>
            <div className="rounded-full border-4 border-white h-44 w-44 bg-blue-500">

            </div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-3/4 px-44 py-10 ">
        <div className="justify-between w-full gap-10 border-l-4 h-full border-l-orange-600 flex flex-row items-center pl-10">
            <div>

            </div>
            <div className="rounded-full border-4 border-white h-44 w-44 bg-blue-500">

            </div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-3/4 px-44 py-10 ">
        <div className="justify-between w-full gap-10 border-l-4 h-full border-l-orange-600 flex flex-row items-center pl-10">
            <div>

            </div>
            <div className="rounded-full border-4 border-white h-44 w-44 bg-blue-500">

            </div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-3/4 px-44 py-10 ">
        <div className="justify-between w-full gap-10 border-l-4 h-full border-l-orange-600 flex flex-row items-center pl-10">
            <div>

            </div>
            <div className="rounded-full border-4 border-white h-44 w-44 bg-blue-500">

            </div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
}
