import { Router } from "express";
import projectRoutes from "./project";
import transactionRoute from "./transaction";

const globalRouter = Router();

globalRouter.use("/projects", projectRoutes)
globalRouter.use("/transactions", transactionRoute)

export default globalRouter;
