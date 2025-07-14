import React from "react";
import Image from "next/image";

const HeroImage = () => (
  <Image
    src="/man.png"
    alt="logo"
    width={77}
    height={73}
    className="sm:w-[36%] md:w-[40%] lg:w-[30%] w-[75%] mix-blend-luminosity absolute
     bottom-[-230px] right-0 sm:bottom-[-200px] md:bottom-[-150px] 
     lg:bottom-[-100px] sm:relative md:relative lg:relative "
  />
);

export default HeroImage;
