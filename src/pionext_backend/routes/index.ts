import express from "express";
import projectRoutes from "./project";

const globalRouter = express.Router();

globalRouter.use("/projects", projectRoutes)

export default globalRouter;
