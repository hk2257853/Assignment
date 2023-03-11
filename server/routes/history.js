import express from "express";

import {
  getHistory,
  createHistory,
} from "../controllers/history.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getHistory); 
router.post("/", auth, createHistory); 

export default router;
