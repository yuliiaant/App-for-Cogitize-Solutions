import { initialList } from "./constants";

export const findCardById = (id: string | undefined) => {
  return initialList.find(position => position.id === id) || null;
};
