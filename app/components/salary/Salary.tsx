"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "./data/data";

export const Salary = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px] font-normal leading-tight sm:leading-normal md:leading-relaxed lg:leading-[122.50px] tracking-wide">
        Услуги
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-8 md:mt-10 lg:mt-12 gap-6 lg:gap-10">
        <div className="relative flex flex-col gap-2 h-auto lg:h-96 w-full lg:w-40">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="w-full lg:w-96 h-auto lg:h-48 px-2 py-3 lg:py-0 border-b border-white flex items-center justify-start text-start cursor-pointer relative"
              onClick={() => setActive(idx)}
            >
              {active === idx && (
                <motion.div
                  layoutId="cube"
                  className="h-full w-full bg-white absolute top-0 left-0 z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ zIndex: 0 }}
                />
              )}
              <span
                className={`relative z-10 text-sm sm:text-base md:text-lg lg:text-base ${
                  active === idx ? "text-stone-900" : ""
                }`}
              >
                {service.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-auto">
          <div className="text mt-4 lg:mt-8 justify-start text-white text-sm sm:text-base md:text-lg lg:text-base font-normal max-w-full lg:max-w-xl leading-relaxed">
            {servicesData[active]?.description}
          </div>
        </div>
      </div>
    </div>
  );
};
