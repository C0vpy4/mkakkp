"use client";
import React from "react";
import { motion } from "framer-motion";

export const Text = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-start"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="text-black justify-start text-[54px] sm:text-5xl md:text-6xl lg:text-[84px] font-normal leading-[122.50px] tracking-wide mb-8"
        variants={itemVariants}
      >
        Ищем юристов и адвокатов
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
        variants={containerVariants}
      >
        <motion.div className="justify-start" variants={itemVariants}>
          <div className="justify-start text-black text-2xl font-semibold">
            телефон
          </div>
          <div className="justify-start text-black text-base font-normal">
            +7 (495) 123-45-67
          </div>
        </motion.div>
        <motion.div className="justify-start" variants={itemVariants}>
          <div className="justify-start text-black text-2xl font-semibold">
            адрес
          </div>
          <div className="justify-start text-black text-base font-normal">
            Москва, Котельническая набережная
          </div>
        </motion.div>
        <motion.div className="justify-start" variants={itemVariants}>
          <div className="justify-start text-black text-2xl font-semibold">
            email
          </div>
          <div className="justify-start text-black text-base font-normal">
            info@kyatova-law.ru
          </div>
        </motion.div>
        <motion.div className="justify-start" variants={itemVariants}>
          <div className="justify-start text-black text-2xl font-semibold">
            социальные сети
          </div>
          <div className="justify-start text-black text-base font-normal">
            WhatsApp Telegram
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
