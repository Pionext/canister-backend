import { Router } from "express";
import creditTransactionRoute from "./creditTransaction";
import pionextTransactionRoute from "./pionextTransaction";
import projectRoutes from "./project";

const globalRouter = Router();

globalRouter.use("/projects", projectRoutes)
// credit transaction routes
globalRouter.use("/transactions/credits", creditTransactionRoute)
// pionext transaction routes
globalRouter.use("/transactions/pionext", pionextTransactionRoute)

export default globalRouter;
