import React from "react";

interface Link {
  text: string;
  href: string;
}

interface FooterLinkSectionProps {
  name: string;
  links: Link[];
}

export const FooterLinkSection = ({ name, links }: FooterLinkSectionProps) => {
  return (
    <div>
      <h3 className="self-stretch justify-start text-white text-base font-semibold">
        {name}
      </h3>
      <ul className="mt-5">
        {links.map((link, index) => (
          <li key={`${link.text}-${index}`}>
            <a
              href={link.href}
              className="hover:text-blue-600 transition-colors "
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
