import React from "react";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-4 w-full lg:w-1/2 h-auto lg:h-[500px] justify-center lg:justify-start z-10">
        <HeroTitle />
        <HeroButtons />
      </div>
      <HeroImage />
    </div>
  );
};

export default HeroMain;
