import express from "express";
import balanceRoutes from "./credits/balance";
import purchaseRoutes from "./credits/purchase";
import tradeRoutes from "./credits/trade";
import projectRoutes from "./project";
import transactionRoute from "./transaction";

const globalRouter = express.Router();

globalRouter.use("/projects", projectRoutes)
globalRouter.use("/purchase", purchaseRoutes)
globalRouter.use("/balance", balanceRoutes)
globalRouter.use("/trade", tradeRoutes)
globalRouter.use("/transactions", transactionRoute)

export default globalRouter;
