import Joi from "joi";

const materialSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().valid("PDF", "Video", "Other", "Website").required(),
});

export const projectSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  creditSymbol: Joi.string().required(),
  launchDate: Joi.date().iso().required(),
  status: Joi.string().valid("Active", "Inactive", "Upcoming").required(),
  userId: Joi.string().uuid().required(),
  materials: Joi.array().items(materialSchema).required(),
  targetRaise: Joi.number().required(),
  //TODO: CHECK IF IT IS NEEDED AT ALL.
  maxSupply: Joi.number().required(),
});

export const creditSchema = Joi.object({
  id: Joi.string().required(),
  projectId: Joi.string().required(),
  symbol: Joi.string().required(),
  name: Joi.string().required(),
  targetPrice: Joi.number().required(),
  currentSupply: Joi.number().required(),
  maxSupply: Joi.number().required(),
});
