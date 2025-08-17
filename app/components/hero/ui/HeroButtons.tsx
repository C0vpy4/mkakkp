import React from "react";
import Button from "@/app/shared/Button";

const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-4 z-20 w-full sm:w-auto">
    <Button text="Получить консультацию" className="bg-stone-900 text-white" />
    <Button text="Хочу в команду" className="bg-blue-600 text-white" />
  </div>
);

export default HeroButtons;
