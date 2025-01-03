import { Router } from "express";
import { getBalance } from "../../controllers/CreditsController";

const router = Router();

router.get("/:id", getBalance);

export default router;
