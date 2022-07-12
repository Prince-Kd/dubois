import {
  ClockIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="lg:px-20 lg:py-14 bg-gray-800 w-screen">
      <div className="lg:grid grid-cols-4 mb-14">
        <div className="flex flex-row items-start gap-3 text-gray-100">
          <LocationMarkerIcon className="h-8 w-8 text-gray-100" />
          <div className="flex flex-col justify-start">
            <h1 className="text-xl font-bold text-gray-100 mb-2">Address</h1>
            <span>1 Second Circular Rd, Accra</span>
            <span></span>
          </div>
        </div>
        <div className="flex flex-row items-start gap-3 text-gray-100">
          <PhoneIcon className="h-8 w-8 text-gray-100" />
          <div className="flex flex-col justify-start">
            <h1 className="text-xl font-bold text-gray-100 mb-2">Reservations</h1>
            <span>
              <strong>Phone: </strong> 0123456789
            </span>
            <span>
              <strong>Email: </strong>info@dubois.com
            </span>
          </div>
        </div>
        <div className="flex flex-row items-start gap-3 text-gray-100">
          <ClockIcon className="h-8 w-8 text-gray-100" />
          <div className="flex flex-col justify-start">
            <h1 className="text-xl font-bold text-gray-100 mb-2">Opening Hours</h1>
            <span>
              <strong>Mon - Fri: </strong>8:00AM - 5:00PM
            </span>
            <span>
              <strong>{"Sat & Sun"} </strong>Closed
            </span>
          </div>
        </div>
        <div className="text-gray-100 flex flex-col">
          <h1 className="text-xl font-bold text-gray-100 mb-2">Follow us</h1>
          <div className="flex flex-row gap-3">
            <Link href="#">
              <a className="h-12 w-12 border-[1px] hover:animate-bounce flex flex-col justify-center items-center rounded-full">
                <FaTwitter className="h-4 w-4" />
              </a>
            </Link>
            <Link href="#">
              <a className="h-12 w-12 border-[1px] hover:animate-bounce flex flex-col justify-center items-center rounded-full">
                <FaFacebookSquare className="h-4 w-4" />
              </a>
            </Link>
            <Link href="#">
              <a className="h-12 w-12 border-[1px] hover:animate-bounce flex flex-col justify-center items-center rounded-full">
                <FaInstagram className="h-4 w-4" />
              </a>
            </Link>
            <Link href="#">
              <a className="h-12 w-12 border-[1px] hover:animate-bounce flex flex-col justify-center items-center rounded-full">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-10 text-center w-full text-gray-100">&copy; Copyright DuBois Meemorial Center, Accra</div>
    </footer>
  );
}
