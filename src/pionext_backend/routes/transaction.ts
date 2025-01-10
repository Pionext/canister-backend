import { Router } from "express";
import { getAllTransaction } from "../controllers/TransactionController";

const router = Router();

router.get("/", getAllTransaction);

export default router;
