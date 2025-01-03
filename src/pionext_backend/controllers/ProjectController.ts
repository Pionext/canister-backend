import { Request, Response } from "express";
import { getProject, Project, projects } from "../storage/project";
import { projectSchema } from "../validation/projectSchema";

export const createProject = async (req: Request, res: Response) => {
  const project = req.body.project as Project;
  const { error, value } = projectSchema.validate(project);

  if (error) {
    res.status(400).json({
      error,
      value,
    });
  }

  projects.insert(project.id, project);

  res.status(201).json({
    message: "Project created successfully!",
    project,
  });
};


export const getProjectsById =  async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const project = getProject(projectId);

  if(!project) res.status(404)

  res.status(200).json({
    project,
  });
}

export const getAllProjects =  async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const project = getProject(projectId);

  if(!project) res.status(401)

  res.status(200).json({
    project,
  });
}
