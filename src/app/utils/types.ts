export type Duties = {
  sellProducts: boolean;
  setPrices: boolean;
  viewAnalytics: boolean;
  duel: boolean;
  submitClaims: boolean;
  purchaseMaterials: boolean;
  assignWorkers: boolean;
  assignPositions: boolean;
  kickOutFromTheGang: boolean;
};

export type Position = {
  id: string;
  name: string;
  level: number;
  price: number;
  tasks: number;
  duties: Duties;
};
