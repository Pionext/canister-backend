import { StableBTreeMap } from "azle";
import { TransactionType } from "../types";

export enum Entities {
    CREDIT_TRANSACTION = "credit_transaction",
    PIONEXT_TRANSACTION = "pionext_transaction"
}

export type TransactionSchema = {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  type: TransactionType;
}

export type PionextTransaction =  { 
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  timestamp: string;
}

type DatabaseSchema = TransactionSchema[] | PionextTransaction[];

export const DATABASE = StableBTreeMap<Entities, DatabaseSchema>(0);

