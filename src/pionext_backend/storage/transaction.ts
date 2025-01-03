import { StableBTreeMap } from "azle";

export enum TransactionType {
  SELL = "sell",
  PURCHASE = "purchase",
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  type: TransactionType;
}

export const transactions = StableBTreeMap<string, Transaction>(0);

export const getUserTransaction = (userId: string) => {
  const userTransaction: Transaction[] = [];
  for (const key of transactions.keys()) {
    const tx = transactions.get(key)!;

    if (tx.userId === userId) {
      userTransaction.push(tx);
    }
  }

  return userTransaction;
};
