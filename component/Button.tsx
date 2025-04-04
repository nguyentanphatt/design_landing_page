import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  title,
  children,
  className,
  titleClassName,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName? : string;
}) => {
  return (
    <div className={twMerge("flex items-center justify-center h-[46px] py-3.5 px-6 bg-custom-orange gap-3 rounded hover:scale-110 transition duration-500",className )}>
      <p className={twMerge("text-dark-blue text-base/0 font-bold font-dm-sans", titleClassName)}>{title}</p>
      {children}
    </div>
  );
};

export default Button;
