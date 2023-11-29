import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/positions/positionsSlice";

export const store = configureStore({
  reducer: {
    todo: cardReducer
  }
});
