import { StableBTreeMap } from "azle";
import { TransactionType } from "../types";

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  type: TransactionType;
}

export const Transactions = StableBTreeMap<string, Transaction>(0);

export const getUserTransaction = (userId: string) => {
  const userTransaction: Transaction[] = [];
  for (const key of Transactions.keys()) {
    const tx = Transactions.get(key)!;

    if (tx.userId === userId) {
      userTransaction.push(tx);
    }
  }

  return userTransaction;
};
