import React from "react";

const HeroTitle = () => (
  <div className="uppercase flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-4 z-20">
    <p className="text-stone-900 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold">
      Московская коллегия адвокатов
    </p>
    <p className="text-stone-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-tight">
      Кятова, Клячковский и Партнёры
    </p>
  </div>
);

export default HeroTitle;
