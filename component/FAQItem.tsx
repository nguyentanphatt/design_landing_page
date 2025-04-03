"use client";
import { Minus, Plus } from "@/constant/image";
import React, { useState } from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-auto p-[15px] border border-black rounded-[20px] transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        {isOpen ? (
          <h1 className="text-xl text-[#003566] font-dm-serif-display">
            {question}
          </h1>
        ) : (
          <h1 className="text-xl text-black font-dm-serif-display">
            {question}
          </h1>
        )}
        {isOpen ? (
          <Minus className="size-5 text-[#003566] shrink-0" />
        ) : (
          <Plus className="size-5 text-black shrink-0" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pt-3" : "max-h-0 "
        }`}
        
      >
        <div className="text-black font-dm-sans text-base/6" dangerouslySetInnerHTML={{__html: answer}}/>
      </div>
    </div>
  );
};

export default FAQItem;
