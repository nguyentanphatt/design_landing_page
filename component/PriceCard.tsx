import { Check } from "@/constant/image";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Interest {
  id: number;
  content: string;
}

interface PriceCardProps {
  cardType: string;
  cardTypeClassName?: string;
  title: string;
  isCurrent: boolean;
  price: string;
  priceClassName?: string;
  subPrice: string;
  priceType: string;
  priceTypeClassName?: string;
  cardInfo: string;
  interest: Interest[];
  children: ReactNode;
}

const PriceCard = ({
  cardType,
  cardTypeClassName,
  title,
  isCurrent = true,
  price,
  priceClassName,
  subPrice,
  priceType,
  priceTypeClassName,
  cardInfo,
  interest,
  children,
}: PriceCardProps) => {
  return (
    <div className="bg-white w-full h-auto rounded-4xl mb-[30px]">
      <div className="relative flex flex-col items-start p-10">
        <div
          className={twMerge(
            "absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#0096c7] font-dm-sans text-white uppercase text-sm/4 font-bold p-2 rounded",
            cardTypeClassName
          )}
        >
          {cardType}
        </div>
        <h1 className="font-dm-sans text-[22px]/6 mb-[35px] font-semibold">
          {title}
        </h1>
        <div className="flex flex-col mb-[35px]">
          <div className="flex items-center gap-1 w-full text-black font-bold font-dm-sans">
            {isCurrent ? <p className="text-[32px]">$</p> : <div></div>}
            <p className={twMerge("text-[64px]/18 w-full", priceClassName)}>
              {price}
            </p>
          </div>
          <p className="text-black font-dm-sans font-medium text-base">
            {subPrice}
          </p>
          <div
            className={twMerge(
              "w-full bg-[#0096c7] font-dm-sans text-white uppercase text-sm/4 font-bold p-[0.55rem] tracking-[0.15rem] rounded mt-5",
              priceTypeClassName
            )}
          >
            {priceType}
          </div>
        </div>
        <p className="text-black font-dm-sans font-medium text-base/5 mb-[25px]">
          {cardInfo}
        </p>
        <ul>
          {interest.map((item) => (
            <li className="flex mb-4 items-center" key={item.id}>
              <Check className="size-4 text-[#003566] shrink-0" />
              <span className="text-black font-dm-sans font-medium text-base ml-3">
                {item.content}
              </span>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};

export default PriceCard;
