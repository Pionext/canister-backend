import { Request, Response } from "express";
import { Transactions } from "../storage/transaction";

export const getAllTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = Transactions.items().map(([key, value]) => value);
    
    res.status(200).json({ message: "Success", transactions });
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
