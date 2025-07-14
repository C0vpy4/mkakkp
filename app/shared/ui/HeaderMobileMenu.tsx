import React from "react";
import Link from "next/link";

type Props = {
  setMenuOpen: (open: boolean) => void;
};

const HeaderMobileMenu = ({ setMenuOpen }: Props) => (
  <div className="fixed inset-0 bg-opacity-60 z-20 flex flex-col items-end">
    <div className="bg-white w-3/4 max-w-xs h-full p-8 flex flex-col gap-8 shadow-lg">
      <nav className="flex flex-col gap-6 text-lg">
        <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
        <Link href="/career" onClick={() => setMenuOpen(false)}>Карьера</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Услуги</Link>
      </nav>
      <div className="mt-auto text-lg font-semibold">+7(999)-999-99-99</div>
    </div>
  </div>
);

export default HeaderMobileMenu; 