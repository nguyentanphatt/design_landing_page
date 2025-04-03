import Image from "next/image";
import React from "react";
import avatar from '@/public/image/avatar.webp'
const AboutSection = () => {
  return (
    <div className="h-auto bg-[#f9f9f9] flex items-center justify-center px-[10%] pt-[100px]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center w-full h-full gap-[30px] mb-[30px]">
        <div className="w-full lg:max-w-[30%] h-auto">
            <Image src={avatar} alt="Avatar" width={500} height={500} className="w-full rounded-[30px]"/>
        </div>
        <div>
          <h1 className="text-[34px]/10 md:text-[45.6px]/14 text-black font-dm-serif-display font-bold mb-[30px]">
            Why choose me ?
          </h1>
          <div className="text-base/5.5 text-black text-start font-dm-sans mb-[30px] w-[95%]">
            I bring 13+ years of digital marketing expertise to web design,
            creating websites that are not only visually appealing but also
            built to drive results. Having worked with multi-million-dollar
            brands, I know what compels online audiences to act.
            <br />
            <br />
            I’ve managed high-impact campaigns, analyzed vast amounts of data,
            and developed a strategic, revenue-driven approach to web design.
            Unlike large agencies, I take a personalized, hands-on approach,
            working with only three new clients per month to ensure every
            project gets the attention it deserves.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
