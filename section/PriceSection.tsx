"use client";
import Button from "@/component/Button";
import FeatureCard from "@/component/FeatureCard";
import PriceCard from "@/component/PriceCard";
import { Calendar, CursorLeft, Pause, RoundCheck } from "@/constant/image";
import { useAnimation, useInView, motion } from "motion/react";
import React, { useEffect, useRef } from "react";
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
    priceClassName: "text-[2.8rem] lg:text-[64px]/18 w-[238px] lg:w-full",
    subPrice: "$ 10,000",
    priceType: "Project-base pricing",
    priceTypeClassName: "bg-[#f9f9f9] text-black",
    cardInfo:
      "For businesses needing a high-performance, revenue-driven website tailored to their goals.",
    interest: priceData02,
    children: (
      <Button
        title="Book a call"
        className="bg-transparent border border-dark-blue w-full mt-auto"
        titleClassName="text-dark-blue"
      >
        <Calendar className="size-4 text-dark-blue" />
      </Button>
    ),
  },
];
const infoData = [
  {
    title: "Pause anytime",
    content: "Temporarily pause your monthly subscription anytime.",
    children: <Pause className="size-10 mb-[19px] text-white" />,
  },
  {
    title: "Try it for a week",
    content:
      "Not loving it after a week? Get 75% back, of your subscription, no questions asked.",
    children: <RoundCheck className="size-10 mb-[19px] text-white" />,
  },
];
const PriceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="h-auto bg-dark-blue flex items-center justify-center px-[10%] py-[100px]">
      <div ref={ref} className="flex flex-col w-full h-full">
        <h1 className="text-[34px]/10 md:text-[45.6px]/14 text-white font-dm-serif-display font-bold mb-[30px]">
          Website solutions that drive real growth
        </h1>
        <p className="text-base/5.5 text-white text-start font-dm-sans mb-[30px] w-[90%] lg:w-[65%]">
          Whether you need a brand-new website or ongoing improvements to
          maximize your existing one, I offer two options to help your business
          grow.
        </p>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {priceCardData.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: (index + 1) * 1 }}
            >
              <PriceCard
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
              />
            </motion.div>
          ))}
        </div>
        <div className="mb-[30px] flex flex-col lg:flex-row gap-[30px]">
          {infoData.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              content={item.content}
              children={item.children}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-5">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffc300] opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#ffc300]"></span>
          </span>
          <p className="text-white font-bold text-base font-dm-sans">
            I only accept 3 new clients per month to ensure every project or
            subscription gets my full attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
