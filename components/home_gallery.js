import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function HomeGallery() {

  return (
    <Swiper
    data-aos="fade-up" data-aos-delay="900"
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      centeredSlides={{}}
      autoplay={{
        delay: 5000,
      }}
      // freeMode={true}
      // watchSlidesProgress={true}
      modules={[Autoplay]}
      className="mySwiper h-60 "
    >
      <SwiperSlide className="h-56 w-1/4 ">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-60 w-72 border-8 border-orange-600"
                : "h-56 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "border-8 border-orange-600" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide className="h-56 w-1/4">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-60 w-72 border-8 border-orange-600"
                : "h-56 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "border-8 border-orange-600" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide className="h-56 w-1/4">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-60 w-72 border-8 border-orange-600"
                : "h-56 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "border-8 border-orange-600" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide className="h-56 w-1/4">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-60 w-72 border-8 border-orange-600"
                : "h-56 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "border-8 border-orange-600" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
