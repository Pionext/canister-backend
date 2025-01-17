import { Router } from "express";
import { createProject, getProjectsById } from "../controllers/ProjectController";

const router = Router();

router.post("/", createProject);
router.get("/:id", getProjectsById);

export default router;
