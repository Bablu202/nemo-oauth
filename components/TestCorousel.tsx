"use client";
import React, { useRef } from "react";

import { hightlightsSlides } from "../constants/index";

const TestCorousel = () => {
  const videoRef = useRef(null);
  return (
    <div>
      here
      {hightlightsSlides
        .filter((slide) => slide.id === 1)
        .map((slide) => (
          <video key={slide.id} ref={videoRef} controls>
            <source src={slide.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
    </div>
  );
};

export default TestCorousel;
