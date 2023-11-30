import React, { useEffect, useState } from "react";
import "./PositionForm.scss";
import { Button } from "../Button/Button";
import { Duties, Position, RootState } from "@/app/utils/types";
import { checkboxNames } from "@/app/utils/constants";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateCard,
} from "@/lib/features/positions/positionsSlice";

type Props = {};

export const PositionForm: React.FC<Props> = ({}) => {
  // @ts-ignore
  const [tempPosition, seTempPosition] = useState<Position>(null);
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: RootState) => state.card.selectedEditCard
  );

  useEffect(() => {
    if (!selected) return;
    seTempPosition(selected);
  }, [selected]);

  const handleCheckboxClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: keyof Duties
  ) => {
    seTempPosition((prev) => {
      return {
        ...prev,
        duties: {
          ...prev?.duties,
          [name]: event.target.checked,
        },
      };
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    seTempPosition((prev) => ({...prev, name: event.target.value}))
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!tempPosition) {
      return;
    }
      dispatch(updateCard(tempPosition));
      // @ts-ignore
      seTempPosition(null);
  };


  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <div className="form__title">
        <span className="form__input--title">Название</span>
        <input
          type="text"
          className="form__input--text"
          value={tempPosition?.name || ''}
          onChange={(event) => handleChange(event)}
          disabled={!tempPosition}
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
                      tempPosition?.duties[name as keyof Duties],
                    })}
                    // @ts-ignore
                    onClick={(event) => handleCheckboxClick(event, name)}
                    checked={
                      tempPosition?.duties[name as keyof Duties] || false
                    }
                    disabled={!tempPosition}
                  />
                  {value}
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button title={"Сохранить"} handleSubmit={handleSubmit} tempPosition={tempPosition} />
    </form>
  );
};
