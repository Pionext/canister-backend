import { Request, Response } from "express";
import { Credit, getProject, Project, projects } from "../storage/project";
import { creditSchema, projectSchema } from "../validation/projectSchema";

export const createProject = async (req: Request, res: Response) => {
  const project = req.body.project as Project;
  const credits = req.body.credits as Credit;
  const { error, value } = projectSchema.validate(project);

  if (error) {
    res.status(400).json({
      error,
      value,
    });
  }
  const existingProject = getProject(project.id);

  if (credits) {
    const { error, value } = creditSchema.validate(credits);

    if (error) {
      res.status(400).json({
        error,
        value,
        credits
      });
    }

    project.credits = [credits];
  }
  projects.insert(project.id, {...existingProject, ...project});

  res.status(201).json({
    message: `Project ${existingProject ? "updated" : "created"} successfully!`,
    project,
  });
};


export const getProjectsById = async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const project = getProject(projectId);

  if (!project) res.status(404);

  res.status(200).json({
    project,
  });
};
