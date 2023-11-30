import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const cardsSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      {
        id: "1",
        name: "Новобранец",
        level: 1,
        price: 50,
        tasks: 0,
        duties: {
          sellProducts: false,
          setPrices: true,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "2",
        name: "Рядовой",
        level: 10,
        price: 80,
        tasks: 5,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "3",
        name: "Сержант",
        level: 10,
        price: 100,
        tasks: 10,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          purchaseMaterials: false,
          assignWorkers: false,
          duel: false,
          submitClaims: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "4",
        name: "Новобранец",
        level: 10,
        price: 50,
        tasks: 10,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "5",
        name: "Рядовой",
        level: 10,
        price: 80,
        tasks: 15,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "6",
        name: "Сержант",
        level: 10,
        price: 100,
        tasks: 20,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          purchaseMaterials: false,
          assignWorkers: false,
          duel: false,
          submitClaims: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "7",
        name: "Новобранец",
        level: 10,
        price: 50,
        tasks: 25,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
      {
        id: "8",
        name: "Новобранец",
        level: 10,
        price: 50,
        tasks: 25,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      },
    ],
    inputTitleValue: "",
    selectedEditCard: null,
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    addCard: (state) => {
      const newCard = {
        id: v4(),
        name: state.inputTitleValue,
        level: 0,
        price: 0,
        tasks: 0,
        duties: {
          sellProducts: false,
          setPrices: false,
          viewAnalytics: false,
          duel: false,
          submitClaims: false,
          purchaseMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutFromTheGang: false,
        },
      };
      if (state.inputTitleValue.length) {
        state.cards.unshift(newCard);
      }
      state.inputTitleValue = "";
      state.selectedEditCard = null;
    },
    editCard: (state, action) => {
      const currentCard = action.payload;
      if (currentCard) {
        state.inputTitleValue = currentCard.name;
      }

      state.selectedEditCard = currentCard;
    },
    updateInput: (state, action) => {
      state.inputTitleValue = action.payload;
    },
    updateCard: (state, action) => {
      const updated = state.cards.map((card) => {
        const newDuties = { ...action.payload.duties };
        if (card.id === action.payload.id) {
          return { ...action.payload };
        }
        return card;
      });

      state.cards = updated;
    },
  },
});

export const { setCards, addCard, updateInput, editCard, updateCard } =
  cardsSlice.actions;

export default cardsSlice.reducer;
