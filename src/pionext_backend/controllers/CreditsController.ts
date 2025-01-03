import { Request, Response } from "express";
import { pionextBalance } from "../storage/pionextBalance";
import {
  getUserTransaction,
  transactions,
  TransactionType,
} from "../storage/transaction";

interface PurchaseRequest {
  userId: string;
  amount: number;
}

export const purchase = (req: Request, res: Response) => {
  const body = req.body as unknown as PurchaseRequest;
  const userId = body.userId;
  const amount = body.amount;

  const userBalance = pionextBalance.get(userId)!;
  if (!userBalance) res.status(404).json({ message: "User not found!" });

  if (userBalance) {
    userBalance.balance = userBalance?.balance + amount;
    userBalance.lastUpdated = new Date().toISOString();
    pionextBalance.insert(userId, userBalance);
  }

  const transactionId = `txn_${Date.now()}`;
  const transaction = {
    id: transactionId,
    userId,
    type: TransactionType.PURCHASE,
    amount,
    timestamp: new Date().toISOString(),
  };
  transactions.insert(transactionId, transaction);

  res
    .status(201)
    .json({ message: "Success", balance: userBalance.balance, transaction });
};

export const getBalance = async (req: Request, res: Response) => {
  const userId = req.params.id as unknown as string;

  const userBalance = pionextBalance.get(userId)!;
  if (!userBalance) res.status(404).json({ message: "User not found!" });

  const userTransaction = getUserTransaction(userId);

  res
    .status(201)
    .json({
      message: "Success",
      balance: userBalance.balance,
      transaction: userTransaction,
    });
};
