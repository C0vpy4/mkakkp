import React from "react";
import { FooterLinkSection } from "./ui/FooterLinkSection";

export const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-between flex-wrap gap-y-10 gap-x-5">
        <FooterLinkSection
          name="Услуги"
          links={[
            { text: "Уголовные дела", href: "/services/criminal" },
            { text: "Гражданские споры", href: "/services/civil" },
            { text: "Арбитражные дела", href: "/services/arbitration" },
            { text: "Семейные дела", href: "/services/family" },
          ]}
        />

        <FooterLinkSection
          name="Документы"
          links={[
            { text: "Лицензии", href: "/documents/licenses" },
            {
              text: "Политика конфиденциальности",
              href: "/documents/certificates",
            },
            { text: "Реестр адвокатов РФ", href: "/documents/contracts" },
          ]}
        />
        <FooterLinkSection
          name="О компании"
          links={[
            { text: "О нас", href: "/about" },
            { text: "Команда", href: "/team" },
            { text: "Отзывы", href: "/reviews" },
            { text: "Контакты", href: "/contacts" },
          ]}
        />
        <div className="flex flex-col">
          <a href="" className="hover:text-blue-600 transition-colors">
            О нас
          </a>
          <a href="" className="hover:text-blue-600 transition-colors">
            Услуги
          </a>
        </div>
        <div className="flex flex-col">
          <a href="" className="hover:text-blue-600 transition-colors">
            Карьера
          </a>
          <a href="" className="hover:text-blue-600 transition-colors">
            Контакты
          </a>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-40">
        <a href="" className="hover:text-blue-600 transition-colors">
          BY HZCOMPANY
        </a>
        <a href="" className="hover:text-blue-600 transition-colors">
          © 2025 Московская коллегия адвокатов «Кятова, Клячковский и Партнёры».
          Все права защищены
        </a>
        <a href="" className="hover:text-blue-600 transition-colors">
          designed by ivan peter
        </a>
      </div>
    </div>
  );
};
