import React from "react";
import Button from "@/app/shared/Button";

const HeroButtons = () => (
  <div className="flex gap-2 z-20 flex-col sm:flex-row md:flex-row lg:flex-row">
    <Button text="Получить консультацию" className="bg-stone-900" />
    <Button text="Хочу в команду" className="bg-blue-600" />
  </div>
);

export default HeroButtons;
