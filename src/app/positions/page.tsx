"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "../components/Button/Button";
import { PositionCard } from "../components/PositionsCard/PositionCard";
import { initialCard, initialList } from "../utils/constants";
import "./style.scss";
import { PositionForm } from "../components/PositionsForm/PositionForm";
import { Position } from "../utils/types";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { PositionInput } from "../components/PositionInput/PositionInput";
import { v4 as uuidv4 } from "uuid";

export default function Positions() {
  const [selectedCard, setSelectedCard] = useState<Position>(initialCard);
  const [positionsList, setPositionsList] = useState(initialList);
  const [name, setName] = useState("");
  const [isNewCardShown, setIsNewCardShown] = useState(false);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  const updateCard = (cardToUpdate: Position) => {
    setPositionsList((currentCards) => {
      return currentCards.map((currentCard) => {
        if (currentCard.id === cardToUpdate.id) {
          return cardToUpdate;
        }

        return currentCard;
      });
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(positionsList);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setPositionsList(newItems);
  };
  console.log(name);

  const handleButtonClick = () => {
    setIsNewCardShown(true);
    setSelectedCard(initialCard);
    setName("");
  };

  const addPosition = (name: string) => {
    const newPosition = { ...initialCard };
    newPosition.name = name;
    newPosition.id = uuidv4();

    setPositionsList((prev) => [newPosition, ...prev]);
    setSelectedCard(initialCard);
    setIsNewCardShown(false);
  };

  console.log(selectedCard)

  return (
    <>
      <div className="positions-container">
        <div className="sidebar-container">
          <div className="cards-container">
            {isNewCardShown && (
              <PositionInput
                setName={setName}
                name={name}
                addPosition={addPosition}
              />
            )}
            {positionsList.map((card) => (
              <PositionCard
                key={card.id}
                card={card}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
                setName={setName}
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
          name={name}
          onNameChange={setName}
          selectedCard={selectedCard}
          updateCard={updateCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </>
  );
}
