"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { PositionCard } from "../components/PositionsCard/PositionCard";
import "./style.scss";
import { PositionForm } from "../components/PositionsForm/PositionForm";
import { Position, RootState } from "../utils/types";
import { PositionInput } from "../components/PositionInput/PositionInput";
import { useSelector } from "react-redux";
import { setCards, updateInput } from "@/lib/features/positions/positionsSlice";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function Positions() {
  const [isNewCardShown, setIsNewCardShown] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  const cards = useSelector((state: RootState) => state.card.cards);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsNewCardShown(true);
    dispatch(updateInput(""));
  };
  // @ts-ignore
  const handleOndragEnd = (result) => {
    if (!result.destination) return;
    const items = structuredClone(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    items.forEach((item) => dispatch(setCards(items)));
  };

  return (
    <>
      {isBrowser ? (
        <DragDropContext onDragEnd={handleOndragEnd}>
          <div className="positions-container">
            <div className="sidebar-container">
              <Droppable droppableId="droppable-1">
                {(provided) => (
                  <div
                    className="cards-container"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {isNewCardShown && (
                      <PositionInput setIsNewCardShown={setIsNewCardShown} />
                    )}
                    {cards.map((card: Position, index) => (
                      <PositionCard
                        key={card?.id}
                        card={card}
                        setIsNewCardShown={setIsNewCardShown}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <button
                onClick={handleButtonClick}
                className="cards-button"
                disabled={isNewCardShown}
              >
                <Button title={"Создать новую должность"} />
              </button>
            </div>
            <PositionForm />
          </div>
        </DragDropContext>
      ) : null}
    </>
  );
}
