import { StableBTreeMap } from "azle";

export type User = {
  id: string;
  pionextBalance: {
    balance: number;
    lastUpdated: string;
  };
};

export const userStore = StableBTreeMap<string, User>(0);
