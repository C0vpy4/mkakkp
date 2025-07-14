import React from "react";

export const Text = () => {
  return (
    <div className="flex justify-between flex-col">
      <div className="w-1/2 text-black justify-start text-[54px] sm:text-5xl md:text-6xl lg:text-[84px] font-normal leading-[122.50px] tracking-wide font-normal ">
        Ищем юристов и адвокатов
      </div>
      <div className="flex justify-between w-1/2  gap-20">
        <div className="justify-start ">
          <div className="justify-start text-black text-2xl font-semibold">
            телефон
          </div>
          <div className="justify-start text-black text-base font-normal">
            +7 (495) 123-45-67
          </div>
        </div>
        <div className="justify-start ">
          <div className="justify-start text-black text-2xl font-semibold">
            адрес
          </div>
          <div className="justify-start text-black text-base font-normal">
            Москва, Котельническая набережная
          </div>
        </div>
        <div className="justify-start ">
          <div className="justify-start text-black text-2xl font-semibold">
            email
          </div>
          <div className="justify-start text-black text-base font-normal">
            info@kyatova-law.ru
          </div>
        </div>
        <div className="justify-start ">
          <div className="justify-start text-black text-2xl font-semibold">
            социальные сети
          </div>
          <div className="justify-start text-black text-base font-normal">
            WhatsApp Telegram
          </div>
        </div>
      </div>
    </div>
  );
};
