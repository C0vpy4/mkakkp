import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`${className} text-white text-nowrap  text-[14px] sm:text-[9px] md:text-[12px] lg:text-[12px] 
       w-[100%] h-12 sm:h-10 md:h-14 px-5 py-4 rounded-[84px] inline-flex
       justify-center items-center gap-2.5`}
    >
      {text}
    </div>
  );
};

export default Button;
