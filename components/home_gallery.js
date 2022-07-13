import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function HomeGallery() {
  const [width, setWidth] = useState();
    useEffect(() => {
        // console.log(webinars);
        if (typeof window !== "undefined") {
          setWidth(window.innerWidth);
        }
    })
  return (
    <Swiper
    data-aos="fade-up" data-aos-delay="600"
      loop={true}
      spaceBetween={10}
      slidesPerView={width <= 500 ? 2 : 4}
      centeredSlides={{}}
      autoplay={{
        delay: 5000,
      }}
      // freeMode={true}
      // watchSlidesProgress={true}
      modules={[Autoplay]}
      className="mySwiper h-52 "
    >
      <SwiperSlide className="h-56 w-1/2 ">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-52 w-72 "
                : "h-48 w-full mt-2 relative"
            }`}
          >
            <Image
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
  </SwiperSlide>
      <SwiperSlide className="h-56 w-1/2">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-52 w-72 "
                : "h-48 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
  </SwiperSlide>
      <SwiperSlide className="h-56 w-1/2">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-52 w-72 "
                : "h-48 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
  </SwiperSlide>
      <SwiperSlide className="h-56 w-1/2">
        {({ isActive }) => (
          <div
            className={`${
              isActive
                ? "h-52 w-72 "
                : "h-48 w-full mt-2 relative"
            }`}
          >
            <Image
              className={`${isActive ? "" : ""}`}
              layout="fill"
              src="/zion.jpeg"
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
