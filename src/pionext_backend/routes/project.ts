import { Router } from "express";
import { createProject, getAllProjects, getProjectsById } from "../controllers/ProjectController";

const router = Router();

router.post("/", createProject);
router.get("/", getAllProjects)
router.get("/:id", getProjectsById);

export default router;
