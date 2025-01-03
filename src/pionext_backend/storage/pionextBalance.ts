import { StableBTreeMap } from "azle";

interface PionextBalance {
  userId: string;
  balance: number;
  lastUpdated: string;
}

export const pionextBalance = StableBTreeMap<string, PionextBalance>(0);
