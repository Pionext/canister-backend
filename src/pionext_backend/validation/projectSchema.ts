import Joi from "joi";

const materialSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().valid("PDF", "Video", "Other").required(),
});

export const projectSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  launchDate: Joi.date().iso().required(),
  status: Joi.string().valid("Active", "Inactive", "Upcoming").required(),
  userId: Joi.string().uuid().required(),
  materials: Joi.array().items(materialSchema).required(),
});
