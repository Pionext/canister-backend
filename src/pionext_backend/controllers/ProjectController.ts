import { Request, Response } from "express";
import { projectSchema } from "../validation/projectSchema";

export const createProject = (req: Request, res: Response) => {
  const project = req.body.project;

  const { error, value } = projectSchema.validate(project);

  if (error) {
    res.status(400).json({
      error,
      value,
    });
  }

  res.status(201).json({
    message: "Project created successfully!",
    project,
  });
};
