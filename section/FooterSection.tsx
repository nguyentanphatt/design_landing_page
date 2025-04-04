import Calendar from "@/component/Calendar";
import { File, Location, Mail, Phone } from "@/constant/image";
import React from "react";
const footerData = [
  {
    icon: <Location className="size-6 text-white shrink-0" />,
    text: "C/ Paseo de Larios 6, 6.3, 29740 Torre del Mar, Malaga",
  },
  {
    icon: <File className="size-6 text-white shrink-0" />,
    text: "CIF: B56972557",
  },
  {
    icon: <Phone className="size-6 text-white shrink-0" />,
    text: "+34 692 433 133",
  },
  {
    icon: <Mail className="size-6 text-white shrink-0" />,
    text: "christopher.cardoen@iclound.com",
  },
];
const FooterSection = () => {
  return (
    <div className="h-auto bg-dark-blue flex flex-col px-[10%] py-[100px]">
      <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px] w-full">
        <div className="h-[730px] w-full lg:w-[43%]">
          <Calendar />
        </div>
        <div className="hidden lg:block w-[20%]">
        </div>
        <div className="flex flex-col justify-center gap-[15px] lg:w-[43%]">
          <h1 className="text-[27px]/9 md:text-4xl text-white font-dm-serif-display font-bold mb-[12px]">
            ZACHICI S.L
          </h1>
          <div>
            <ul className="flex flex-col gap-[16px]">
              {footerData.map((item, index) => (
                <li key={index} className="flex items-center gap-[10px]">
                  {item.icon}
                  <p className="text-white text-base/5 font-dm-sans font-medium">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white text-base/5 font-dm-sans font-medium">
        © 2025 - All rights reserved - Christopher Cardoen.
      </div>
    </div>
  );
};

export default FooterSection;
