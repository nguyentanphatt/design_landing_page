import Button from "@/component/Button";
import PriceCard from "@/component/PriceCard";
import { Calendar, Check, Cursor, CursorLeft } from "@/constant/image";
import React from "react";
const priceData01 = [
  {
    id: 1,
    content: "Unlimited designs",
  },
  {
    id: 2,
    content: "One design request at a time",
  },
  {
    id: 3,
    content: "Avg. 72 hours delivery time per request",
  },
  {
    id: 4,
    content: "SEO & CRO support to help you grow & convert",
  },
  {
    id: 5,
    content: "Design informed by UX analysis & performance data",
  },
  {
    id: 6,
    content: "Design backed by 13+ years of digital marketing expertise",
  },
];
const priceData02 = [
  {
    id: 1,
    content: "Custom & high-end designs",
  },
  {
    id: 2,
    content: "SEO-driven for higher visibility",
  },
  {
    id: 3,
    content: "Built to scale and drive revenue",
  },
  {
    id: 4,
    content: "Intuitive & user-friendly designs",
  },
  {
    id: 5,
    content: "Fast, smooth, and fully responsive",
  },
  {
    id: 6,
    content: "Optimized to turn visitors into customers",
  },
];

const priceCardData = [
  {
    cardType: "Monthly Subscription",
    title: "Ongoing design partnership",
    isCurrent: true,
    price: "4,995",
    subPrice: "per month",
    priceType: "Pause or Cancel Anytime",
    cardInfo:
      "For businesses that need continuous improvements, optimizations, and strategic updates.",
    interest: priceData01,
    children: (
      <Button title="Join today" className="hover:bg-[#ffc300] w-full">
        <CursorLeft className="size-5 text-dark-blue" />
      </Button>
    ),
  },
  {
    cardType: "Project-based",
    cardTypeClassName: "bg-[#f9f9f9] text-black",
    title: "Custom website build",
    isCurrent: false,
    price: "Starting at",
    priceClassName:"text-[2.8rem] w-[238px]",
    subPrice: "$ 10,000",
    priceType: "Project-base pricing",
    priceTypeClassName: "bg-[#f9f9f9] text-black",
    cardInfo:
      "For businesses needing a high-performance, revenue-driven website tailored to their goals.",
    interest: priceData02,
    children: (
      <Button
        title="Book a call"
        className="bg-transparent border border-dark-blue w-full"
        titleClassName="text-dark-blue"
      >
        <Calendar className="size-4 text-dark-blue" />
      </Button>
    ),
  },
];
const PriceSection = () => {
  return (
    <div className="h-auto bg-dark-blue flex items-center justify-center px-[10%] py-[100px]">
      <div className="flex flex-col w-full h-full">
        <h1 className="text-[34px]/10 md:text-[45.6px]/14 text-white font-dm-serif-display font-bold mb-[30px]">
          Website solutions that drive real growth
        </h1>
        <p className="text-base/5.5 text-white text-start font-dm-sans mb-[30px] w-[90%] lg:w-[65%]">
          Whether you need a brand-new website or ongoing improvements to
          maximize your existing one, I offer two options to help your business
          grow.
        </p>
        {priceCardData.map((item, index) => (
          <PriceCard
            key={index}
            cardType={item.cardType}
            cardTypeClassName={item.cardTypeClassName}
            title={item.title}
            isCurrent={item.isCurrent}
            price={item.price}
            priceClassName={item.priceClassName}
            subPrice={item.subPrice}
            priceType={item.priceType}
            priceTypeClassName={item.priceTypeClassName}
            cardInfo={item.cardInfo}
            interest={item.interest}
            children={item.children}
          ></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
