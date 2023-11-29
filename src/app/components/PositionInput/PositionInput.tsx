import React from "react";
import Image from "next/image";
import Dots from "../../../../public/dots.svg";
import "./PositionInput.scss";
import { initialCard } from "@/app/utils/constants";

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  addPosition: (name: string) => void;
}

export const PositionInput: React.FC<Props> = ({ setName, name, addPosition }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name === '') {
      return;
    };

    addPosition(name);
    setName('');
  };

  return (
    <form className="card card--selected" onSubmit={(event) => handleSubmit(event)}>
      <Image src={Dots} alt="dots" width={12} height={20} />
      <div className="card__info">
        <div className="card__container">
          <span className="card__secondary">Название</span>
        </div>
        <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="card__input card__title"
            autoFocus
          />
      </div>
    </form>
  );
};
