import React from "react";
import Image from "next/image";

const HeroImage = () => (
  <Image
    src="/man.png"
    alt="logo"
    width={400}
    height={400}
    className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[30%] mix-blend-luminosity absolute
     bottom-[-230px] sm:bottom-[-200px] md:bottom-[-150px] lg:bottom-[-100px] right-0"
    priority
  />
);

export default HeroImage;
