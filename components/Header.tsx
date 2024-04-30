"use client";
import Link from "next/link";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { GiClownfish } from "react-icons/gi";

const Header: React.FC = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="sticky top-0 max-w-6xl flex m-auto border-b border-opacity-20 border-b-custom-sec ">
      <div className={` flex backdrop-blur-md  top-0 left-0 w-full`}>
        <div className="px-5 py-1 lg:px-4">
          <a className="block text-2xl lg:text-2xl font-normal xl:text-3xl xl:mr-8">
            <p className="flex items-center gap-2">
              <GiClownfish className="text-custom-sec" />
              Travelling
              <span className="text-custom-pri font-bold"> NEMO</span>
            </p>
          </a>
        </div>
      </div>
      <nav
        className={`${
          openNavigation ? "flex w-full " : "hidden"
        } fixed top-0 left-0 backdrop-blur-md  bottom-0 lg:ml-auto lg:static lg:flex`}
      >
        <div
          onClick={handleClick}
          className={`z-2 flex flex-col justify-center gap-5 m-auto  lg:flex-row ${
            openNavigation
              ? "w-full h-full bg-custom-sec bg-opacity-80 text-right text-white backdrop-blur-lg "
              : "w-max"
          }`}
        >
          {navigationData.map((item: NavigationItem) => (
            <Link
              key={item.id}
              className={`relative font-bold text-center text-4xl  lg:text-base lg:font-semibold
               tracking-wide px-20 py-2 transition-colors hover:text-custom-pri lg:pt-0 lg:mx-4 lg:p-0 ${
                 false ? "text-custom-pri underline underline-offset-4" : ""
               } ${item?.onlyMobile && "lg:hidden"}`}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <SmallDevicesMenu
        onClick={toggleNavigation}
        openNavigation={openNavigation}
      />
      <div className="hidden z-20  cursor-pointer lg:block">
        {/* TODO:account info */}
      </div>
    </div>
  );
};

export default Header;

interface SmallDevicesMenuProps {
  onClick: () => void;
  openNavigation: boolean;
}

const SmallDevicesMenu: React.FC<SmallDevicesMenuProps> = ({
  onClick,
  openNavigation,
}) => {
  return (
    <div
      className={`z-10 fixed  top-2.5 right-4 w-10 h-5 lg:hidden cursor-pointer ${
        openNavigation ? "-mt-2 " : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`fixed border border-custom-pri w-8 transition-all ${
          openNavigation ? " rotate-45 mt-4 border-white" : ""
        }`}
      />
      <div
        className={`fixed border border-custom-pri w-8 mt-2 transition-all ${
          openNavigation ? "hidden" : ""
        }`}
      />
      <div
        className={`fixed border border-custom-pri w-8 mt-4 transition-all ${
          openNavigation ? "-rotate-45 mt-2 border-white" : ""
        }`}
      />
    </div>
  );
};

export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export const navigationData: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "/home",
  },
  {
    id: "1",
    title: "Trips",
    url: "/trips",
  },
  {
    id: "3",
    title: "About us",
    url: "/about",
  },
  {
    id: "4",
    title: "User",
    url: "/user",
  },
  /*{
    id: "5",
    title: "New account",
    url: "/register",
    onlyMobile: false,
  },
  {
    id: "6",
    title: "Account",
    url: "/profile",
    onlyMobile: false,
  },*/
];
