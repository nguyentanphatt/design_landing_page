"use client";
import Button from "@/component/Button";
import { ArrowRight, CalendarPlus } from "@/constant/image";
import { useInView, motion, useAnimation } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const CTASection = () => {
  const refs = [useRef(null), useRef(null)];
  const mainControls = [useAnimation(), useAnimation()];
  const [inViewThreshold, setInViewThreshold] = useState(0.3);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollThreshold = () => {
      const currentScrollY = window.scrollY;
      setInViewThreshold(currentScrollY > lastScrollY ? 0.3 : 0.1);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollThreshold);
    return () => window.removeEventListener("scroll", updateScrollThreshold);
  }, []);
  const inViews = refs.map((ref) =>
    useInView(ref, { amount: inViewThreshold, margin: "0px 0px -50px 0px" })
  );
  useEffect(() => {
    inViews.forEach((inView, index) => {
      if (inView) {
        mainControls[index].start("visible");
      } else {
        mainControls[index].start("hidden");
      }
    });
  }, [inViews]);
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div
        ref={refs[0]}
        className=" bg-white flex items-center pr-[10%] py-[100px]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls[0]}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="w-[100%] py-[30px] pr-[30px] pl-[10%] flex flex-col items-start bg-dark-blue rounded-tr-4xl rounded-br-4xl mb-[30px]"
        >
          <h1 className="text-[34px]/10 md:text-[46px]/14 text-white font-dm-serif-display font-bold mb-[30px]">
            Tired of losing revenue to an outdated site?
          </h1>
          <p className="text-base/5.5 text-white text-start font-dm-sans mb-[30px] w-[90%] lg:w-[65%]">
            For established businesses, a website should be an asset, not a
            liability. With over 13 years of experience running
            multi-million-dollar digital marketing campaigns for international
            brands, I create websites that look great and drive real business
            results. My data-driven approach attracts the right audience and
            converts them into paying customers or loyal clients.
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:gap-7">
            <Button title="See pricing" className="hover:bg-[#ffc300]">
              <ArrowRight className="size-5 text-dark-blue " />
            </Button>
            <Button
              title="Book a call"
              className="bg-transparent border border-white"
              titleClassName="text-white"
            >
              <CalendarPlus className="size-5 text-white" />
            </Button>
          </div>
        </motion.div>
      </div>
      <div
        ref={refs[1]}
        className=" bg-dark-blue flex items-center justify-end pl-[10%] py-[100px]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls[1]}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="w-[100%] py-[30px] pr-[30px] pl-[10%] flex flex-col items-start bg-white rounded-tl-4xl rounded-bl-4xl mb-[30px]"
        >
          <h1 className="text-[34px]/10 md:text-[46px]/14 text-black font-dm-serif-display font-bold mb-[30px]">
            Web design backed by 13+ years in digital marketing.
          </h1>
          <p className="text-base/5.5 text-black text-start font-dm-sans mb-[30px] w-[90%] lg:w-[65%]">
            Web design is more than just looks—it must be built with the user in
            mind. With over a decade in digital marketing, I’ve helped
            businesses grow through SEO, PPC, user behavior analysis, and A/B
            testing. Now, I use that expertise to build high-impact websites
            that drive real results.
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:gap-7">
            <Button
              title="See pricing"
              className="bg-[#003566] hover:bg-[#001d3d]"
              titleClassName="text-white"
            >
              <ArrowRight className="size-5 text-white" />
            </Button>
            <Button
              title="Book a call"
              className="bg-transparent border border-dark-blue"
              titleClassName="text-dark-blue"
            >
              <CalendarPlus className="size-5 text-dark-blue" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
