import Joi from "joi";

export const creditSchema = Joi.object({
  id: Joi.string().required(),
  projectId: Joi.string().required(),
  symbol: Joi.string().required(),
  name: Joi.string().required(),
  targetPrice: Joi.number().required(),
  currentSupply: Joi.number().required(),
  maxSupply: Joi.number().required(),
});


const materialSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().valid("Website", "Document", "Video", "Other").required(),
});


const imageSchema = Joi.object({
  url: Joi.string().required(),
  alt: Joi.string().required(),
});


const keyFeatureSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});


const teamMemberSchema = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().required(),
  bio: Joi.string().required(),
  links: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        url: Joi.string().uri().required(),
      })
    )
    .optional(),
});


export const projectSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  creditSymbol: Joi.string()
    .pattern(/^[A-Z]{3,5}$/)
    .message("Credit symbol must be 3-5 uppercase letters.")
    .required(),
  launchDate: Joi.date().iso().required(),
  status: Joi.string().valid("Active", "Inactive", "Upcoming").required(),
  userId: Joi.string().uuid().required(),
  materials: Joi.array().items(materialSchema).min(1).required(),
  targetRaise: Joi.number().positive().required(),
  maxSupply: Joi.number().positive().required(),
  image: imageSchema.optional(),
  credits: Joi.array().items(creditSchema).optional(),
  details: Joi.object({
    problemSolution: Joi.object({
      problem: Joi.string().required(),
      solution: Joi.string().required(),
    }).required(),
    targetAudience: Joi.array().items(Joi.string()).min(1).required(),
    keyFeatures: Joi.array().items(keyFeatureSchema).min(1).required(),
    howItWorks: Joi.object({
      steps: Joi.array().items(Joi.string()).min(1).required(),
    }).required(),
    creditUsage: Joi.object({
      description: Joi.string().required(),
      examples: Joi.array().items(Joi.string()).min(1).required(),
    }).required(),
    team: Joi.object({
      members: Joi.array().items(teamMemberSchema).min(1).required(),
    }).required(),
  }).optional(),
});

