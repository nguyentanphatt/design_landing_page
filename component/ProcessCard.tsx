'use client'
import { useTransform, motion } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";

const ProcessCard = ({
  id,
  title,
  description,
  color,
  progress,
  range,
  targetScale
}: {
  id: number;
  title: string;
  description: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}) => {
    const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <motion.div style={{scale}} className={twMerge("w-full flex items-center justify-center shadow-lg", color)}>
      <div className="px-[30px] lg:px-0 py-[75px] text-left flex items-center lg:gap-[30px] h-full w-full">
        <div className="hidden lg:block w-[30%]">
          <div className="relative">
            <p className="absolute -top-32 -left-10 text-white font-sans text-[10rem]">{String(id).padStart(2, '0')}</p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[27px] md:text-4xl text-white font-dm-serif-display font-bold mb-[15px]">
           {title}
          </h1>
          <p className="text-base/5.5 text-white text-start font-dm-sans lg:w-[70%]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
