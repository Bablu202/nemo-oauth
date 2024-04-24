import React, { useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  width?: number;
  hideDotsBottom?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = true,
  autoSlideInterval = 20000,
  width = 100,
  hideDotsBottom = false,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative z-[-1]">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * width}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0  flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow  bg-white/80  text-gray-800 hover:bg-white"
          onClick={prev}
        >
          n
        </button>
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white "
          onClick={next}
        >
          p
        </button>
      </div>
      {!hideDotsBottom && (
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {children.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-2 h-2 bg-yellow-500  rounded-full ${
                  curr === i ? "p-1.5" : "bg-opacity-20"
                }
            `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
