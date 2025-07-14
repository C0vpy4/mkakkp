import React from "react";
import Link from "next/link";

const HeaderDesktopMenu = () => (
  <div className="uppercase self-stretch justify-start text-stone-900 md:text-[12px] text-base font-normal hidden md:grid w-full md:w-auto grid-cols-3 grid-rows-2 gap-x-5 gap-y-2 items-center justify-items-start md:ml-10">
    <Link href="/about" className="row-start-1 col-start-1">
      О нас
    </Link>
    <Link href="/career" className="row-start-1 col-start-2">
      Карьера
    </Link>
    <span className="row-start-1 col-start-3 whitespace-nowrap justify-self-end">
      +7(999)-999-99-99
    </span>
    <Link href="/contact" className="row-start-2 col-start-1">
      Контакты
    </Link>
    <Link href="/services" className="row-start-2 col-start-2">
      Услуги
    </Link>
  </div>
);

export default HeaderDesktopMenu;
