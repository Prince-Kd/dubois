import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Formik } from "formik";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./spinner";

export default function BookingModal({
  isOpen,
  closeModal,
  facility,
  available,
}) {
  const [checking, setChecking] = useState(false);
  const [date, setDate] = useState(null);
  const [active, setActive] = useState(0);
  const images = ["/hall.jpeg", "/room2.jpg", "/room3.jpg"];
  const [isAvailable, setIsAvailiable] = useState(available);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => {
          closeModal();
          setIsAvailiable(null);
          setDate(null);
          setActive(0);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 lg:overflow-y-hidden lg:py-14 lg:p-14 h-screen">
          <div className="flex h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-screen h-full  relative transform lg:overflow-y-hidden overflow-y-auto rounded-2xl bg-white text-left align-middle shadow-xl transition-all lg:pb-10 ">
                <Dialog.Title
                  as="div"
                  className=" flex flex-row px-8 py-4 justify-between items-center sticky top-0 bg-white z-50"
                >
                  <span className="text-lg font-medium leading-6 text-gray-900">
                    Facility Details
                  </span>
                  <XIcon
                    onClick={() => {
                      closeModal();
                      setIsAvailiable(null);
                      setDate(null);
                      setActive(0);
                    }}
                    className="cursor-pointer border-2 rounded-md border-[#EC994B] hover:text-[#EC994B] lg:text-lg font-bold  text-gray-900 h-8 w-8"
                  />
                </Dialog.Title>
                <div className="lg:pb-10  lg:grid grid-cols-2 lg:h-full flex flex-col">
                  <div className="border-r-2 border-r-gray-300 px-8 flex flex-col gap-4 overflow-y-auto">
                    <div className="lg:grid grid-cols-3 flex flex-col gap-6">
                      <div className="lg:col-span-2 lg:h-full h-52  relative rounded-md">
                        <Image
                          src={images[active]}
                          layout="fill"
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex lg:flex-col flex-row w-full justify-between gap-4">
                        <div
                          className={`lg:h-24 h-20 w-full relative rounded-lg ${
                            active === 0 ? "border-4 border-[#EC994B]" : ""
                          }  lg:text-lg font-bold`}
                        >
                          <Image
                            onClick={() => setActive(0)}
                            src={images[0]}
                            layout="fill"
                            className="rounded-md cursor-pointer"
                          />
                        </div>
                        <div
                          className={`lg:h-24 h-20 w-full relative rounded-lg ${
                            active === 1 ? "border-4 border-[#EC994B]" : ""
                          } lg:text-lg font-bold`}
                        >
                          <Image
                            onClick={() => setActive(1)}
                            src={images[1]}
                            layout="fill"
                            className="rounded-md cursor-pointer"
                          />
                        </div>
                        <div
                          className={`lg:h-24 h-20 w-full relative rounded-lg ${
                            active === 2 ? "border-4 border-[#EC994B]" : ""
                          } lg:text-lg font-bold`}
                        >
                          <Image
                            onClick={() => setActive(2)}
                            src={images[2]}
                            layout="fill"
                            className="rounded-md cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <h1 className="lg:text-3xl text-2xl font-medium text-gray-700">
                      CONFERENCE ROOM 1
                    </h1>
                    <div className="flex flex-col gap-2">
                      <span className="font-medium text-lg">Details</span>
                      <span className="text-gray-600">
                        Lorem tempor commodo elit nulla nisi nulla velit dolore
                        tempor ad minim laborum nulla eiusmod. Laboris officia
                        officia nostrud do ex nostrud Lorem dolore consequat
                        amet mollit. Eu commodo sint duis ipsum sit aliquip
                        dolor irure tempor enim non dolor. Consectetur aliquip
                        mollit quis non nisi id ullamco excepteur enim ut quis
                        eu. Culpa nostrud officia magna sunt consectetur mollit
                        sit.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-8 gap-4 overflow-y-hidden">
                    <span className="lg:text-4xl text-2xl font-bold text-[#EC994B]">
                      GHC 2,500
                    </span>
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-lg">Capacity</h1>
                        <span className="text-gray-600">200-300 people</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-lg">Type</h1>
                        <span className="text-gray-600">Indoors</span>
                      </div>
                    </div>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        address: "",
                        phone: "",
                        purpose: "",
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.name) {
                          errors.name = "Full name is required";
                        } else if (!values.email) {
                          errors.email = "Email is required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        } else if (!values.address) {
                          errors.address = "Address is required";
                        } else if (!values.phone) {
                          errors.phone = "Phone number is required";
                        } else if (!values.purpose) {
                          errors.purpose = "Purpose is required";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {}}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }) => (
                        <form className="flex flex-col gap-2">
                          <div className="flex flex-col gap-1 w-full">
                            <h1 className="font-medium text-lg">
                              Check Availability
                            </h1>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 w-full justify-between">
                              <input
                                required
                                type="date"
                                className="rounded-md border-2 p-2 h-10 w-full"
                                name="date"
                                onChange={(e) => {
                                  setIsAvailiable(null);
                                  setDate(e.target.value);
                                }}
                                value={date}
                              />
                              {/* <input
                          type={"time"}
                          className="rounded-md border-2 p-2 h-10 w-full"
                        /> */}
                              {date ? (
                                isAvailable ? (
                                  <span className="text-green-600 flex flex-row gap-2 items-center">
                                    <CheckCircleIcon className="h-5 w-5" />{" "}
                                    Available{" "}
                                  </span>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={async () => {
                                      console.log(values.date);
                                      setChecking(true);
                                      await axios
                                        .post(
                                          "http://localhost:3000/api/facility/check-availability",
                                          {
                                            facilityId:
                                              "63151b0b6cb2afc172b84d0",
                                            date: values.date,
                                          }
                                        )
                                        .then((res) => {
                                          setChecking(false);
                                          if (res.status === 400) {
                                            return toast.error(
                                              res.data.message,
                                              {
                                                position:
                                                  toast.POSITION.BOTTOM_CENTER,
                                              }
                                            );
                                          }
                                          setIsAvailiable(true);
                                          return;
                                        });
                                    }}
                                    className="rounded-md w-full bg-[#EC994B] text-white h-10 text-center"
                                  >
                                    {checking ? (
                                      <div className="flex flex-row gap-2 items-center justify-center">
                                        {" "}
                                        <Spinner /> Checking...
                                      </div>
                                    ) : (
                                      "Check"
                                    )}
                                  </button>
                                )
                              ) : (
                                <></>
                              )}
                            </div>
                            <span className="text-sm text-red-500"></span>
                          </div>
                          <div
                            className={` flex-col gap-2 ${
                              isAvailable ? "flex" : "hidden"
                            }`}
                          >
                            <h1 className="font-medium text-lg">
                              Enter Details
                            </h1>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 gap-y-2">
                              <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="rounded-md border-2 p-2 h-10"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              <input
                                type={"email"}
                                required
                                placeholder="Email"
                                className="rounded-md border-2 p-2 h-10"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                            </div>
                            <div className="grid lg:grid-cols-2 gap-2 gap-y-2">
                              <input
                                type="text"
                                placeholder="Address"
                                className="rounded-md border-2 p-2 h-10"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                              />
                              <input
                                type={"text"}
                                required
                                placeholder="Phone"
                                className="rounded-md border-2 p-2 h-10"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                              />
                            </div>
                            <textarea
                              required
                              placeholder="What will the facility be used for?"
                              className="lg:h-32 h-20 rounded-md p-2 border-2"
                              name="purpose"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.purpose}
                            ></textarea>
                            <button className="rounded-md bg-[#EC994B] lg:text-lg font-bold mt-4 text-white h-12 lg:h-14 text-center">
                              Book facility
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
