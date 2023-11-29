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
    selectedEditCard: undefined,
  },
  reducers: {
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
        state.cards.push(newCard);
      }
      state.inputTitleValue = "";
    },
    // deleteTask: (state, action) => {
    //   const idxTask = state.cards.findIndex(
    //     (task) => task.id === action.payload
    //   );
    //   state.cards.splice(idxTask, 1);
    //   // state.todos.filter((task, i) => i !== action.payload);
    // },
    editCard: (state, action) => {
      const currentCard = {
        id: action.payload.id,
        name: action.payload.name,
        level: action.payload.level,
        price: action.payload.price,
        tasks: action.payload.tasks,
        duties: action.payload.duties,
      };
      state.inputTitleValue = currentCard.name;

      state.selectedEditCard = currentCard;

    },
    updateCard: (state, action) => {
      state.inputTitleValue = action.payload;
    }
  }
});

export const {
  addCard,
  // deleteCard,
  updateCard,
  editCard,
  // editAddCard
} = cardsSlice.actions;

export default cardsSlice.reducer;
