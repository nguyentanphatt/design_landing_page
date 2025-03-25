import Button from "@/component/Button";
import ParticlesBackground from "@/component/ParticlesBackground";
import { ArrowRight, CalendarPlus } from "@/constant/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col items-start w-full px-[10%]">
        <h1 className="font-dm-serif-display font-bold text-white text-[40px]/12 md:text-6xl/18 mb-3">
          Is your website underperforming?
          <br />I design websites that generate revenue!
        </h1>
        <p className="font-dm-sans text-white text-base/5.5 max-w-[90%] lg:max-w-[65%] mb-[30px]">
          I'm Christopher, a web designer helping established businesses elevate
          their online presence. With 13+ years of digital marketing expertise
          in SEO, PPC, CRO, and UX, I create visually compelling websites
          designed to drive conversions and revenue growth.
        </p>
        <div className="flex flex-col md:flex-row gap-5 md:gap-7">
          <Button title="See pricing" className="hover:bg-[#ffc300]">
            <ArrowRight className="size-5 text-dark-blue" />
          </Button>
          <Button
            title="Book a call"
            className="bg-transparent border border-white"
            titleClassName="text-white"
          >
            <CalendarPlus className="size-5 text-white" />
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-5 mt-7 md:mt-7">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#808080] opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#808080]"></span>
          </span>
          <p className="text-[#808080] font-bold text-base font-dm-sans">
            I only accept 3 new clients per month to ensure every project or
            subscription gets my full attention.
          </p>
        </div>
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default Hero;
