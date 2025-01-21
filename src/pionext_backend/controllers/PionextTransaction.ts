import { Request, Response } from "express";
import { PionextTransactionService } from "../services/PionextService";
import { UserService } from "../services/UserService";
import { PionextTransaction } from "../storage/store";
import {
  pionextTransactionSchema,
  userPionextSchema,
} from "../validation/tradeSchema";

export const createPionextTransaction = (req: Request, res: Response) => {
  const { error, value } = pionextTransactionSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json({
      message: "Validation error",
      details: error.details.map((detail) => detail.message),
    });
  }

  const newPionextTransaction =
    PionextTransactionService.createPionextTransaction(
      value as PionextTransaction
    );

  res.status(201).json({
    message: "Pionext transaction saved successfully",
    transaction: newPionextTransaction,
  });
};

export const getAllPionextTransactions = (req: Request, res: Response) => {
  const transaction = PionextTransactionService.getAllPionextTransactions({});
  res.status(200).json({ message: "Success", transaction });
};

export const updatePionextBalance = (req: Request, res: Response) => {
  const { error, value } = userPionextSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json({
      message: "Validation error",
      details: error.details.map((detail) => detail.message),
    });
  }

  const updatedPionextBalence = UserService.updateUserPionextBalance(
    value.userId,
    value.balance
  );

  res.status(201).json({
    message: "Pionext balance updated successfully",
    user: updatedPionextBalence,
  });
};

export const getPionextBalance = (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!userId) {
    res.status(400).json({
      message: "Validation error",
      details: "userId is requered!",
    });
  }

  const pionextBalence = UserService.getUserPionextBalance(userId);

  res.status(201).json({
    message: "Pionext balance!",
    transaction: pionextBalence,
  });
};
