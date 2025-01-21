import { Router } from "express";
import { createTransaction, getAllTransaction } from "../controllers/TransactionController";

const router = Router();

router.get("/", getAllTransaction);
router.post("/", createTransaction);

export default router;
