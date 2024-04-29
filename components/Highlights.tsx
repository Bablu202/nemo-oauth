"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../public/index";
import VideoCarousel from "./subComponents/VideoCarousel";
import Image from "next/image";

const Highlights: React.FC = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the events
              <Image src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              more at
              <Image src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
