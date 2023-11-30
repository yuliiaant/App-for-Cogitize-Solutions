"use client";

import { useState } from "react";
import { Button } from "../components/Button/Button";
import { PositionCard } from "../components/PositionsCard/PositionCard";
import "./style.scss";
import { PositionForm } from "../components/PositionsForm/PositionForm";
import { Position, RootState } from "../utils/types";
import { PositionInput } from "../components/PositionInput/PositionInput";
import { useSelector } from "react-redux";
import { updateInput } from "@/lib/features/positions/positionsSlice";
import { useDispatch } from "react-redux";

export default function Positions() {
  const [isNewCardShown, setIsNewCardShown] = useState(false);

  const cards = useSelector((state: RootState) => state.card.cards);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsNewCardShown(true);
    dispatch(updateInput(''));
  };

  return (
    <>
      <div className="positions-container">
        <div className="sidebar-container">
          <div className="cards-container">
            {isNewCardShown && (
              <PositionInput
                setIsNewCardShown={setIsNewCardShown}
              />
            )}
            {cards.map((card: Position) => (
              <PositionCard
                key={card?.id}
                card={card}
                setIsNewCardShown={setIsNewCardShown}
              />
            ))}
          </div>
          <button
            onClick={handleButtonClick}
            className="cards-button"
            disabled={isNewCardShown}
          >
            <Button title={"Создать новую должность"} />
          </button>
        </div>
        <PositionForm
        />
      </div>
    </>
  );
}
