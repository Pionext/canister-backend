import Joi from "joi";

export const tradeSchema = Joi.object({
  id: Joi.string().required(),
  creditId: Joi.string().required(),
  userId: Joi.string().uuid().required(),
  type: Joi.string().valid("buy", "sell").required(),
  amount: Joi.number().positive().required(),
  price: Joi.number().positive().required(),
  timestamp: Joi.date().iso().required(),
});

export const pionextTransactionSchema = Joi.object({
  id: Joi.string().required(),
  userId: Joi.string().uuid().required(),
  type: Joi.string().valid("buy", "sell", "purchase").required(),
  amount: Joi.number().positive().required(),
  timestamp: Joi.date().iso().required(),
});


export const userPionextSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  balance: Joi.number().positive().required()
});
