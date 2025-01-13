import { StableBTreeMap } from "azle";
import { TransactionType } from "../types";

export enum Entities {
    TRANSACTION = "transaction" 
}


export type TransactionSchema = {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  type: TransactionType;
}


type DatabaseSchema = TransactionSchema[]

export const DATABASE = StableBTreeMap<Entities, DatabaseSchema>(0);

