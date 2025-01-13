import { Request, Response } from "express";
import { TransactionService } from "../services/TransactionService";
import { TransactionSchema } from "../storage/store";
import { tradeSchema } from "../validation/tradeSchema";

export const getAllTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = TransactionService.getAllTransactions({});
    res.status(200).json({ message: "Success", transaction });
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTransaction = (req: Request, res: Response) => {
  try {
    const { error, value } = tradeSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      res.status(400).json({
        message: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
    }

    const newTransaction = TransactionService.createTransaction(value as TransactionSchema);

    res
      .status(201)
      .json({ message: "Trade saved successfully", transaction: newTransaction });
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).json({ message: "Internal server error", error, body: req.body });
  }
};
