import React from "react";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const HeaderBurgerButton = ({ menuOpen, setMenuOpen }: Props) => (
  <button
    className="md:hidden absolute right-4 top-8 z-30"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Открыть меню"
  >
    {menuOpen ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ) : (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    )}
  </button>
);

export default HeaderBurgerButton;
