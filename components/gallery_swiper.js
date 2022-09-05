import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { XIcon } from "@heroicons/react/outline";

export default function GallerySwiper({ isOpen, closeModal, image }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-hidden">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="h-[100vh] overflow-hidden w-screen transition-all relative">
                <button onClick={closeModal} className="text-white font-medium text-4xl absolute top-10 right-10  z-50">
                    <XIcon className="text-white h-8 w-8" />
                </button>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                //   spaceBetween={50}
                  slidesPerView={1}
                  navigation
                //   pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  className="lg:h-screen h-[550px] w-full"
                >
                  <SwiperSlide  className="flex flex-col justify-center items-center ">
                    <div className="h-full w-[85vw] my-32 relative z-100" onClick={() => {console.log("")}}>
                    <Image src={"/zion.jpeg"}  layout={"fill"} className="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="flex flex-col  justify-center items-center ">
                    <div className="h-full w-[85vw] my-32 relative z-100" onClick={() => {console.log("")}}>
                    <Image src={"/zion.jpeg"}  layout={"fill"} className="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="flex flex-col  justify-center items-center ">
                    <div className="h-full w-[85vw] my-32 relative z-100" onClick={() => {console.log("")}}>
                    <Image src={"/zion.jpeg"}  layout={"fill"} className="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="flex flex-col  justify-center items-center ">
                    <div className="h-full w-[85vw] my-32 relative z-100" onClick={() => {console.log("")}}>
                    <Image src={"/zion.jpeg"}  layout={"fill"} className="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
