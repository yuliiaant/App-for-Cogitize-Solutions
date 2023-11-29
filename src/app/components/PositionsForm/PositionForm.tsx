import React, { ChangeEvent, useState } from "react";
import "./PositionForm.scss";
import { Button } from "../Button/Button";
import { Duties, Position } from "@/app/utils/types";
import { checkboxNames, initialCard } from "@/app/utils/constants";
import classNames from "classnames";

type Props = {
  name: string;
  onNameChange: (arg: string) => void;
  selectedCard: Position;
  updateCard: (arg: Position) => void;
  setSelectedCard: (arg: Position) => void;
};

export const PositionForm: React.FC<Props> = ({
  name,
  onNameChange,
  selectedCard,
  updateCard,
  setSelectedCard,
}) => {
  const [tempCard, setTempCard] = useState(initialCard);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cardToUpdate = { ...selectedCard };

    cardToUpdate.name = name;

    updateCard(cardToUpdate);
    onNameChange('');
    setSelectedCard(initialCard);
  };

  const handleCheckboxClick = (name: keyof Duties) => {
    const cardToUpdate = { ...selectedCard };

    cardToUpdate.duties[name] = !cardToUpdate.duties[name];

    setTempCard(cardToUpdate);

    updateCard(cardToUpdate);
  }


  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <div className="form__title">
        <span className="form__input--title">Название</span>
        <input
          type="text"
          className="form__input--text"
          value={name || ""}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="form__settings">
        <div className="form__settings--title">Обязаности</div>
        <div className="form__settings--content">
          {Object.entries(checkboxNames).map(([title, values]) => (
            <div key={title} className="form__settings--section">
              <span className="section-title">{title}</span>
              {Object.entries(values).map(([name, value]) => (
                <label className="checkbox-container" key={name}>
                  <input
                    type="checkbox"
                    className={classNames("checkbox", {
                      "checkbox--active":
                        selectedCard?.duties[name as keyof Duties]
                        && !!selectedCard.id,
                    })}
                    // @ts-ignore
                    onClick={() => handleCheckboxClick(name)}
                  />
                  {value}
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button title={"Сохранить"} handleSubmit={handleSubmit} />
    </form>
  );
};
