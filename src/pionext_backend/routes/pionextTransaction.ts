import { Router } from "express";
import { createPionextTransaction, getAllPionextTransactions, getPionextBalance, updatePionextBalance } from "../controllers/PionextTransaction";

const pionextTransactionRoute = Router();

pionextTransactionRoute.post("/", createPionextTransaction);
pionextTransactionRoute.get("/", getAllPionextTransactions);
pionextTransactionRoute.get("/balance/:userId", getPionextBalance);
pionextTransactionRoute.put("/balance", updatePionextBalance);

export default pionextTransactionRoute; 
