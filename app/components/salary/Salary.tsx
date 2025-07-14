"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "./data/data";

export const Salary = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        className="justify-start text-[54px] sm:text-5xl md:text-6xl lg:text-[84px] font-normal 
      leading-[122.50px] tracking-wide"
      >
        Услуги
      </div>
      <div className="flex justify-between mt-10">
        <div className="relative flex flex-col gap-2 h-96 w-40">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="w-96 h-48 px-2 border-b-1 border-white flex items-center justify-start text-start cursor-pointer relative"
              onClick={() => setActive(idx)}
            >
              {active === idx && (
                <motion.div
                  layoutId="cube"
                  className="h-full w-full bg-white absolute top-0 left-0 z-0 "
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ zIndex: 0 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  active === idx ? "text-stone-900" : ""
                }`}
              >
                {service.title}
              </span>
            </div>
          ))}
        </div>
        <div className="">
          <div className="text mt-8 justify-start text-white text-base font-normal max-w-xl">
            {servicesData[active]?.description}
          </div>
        </div>
      </div>
    </div>
  );
};
