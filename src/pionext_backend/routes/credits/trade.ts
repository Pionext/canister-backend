import { Router } from "express";
import { getAllTrades, saveTradeData } from "../../controllers/TradeController";


const router = Router();

router.post("/", saveTradeData);
router.get("/", getAllTrades);

export default router;
