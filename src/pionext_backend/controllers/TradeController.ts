import { Request, Response } from "express";
import { TradeData } from "../storage/trades";
import { tradeSchema } from "../validation/tradeSchema";

export const saveTradeData = (req: Request, res: Response) => {
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

    TradeData.insert(value.id, value);

    res.status(201).json({ message: "Trade saved successfully", trade: value });
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTrades = (req: Request, res: Response) => {
  try {
    const trades = TradeData.items().map(([key, value]) => value);

    if (!trades || trades.length === 0) {
       res.status(404).json({ message: "No trades found." });
    }

    res.status(200).json({ message: "Success", trades });
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
