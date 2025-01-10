import { StableBTreeMap } from "azle";
import { TransactionType } from "../types";

type Trade = {
  id: string;
  creditId: string;
  userId: string;
  type: TransactionType;
  amount: number;
  price: number;
  timestamp: string;
};

export const TradeData = StableBTreeMap<string, Trade[]>(0);
