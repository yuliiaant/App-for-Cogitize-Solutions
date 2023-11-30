import React from "react";
import "./PositionCard.scss";
import Image from "next/image";
import Dots from "../../../../public/dots.svg";
import { Position, RootState } from "@/app/utils/types";
import classNames from "classnames";
import { editCard } from "@/lib/features/positions/positionsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  card: Position;
  setIsNewCardShown: (arg: boolean) => void;
  index: number;
  tempPosition: Position | null;
};

export const PositionCard: React.FC<Props> = ({
  card,
  setIsNewCardShown,
  index,
  tempPosition,
}) => {
  const selected = useSelector(
    (state: RootState) => state.card.selectedEditCard
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsNewCardShown(false);
    dispatch(editCard(card));
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => {
        return (
          <div
            className={classNames("card", {
              "card--selected": card?.id === tempPosition?.id,
            })}
            onClick={handleClick}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Image src={Dots} alt="dots" width={12} height={20} />
            <div className="card__info">
              <div className="card__container">
                <div className="card__title">{card?.name}</div>
                <div className="card__title--price">
                  <span className="price">{`$${card?.price} `}</span>/ час
                </div>
              </div>
              <div className="card__secondary">
                {card.level >= 10 ? `${card?.tasks} заданий` : "от 10 lvl"}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
