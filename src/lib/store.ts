import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/positions/positionsSlice";
import { loadState } from "@/app/brouser-storage";

export const store = configureStore({
  devTools: true,
  reducer: {
    card: cardReducer,
  },
  preloadedState: loadState(),
});
