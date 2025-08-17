"use client";
import Button from "@/app/shared/Button";
import React from "react";
import { motion } from "framer-motion";

export const Form = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
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
      className="w-full max-w-2xl min-w-[100px] mx-auto p-4 md:p-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="mb-8">
        <motion.div
          className="text-stone-900 text-xl md:text-2xl font-semibold font-['Cygre_SemiBold'] uppercase mb-4"
          variants={itemVariants}
        >
          присоединяйтесь к нам
        </motion.div>
        <motion.div
          className="text-stone-900 text-sm md:text-base font-normal font-['Cygre'] uppercase leading-relaxed"
          variants={itemVariants}
        >
          Мы открыты для сотрудничества с профессиональными, амбициозными и
          целеустремленными специалистами в области права
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.div variants={itemVariants}>
          <input
            type="text"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="ВАШЕ ИМЯ"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
        >
          <motion.input
            type="email"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="EMAIL"
            variants={itemVariants}
          />
          <motion.input
            type="text"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="TELEGRAM"
            variants={itemVariants}
          />
          <motion.input
            type="text"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="СОЦ СЕТЬ"
            variants={itemVariants}
          />
          <motion.input
            type="text"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="СОЦ СЕТЬ"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <input
            type="text"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre']"
            placeholder="ВАША СПЕЦИАЛИЗАЦИЯ"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <textarea
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-stone-900 outline-none transition-colors duration-200 bg-transparent text-stone-900 placeholder-gray-500 font-['Cygre'] resize-none min-h-[80px]"
            placeholder="КОММЕНТАРИЙ"
          />
        </motion.div>
      </div>

      <motion.div className="mt-8" variants={itemVariants}>
        <Button
          text="отправить заявку"
          className="text-black w-full bg-blue-600"
        />
      </motion.div>
    </motion.div>
  );
};
