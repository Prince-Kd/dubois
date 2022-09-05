import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import BookingModal from "../components/booking_modal";

export default function Booking() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="">
      <Head>
        <title>Book a facility</title>
        <meta
          name="description"
          content="Book our conference rooms or open theather"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-screen lg:p-20 p-10">
        <h1 className="text-4xl font-medium  text-gray-700 text-center">
          BOOK A FACILITY
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="font-thin lg:text-4xl text-center"
        >
          BOOK OUR FACILITIES{" "}
          <text className="text-[#EC994B]">FOR YOUR EVENTS</text>
        </h1>
      </section>
      <section className="lg:px-20 px-10 lg:pb-20 pb-10 lg:grid flex flex-col grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div data-aos="fade-up" data-aos-delay="700" className="flex flex-col gap-2">
              <div className="relative h-52 rounded-xl">
                <div className="absolute right-3 lg:text-sm text-xs z-50 font-bold text-white top-3 shadow-md rounded-full px-2 py-1 bg-[#EC994B]">
                  GHC 1,500
                </div>
                <Image
                  src={"/hall.jpeg"}
                  layout="fill"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="lg:text-lg  text-gray-800 font-bold">
                  CONFERENCE ROOM 1
                </h1>
                <span className="text-gray-600">
                  <strong>Type: </strong>Indoor
                </span>
                <span className="text-gray-600">
                  <strong>Capacity: </strong> 200 - 250 people
                </span>
                <button
                  onClick={openModal}
                  className="mt-2 text-[#EC994B] bg-white rounded-lg border-2 border-[#EC994B] lg:px-10 px-5 lg:h-12 h-10 text-center hover:bg-[#EC994B] hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
        <BookingModal isOpen={isOpen} closeModal={closeModal} available={null} />
      </section>
    </div>
  );
}
