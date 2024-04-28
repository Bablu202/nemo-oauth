"use client";
import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";

const GalleryOne = () => {
  const slides = [
    "https://unsplash.com/photos/ss20MbHZzck/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXN0JTIwcGxhY2VzfGVufDB8fHx8MTcxMzM1NzU5N3ww&force=true",
    "https://unsplash.com/photos/OCvFU8K0lRI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2MzR8MA&force=true",
    "https://unsplash.com/photos/IPlPkWPJ2fo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDh8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2Njh8MA&force=true",
    "https://unsplash.com/photos/3n0FEnkoa4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTB8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2Njh8MA&force=true",
  ];
  const wideSlides = [
    "https://unsplash.com/photos/MvkLKGtBcUA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODY2N3ww&force=true",
    "https://unsplash.com/photos/dCnHbVhM2w8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODczNXww&force=true",
    "https://unsplash.com/photos/XK-FVoX4v04/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDJ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODc0MHww&force=true",
    "https://unsplash.com/photos/gJhev0YgUcE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTZ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODc0MHww&force=true",
    "https://unsplash.com/photos/GdlEMsUsOy0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODZ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODgzNnww&force=true",
  ];

  const foodImages = [
    "https://unsplash.com/photos/FJBYwJrsJXc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGluZGlhJTIwZm9vZHN8ZW58MHwwfHx8MTcxMzQzOTQyMXww&force=true",
    "https://unsplash.com/photos/jI43ZH8u5go/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzJ8fGluZGlhJTIwZm9vZHN8ZW58MHwwfHx8MTcxMzQzOTQzOXww&force=true",
    "https://unsplash.com/photos/bl4YpBZKZqM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODR8fGluZGlhJTIwZm9vZHN8ZW58MHwwfHx8MTcxMzQzOTQ1MHww&force=true",
    "https://unsplash.com/photos/SJpCW2iHGqs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjE2fHxpbmRpYSUyMGZvb2RzfGVufDB8MHx8fDE3MTM0Mzk1MTB8MA&force=true",
  ];
  const festivals = [
    "https://unsplash.com/photos/BYYu5nvQoUM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTF8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlcyUyMHdpZGV8ZW58MHwwfHx8MTcxMzQzODc0MHww&force=true",
    "https://unsplash.com/photos/ib3d1uX1LLc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGluZGlhJTIwZmVzdGl2YWxzfGVufDB8MHx8fDE3MTM0MzkyMjR8MA&force=true",
    "https://unsplash.com/photos/gEGSf7bRFEk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGluZGlhJTIwZmVzdGl2YWxzfGVufDB8MHx8fDE3MTM0MzkyMTJ8MA&force=true",
    "https://unsplash.com/photos/o3lLS-1e5VY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjIyfHxpbmRpYSUyMGZlc3RpdmFsc3xlbnwwfDB8fHwxNzEzNDM5MzMzfDA&force=true",
    "https://unsplash.com/photos/oBCrv36NTVY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjE4fHxpbmRpYSUyMGZlc3RpdmFsc3xlbnwwfDB8fHwxNzEzNDM5MzMxfDA&force=true",
    "https://unsplash.com/photos/wvaoRleAskM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjM0fHxpbmRpYSUyMGZlc3RpdmFsc3xlbnwwfDB8fHwxNzEzNDM5MzMzfDA&force=true",
  ];

  const [foodImageText] = landingPageTitles.filter((obj) => obj.id === "3");
  return (
    <section className="max-w-6xl flex m-auto">
      <div className="p-2">
        <div className="flex flex-col lg:flex-row ">
          <div className="m-1 pr-4 w-full">
            <Carousel>
              {foodImages.map((s, i) => (
                <Image
                  key={i}
                  src={s}
                  alt="img"
                  width={300}
                  height={300}
                  layout="responsive"
                  priority
                />
              ))}
            </Carousel>
          </div>
          <div className="w-full mt-auto ">
            <h1 className="h1 mb-2 text-custom-pri">{foodImageText.title}</h1>
            <p className="b-one">{foodImageText.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryOne;

export interface LandingPageTitle {
  id: string;
  title: string;
  text: string;
}
export const landingPageTitles: LandingPageTitle[] = [
  {
    id: "1",
    title: "Start Your Indian Odyssey Today",
    text: "Ready to embark on the adventure of a lifetime? Explore our handcrafted itineraries, discover hidden gems, and let us help you plan the perfect trip to India. Whether you're a history buff, nature lover, foodie, or spiritual seeker, there's something for everyone in this enchanting land. Your journey to Incredible India begins here!",
  },
  {
    id: "2",
    title: "Reconnect with Your Roots",
    text: "Explore the rich tapestry of India's cultural heritage right in your own backyard. From ancient monuments to traditional festivals, there's no shortage of opportunities to immerse yourself in the vibrant tapestry of Indian culture. Rediscover the hidden gems of your own state or venture beyond to uncover the unique traditions and customs of different regions.",
  },
  {
    id: "3",
    title: "Taste the Flavors of India",
    text: "Indulge your taste buds in the culinary delights of India's diverse cuisines. From street-side chaat to regional specialties, every corner of the country offers a gastronomic adventure waiting to be savored. Whether you're craving spicy street food or indulging in regional delicacies, let your palate guide you on a culinary journey across India.",
  },
  {
    id: "4",
    title: "Experience the Diversity of Nature",
    text: "From the snow-capped peaks of the Himalayas to the sun-kissed beaches of the Andaman Islands, India boasts an unparalleled diversity of natural landscapes. Embark on scenic road trips, trek through pristine forests, or simply unwind amidst the tranquil beauty of nature. There's something for every nature enthusiast right here in our own backyard.",
  },
  {
    id: "5",
    title: "Find Serenity in Sacred Spaces",
    text: "Seek solace and spiritual enlightenment in India's sacred destinations. Whether you're drawn to the peaceful serenity of ancient temples, the tranquil banks of holy rivers, or the serene surroundings of ashrams and meditation centers, India offers a multitude of opportunities for introspection and inner peace.",
  },
  {
    id: "6",
    title: "Travel Responsibly, Travel Sustainably",
    text: "As responsible travelers and proud citizens of India, let's commit to preserving the natural beauty and cultural heritage of our country. Travel sustainably, support local communities, and leave a positive impact wherever you go. Together, let's protect and cherish the treasures of our homeland for generations to come.",
  },
  {
    id: "7",
    title: "Start Your Journey Today",
    text: "Ready to embark on an adventure of a lifetime right here in India? Explore our curated itineraries, discover off-the-beaten-path destinations, and let us help you plan the perfect getaway. Whether you're seeking adventure, relaxation, or cultural immersion, your next great escape awaits in the heart of Incredible India.",
  },
];
