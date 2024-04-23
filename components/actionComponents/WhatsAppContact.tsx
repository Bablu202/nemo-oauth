"use client";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButtonContact: React.FC = () => {
  const contact: string = "+919515365361";
  const message: string = "i would like to make a trip";

  const handleClick = () => {
    const whatsappUrl: string = `https://wa.me/${contact}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="z-10 fixed bottom-16 right-6 bg-color-green bg-opacity-80 text-white w-12 h-12 rounded-full 
      flex justify-center items-center cursor-pointer hover:bg-opacity-100"
      onClick={handleClick}
    >
      <AiOutlineWhatsApp className="text-3xl" />
    </div>
  );
};

export default WhatsAppButtonContact;
