/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Museum", href: "/museum" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const activeRoute = (href) => {
    if (href === currentRoute) {
      return "border-b-2 border-b-[#EC994B] text-gray-800";
    } else {
      return "text-gray-500";
    }
  };

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="w-screen ">
            <div className="relative w-full flex flex-row items-center lg:px-4 lg:justify-between justify-end shadow-md h-20 drop-shadow-sm ">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex mx-4 items-center justify-center p-2 rounded-md text-orange-400 hover:text-[#EC994B] hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EC994B]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-shrink-0  items-center">
                <h1 className="flex flex-row mx-4 justify-end self-end lg:hidden h-8 w-auto text-2xl text-[#EC994B] font-semiBold">
                  W.E.B DuBois Center
                </h1>
                <h1 className="lg:block hidden h-8 w-auto text-3xl text-[#EC994B] font-bold">
                  W.E.B DuBois Center
                </h1>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="grid grid-cols-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          activeRoute(item.href),
                          "px-3 py-2  text-sm font-medium text-center hover:text-gray-800"
                        )}
                        aria-current={
                          item.href === currentRoute ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <button
                onClick={() => router.push("/booking")}
                type="button"
                className="h-10 hidden  hover:bg-white hover:text-[#EC994B] hover:border-2 hover:border-[#EC994B] px-3 shadow-md rounded-md bg-[#EC994B] text-white lg:flex flex-col justify-center items-center text-center"
              >
                Book a facility
              </button>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden flex flex-col  shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentRoute
                      ? "bg-[#EC994B] text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === currentRoute ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <button
              onClick={() => router.push("/booking")}
              type="button"
              className="h-12 mx-20 my-5  lg:hidden  bg-white text-[#EC994B] border-2 border-[#EC994B] px-3 shadow-md rounded-full flex flex-col justify-center items-center text-center"
            >
              Book a facility
            </button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
