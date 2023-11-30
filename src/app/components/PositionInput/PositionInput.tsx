import React from "react";
import Image from "next/image";
import Dots from "../../../../public/dots.svg";
import "./PositionInput.scss";
import { initialCard } from "@/app/utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCard, updateInput } from "@/lib/features/positions/positionsSlice";
import { State } from "react-beautiful-dnd";
import { RootState } from "@/app/utils/types";

type Props = {
  setIsNewCardShown: (arg: boolean) => void;
}

export const PositionInput: React.FC<Props> = ({ setIsNewCardShown }) => {
  const value = useSelector((state: RootState) => state.card.inputTitleValue);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInput(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    dispatch(addCard());
    setIsNewCardShown(false);
  };

  return (
    <form className="card card--selected" onSubmit={(event) => handleSubmit(event)}>
      <Image src={Dots} alt="dots" width={12} height={20} />
      <div className="card__info">
        <div className="card__container">
          <span className="card__secondary">Название</span>
        </div>
        <input
            value={value}
            onChange={(event) => handleChange(event)}
            className="card__input card__title"
            autoFocus
          />
      </div>
    </form>
  );
};
