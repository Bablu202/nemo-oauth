"use client";
import Link from "next/link";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

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
    <div className=" flex justify-between pb-20 lg:py-6">
      <div
        className={`fixed backdrop-blur-md top-0 left-0 w-full border-b border-opacity-20 border-b-custom-sec lg:py-4 lg:backdrop-blur-sm`}
      >
        <div className="px-5 lg:px-8 xl:px-10 max-lg:py-4">
          <a className="block text-2xl lg:text-2xl font-normal xl:text-3xl xl:mr-8">
            Travelling <span className="text-custom-pri font-bold">NEMO</span>
          </a>
        </div>
      </div>
      <nav
        className={`${
          openNavigation ? "flex " : "hidden"
        } fixed top-0 left-0  bottom-0 lg:ml-auto lg:static lg:flex`}
      >
        <div
          onClick={handleClick}
          className={`relative z-2 flex flex-col items-center justify-center gap-5 m-auto lg:flex-row ${
            openNavigation &&
            "bg-custom-pri bg-opacity-20 backdrop-blur-lg w-full h-full "
          }`}
        >
          {navigationData.map((item: NavigationItem) => (
            <Link
              key={item.id}
              className={`block relative font-bold text-center text-4xl lg:font-normal lg:text-xl xl:text-2xl
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
      <div className="hidden z-20 mr-6 cursor-pointer lg:block">
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
      className={`absolute top-6 right-4 z-10 w-10 h-5 lg:hidden cursor-pointer ${
        openNavigation ? "-mt-2" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`fixed border border-custom-pri w-10 transition-all ${
          openNavigation ? "rotate-45 mt-4" : ""
        }`}
      />
      <div
        className={`fixed border border-custom-pri w-10 mt-2 transition-all ${
          openNavigation ? "hidden" : ""
        }`}
      />
      <div
        className={`fixed border border-custom-pri w-10 mt-4 transition-all ${
          openNavigation ? "-rotate-45 mt-2" : ""
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
    id: "2",
    title: "Gallery",
    url: "/gallery",
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
