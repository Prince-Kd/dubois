import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSwiper() {
  return (
    <Swiper
      data-aos="fade-up"
      data-aos-delay="900"
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
      className="mySwiper lg:min-h-72 "
    >
      <SwiperSlide className="relative h-full w-full  lg:px-44">
        <div className="justify-between w-full lg:gap-10 gap-4 border-l-4 h-full border-l-orange-600 flex flex-col items-center lg:pl-10 pl-5">
          <div className="flex flex-col lg:gap-4 gap-2 lg:w-2/3">
            <div className="flex flex-wrap flex-row">
              <FaQuoteLeft className="text-orange-600 font medium" />
              <span className="lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              <FaQuoteRight className="text-orange-600 font medium" />
            </div>
          </div>
          <div className="rounded-full border-4 border-white  lg:h-40 lg:w-40 h-24 w-24 bg-blue-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-full lg:px-44">
        <div className="justify-between w-full lg:gap-10 gap-4 border-l-4 h-full border-l-orange-600 flex flex-col items-center lg:pl-10 pl-5">
          <div className="flex flex-col lg:gap-4 gap-2 lg:w-2/3">
            <div className="flex flex-wrap flex-row">
              <FaQuoteLeft className="text-orange-600 font medium" />
              <span className=" lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              <FaQuoteRight className="text-orange-600 font medium" />
            </div>
          </div>
          <div className="rounded-full border-4 border-white lg:h-40 lg:w-40  h-24 w-24 bg-blue-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-full lg:px-44">
        <div className="justify-between w-full lg:gap-10 gap-4 border-l-4 h-full border-l-orange-600 flex flex-col items-center lg:pl-10 pl-5">
          <div className="flex flex-col lg:gap-4 gap-2 lg:w-2/3">
            <div className="flex flex-wrap flex-row">
              <FaQuoteLeft className="text-orange-600  font medium" />
              <span className=" lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              <FaQuoteRight className="text-orange-600 font medium" />
            </div>
          </div>
          <div className="rounded-full border-4 border-white lg:h-40 lg:w-40  h-24 w-24 bg-blue-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative h-full w-full lg:px-44">
        <div className="justify-between w-full lg:gap-10 gap-4 border-l-4 h-full border-l-orange-600 flex flex-col items-center lg:pl-10 pl-5">
          <div className="flex flex-col lg:gap-4 gap-2 lg:w-2/3">
            <div className="flex flex-wrap flex-row">
              <FaQuoteLeft className="text-orange-600 font medium" />
              <span className=" lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              <FaQuoteRight className="text-orange-600 font medium" />
            </div>
          </div>
          <div className="rounded-full border-4 border-white lg:h-40 lg:w-40  h-24 w-24 bg-blue-500"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
