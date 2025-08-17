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
    <div
      className={`z-50 ${bgColor} ${textColor} p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16`}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px] font-normal leading-tight sm:leading-normal md:leading-relaxed lg:leading-[122.50px] tracking-wide">
        {title}
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:ml-[50%] text-base sm:text-lg md:text-xl lg:text-sm xl:text-base font-normal leading-relaxed max-w-full lg:max-w-[50%]">
        {description}
      </div>
    </div>
  );
};
