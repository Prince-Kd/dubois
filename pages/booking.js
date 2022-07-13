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
    <div className="bg-gray-50">
      <Head>
        <title>Book a facility</title>
        <meta
          name="description"
          content="Book our conference rooms or open theather"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-screen lg:p-20">
        <h1 className="text-4xl font-medium  text-gray-700 text-center">
          BOOK A FACILITY
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="font-thin lg:text-4xl text-center"
        >
          BOOK OUR FACILITIES{" "}
          <text className="text-orange-600">FOR YOUR EVENTS</text>
        </h1>
      </section>
      <section className="lg:px-20 lg:pb-20 lg:grid grid-cols-3 gap-8">
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className=" shadow-md rounded-sm bg-white"
        >
          <div className="relative h-60">
            <Image src={"/hall.jpeg"} layout="fill" />
          </div>
          <div className="lg:p-5 flex flex-col gap-4">
            <span className="text-orange-600 lg:text-4xl text-center">
              GHC 2,500
            </span>
            <hr />
            <h1 className="lg:text-2xl  text-gray-800 text-center">CONFERENCE ROOM 1</h1>
            <span className="lg:text-lg text-center">
              <strong>Type: </strong>Indoor
            </span>
            <span className="lg:text-lg text-center">
              <strong>Capacity: </strong> 200 - 250 people
            </span>
            <hr />
            <button
              onClick={openModal}
              className="bg-orange-600 text-white rounded-full hover:border-2 hover:border-orange-600 lg:px-10 lg:h-10 text-center hover:bg-white hover:text-orange-600 self-center"
            >
              Book now
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className=" shadow-md rounded-sm bg-white"
        >
          <div className="relative h-60">
            <Image src={"/hall.jpeg"} layout="fill" />
          </div>
          <div className="lg:p-5 flex flex-col gap-4">
            <span className="text-orange-600 lg:text-4xl text-center">
              GHC 2,500
            </span>
            <hr />
            <h1 className="lg:text-2xl  text-gray-800 text-center">CONFERENCE ROOM 1</h1>
            <span className="lg:text-lg text-center">
              <strong>Type: </strong>Indoor
            </span>
            <span className="lg:text-lg text-center">
              <strong>Capacity: </strong> 200 - 250 people
            </span>
            <hr />
            <button
              onClick={openModal}
              className="bg-orange-600 text-white rounded-full hover:border-2 hover:border-orange-600 lg:px-10 lg:h-10 text-center hover:bg-white hover:text-orange-600 self-center"
            >
              Book now
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className=" shadow-md rounded-sm bg-white"
        >
          <div className="relative h-60">
            <Image src={"/hall.jpeg"} layout="fill" />
          </div>
          <div className="lg:p-5 flex flex-col gap-4">
            <span className="text-orange-600 lg:text-4xl text-center">
              GHC 2,500
            </span>
            <hr />
            <h1 className="lg:text-2xl  text-gray-800 text-center">CONFERENCE ROOM 1</h1>
            <span className="lg:text-lg text-center">
              <strong>Type: </strong>Indoor
            </span>
            <span className="lg:text-lg text-center">
              <strong>Capacity: </strong> 200 - 250 people
            </span>
            <hr />
            <button
              onClick={openModal}
              className="bg-orange-600 text-white rounded-full hover:border-2 hover:border-orange-600 lg:px-10 lg:h-10 text-center hover:bg-white hover:text-orange-600 self-center"
            >
              Book now
            </button>
          </div>
        </div>
        <BookingModal isOpen={isOpen} closeModal={closeModal} />
      </section>
    </div>
  );
}
