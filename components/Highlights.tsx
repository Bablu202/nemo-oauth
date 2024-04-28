"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../public/index";
import VideoCarousel from "./subComponents/VideoCarousel";
import Image from "next/image";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 0.8 });
    gsap.to(".link", { opacity: 1, y: 0, delay: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch a film{" "}
              <Image
                width={64}
                height={64}
                src={watchImg}
                alt="watch"
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch a event{" "}
              <Image
                width={64}
                height={64}
                src={rightImg}
                alt="right"
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
