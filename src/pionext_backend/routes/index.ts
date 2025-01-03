import express from "express";
import { default as balanceRoutes, default as tradeRoutes } from "./credits/balance";
import purchaseRoutes from "./credits/purchase";
import projectRoutes from "./project";

const globalRouter = express.Router();

globalRouter.use("/projects", projectRoutes)
globalRouter.use("/purchase", purchaseRoutes)
globalRouter.use("/balance", balanceRoutes)
globalRouter.use("/trade", tradeRoutes)

export default globalRouter;
