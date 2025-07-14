import Button from "@/app/shared/Button";
import React from "react";

export const Form = () => {
  return (
    <div>
      <div className="">
        <div className="">присоединяйтесь к нам</div>
        <div className="">
          Мы открыты для сотрудничества с профессиональными, амбициозными и
          целеустремленными специалистами в области права
        </div>
      </div>

      <div className="">
        <input type="text" className="" placeholder="ВАШЕ ИМЯ" />
        <div className="">
          <input type="text" className="" placeholder="EMAIL" />
          <input type="text" className="" placeholder="TELEGRAM" />
        </div>
        <input type="text" className="" placeholder="ВАША СПЕЦИАЛИЗАЦИЯ" />
        <input type="text" className="" placeholder="КОММЕНТАРИЙ" />
      </div>
      <Button text="отправить заявку" />
    </div>
  );
};
