import React from "react";

interface SectionsProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

export const Sections: React.FC<SectionsProps> = ({
  title,
  description,
  bgColor = "bg-blue-600",
  textColor = "text-white",
}) => {
  return (
    <div className={`z-50 ${bgColor} ${textColor} p-10 `}>
      <div className="justify-start text-[54px] sm:text-5xl md:text-6xl lg:text-[84px] font-normal leading-[122.50px] tracking-wide">
        {title}
      </div>
      <div className="ml-[50%] justify-start text-[18px] sm:text-[18px] md:text-[20px] lg:text-[14px] font-normal">
        {description}
      </div>
    </div>
  );
};
