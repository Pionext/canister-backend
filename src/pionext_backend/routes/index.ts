import { Router } from "express";
import balanceRoutes from "./credits/balance";
import purchaseRoutes from "./credits/purchase";
import projectRoutes from "./project";
import transactionRoute from "./transaction";

const globalRouter = Router();

globalRouter.use("/projects", projectRoutes)
globalRouter.use("/purchase", purchaseRoutes)
globalRouter.use("/balance", balanceRoutes)
globalRouter.use("/transactions", transactionRoute)

export default globalRouter;
