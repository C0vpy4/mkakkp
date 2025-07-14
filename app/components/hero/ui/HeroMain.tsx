import React from "react";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="flex flex-nowrap justify-center sm:justify-between md:justify-between relative ">
      <div
        className=" justify-between sm:justify-start md:justify-start lg:justify-start 
      h-[500px] flex flex-col gap-10 md:gap-4 w-[100%] sm:w-[50%] md:w-[50%] lg:w-[50%]"
      >
        <HeroTitle />
        <HeroButtons />
      </div>
      <HeroImage />
    </div>
  );
};

export default HeroMain;
