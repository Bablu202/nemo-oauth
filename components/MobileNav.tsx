/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
      className={` fixed bottom-0 left-0 w-full h-10 bg-red-500 shadow-lg transition-transform duration-300 ${
        showNav ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex-1 text-center py-2">
          Home
        </Link>
        <Link href="/about" className="flex-1 text-center py-2">
          Explore
        </Link>
        <Link href="/user" className="flex-1 text-center py-2">
          User
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
