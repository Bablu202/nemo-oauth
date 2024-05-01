"use client";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { useRef } from "react";
import Image from "next/image";
import { MdTravelExplore } from "react-icons/md";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaCalendarDays } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
function PostCard(post: Post) {
  return (
    <section className="py-4" id="trips">
      <Link href={post.url} legacyBehavior>
        <div className="cursor-pointer p-1 sm:p-1.5 md:p-2">
          <div className="z-[-1] relative border  border-custom-pri border-opacity-30 mr-4 rounded-lg shadow-sm snap-always snap-center overflow-hidden">
            <div className="w-72 sm:w-80 md:w-96 xl:w-[30rem] h-60 md:h-64 container ">
              <Image
                className="rounded-t-lg object-fill"
                src={post.imageURL}
                alt="Trip Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                loading="eager"
              />
              <div className=" text-white absolute bg-black/1 w-full h-full">
                <div className="absolute bg-gradient-to-b from-black/70 to-transparent w-full h-16" />
                <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full h-16" />

                {/* both image and text */}
                <div className="p-1 lg:p-2 absolute flex flex-col w-full h-full">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-4">
                      <MdTravelExplore />
                      {post.title}
                    </h3>
                    <div className="flex flex-col ">
                      <time
                        dateTime={post.startDate}
                        className="mb-1 text-xs lg:text-sm flex items-center gap-2"
                      >
                        <GiAirplaneDeparture />
                        {format(parseISO(post.startDate), "LLLL d, yyyy")}
                      </time>
                      <time
                        dateTime={post.returnDate}
                        className=" mb-1 text-xs lg:text-sm flex items-center gap-2"
                      >
                        <GiAirplaneArrival />
                        {format(parseISO(post.returnDate), "LLLL d, yyyy")}
                      </time>
                    </div>
                  </div>
                  <div className="mt-auto text-base">
                    <p className="flex items-center gap-4">
                      <FaCalendarDays /> {post.duration} Days
                    </p>
                    <p className="flex items-center gap-4">
                      <HiCurrencyRupee />
                      {post.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

export default function AllTrips() {
  const posts = allPosts.sort((b, a) =>
    compareDesc(new Date(a.startDate), new Date(b.startDate))
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, // Adjust as needed
        //behavior: "smooth",
      });
      console.log("move");
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, // Adjust as needed
        // behavior: "smooth",
      });
      console.log("move");
    }
  };
  return (
    <section className="max-w-6xl flex m-auto">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-left flex justify-center items-center p-1">
          <FaMapSigns className="text-custom-pri mr-4 text-4xl" />
          Trips we offer..
        </h2>
        <a href="#faqs" className="p-2 hover:cursor-pointer">
          Fill the FORM, We will soon contact you..!
        </a>
        <div className="flex justify-between items-center relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex max-w-6xl">
              <div className="px-10" />
              {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
              ))}
              <div className="px-10" />
              <div className="hidden lg:flex">
                <button
                  className="absolute top-8 left-0 h-60 text-6xl text-custom-sec "
                  onClick={scrollLeft}
                >
                  <HiChevronLeft />
                </button>
                <button
                  className="absolute right-0 h-full text-6xl text-custom-sec"
                  onClick={scrollRight}
                >
                  <HiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
