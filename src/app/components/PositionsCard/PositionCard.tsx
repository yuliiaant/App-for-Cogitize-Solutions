import React, { Dispatch, SetStateAction } from "react";
import "./PositionCard.scss";
import Image from "next/image";
import Dots from "../../../../public/dots.svg";
import { Position } from "@/app/utils/types";
import classNames from "classnames";


type Props = {
  card: Position;
  setSelectedCard: (arg: Position) => void;
  selectedCard: Position | null;
  setName: (arg: string) => void;
  setIsNewCardShown: (arg: boolean) => void;
};

export const PositionCard: React.FC<Props> = ({
  card,
  setSelectedCard,
  selectedCard,
  setName,
  setIsNewCardShown,
}) => {
  
  const handleClick = () => {
    setIsNewCardShown(false);
    setSelectedCard(card);
    setName(card?.name);
  };

  return (
    <button
      className={classNames('card', {'card--selected': card?.id === selectedCard?.id})}
      onClick={handleClick}
    >
      <Image src={Dots} alt="dots" width={12} height={20} />
      <div className="card__info">
        <div className="card__container">
          <div className="card__title">{card?.name}</div>
          <div className="card__title--price">
            <span className="price">{`$${card?.price} `}</span>/ час
          </div>
        </div>
        <div className="card__secondary">{`${card?.tasks} заданий`}</div>
      </div>
    </button>
  );
};
