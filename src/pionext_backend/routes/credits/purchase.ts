import { Router } from "express";
import { purchase } from "../../controllers/CreditsController";

const router = Router();

router.post("/", purchase);

export default router;
