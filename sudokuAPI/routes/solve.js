import express from "express";
import { solvePuzzle } from "../controllers/solve.js";

const router = express.Router();

router.post("/", solvePuzzle);

export default router;
