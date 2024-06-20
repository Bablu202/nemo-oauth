/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const MobileNav: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Only add the event listener once, on mount

  return (
    <nav
      className={`lg:hidden fixed bottom-0 left-0 w-full h-10 bg-zinc-600/80 
        backdrop-blur-lg shadow-lg transition-transform duration-300 ${
          showNav ? "translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="flex justify-around items-center h-16">
        {navigationData.map((item: NavigationItem) => (
          <Link key={item.id} className="" href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;

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
    title: "Explore",
    url: "/trips",
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
