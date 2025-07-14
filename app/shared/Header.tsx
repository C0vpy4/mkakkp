"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeaderDesktopMenu from "./ui/HeaderDesktopMenu";
import HeaderBurgerButton from "./ui/HeaderBurgerButton";
import HeaderMobileMenu from "./ui/HeaderMobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10  md:py-[21px] sticky z-30">
      <div className="w-full md:w-auto flex justify-center  md:justify-start mb-4 md:mb-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={77}
          height={73}
          className="md:w-[65px]"
        />
      </div>
      <HeaderBurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeaderDesktopMenu />
      {menuOpen && <HeaderMobileMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
};

export default Header;
