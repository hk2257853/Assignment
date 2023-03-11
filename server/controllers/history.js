import express from "express";
import HistoryData from "../models/history.js";

const router = express.Router();

export const getHistory = async (req, res) => {
  try {
    const historyData = await HistoryData.find({"creator":req.userId});
    res.status(200).json(historyData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHistory = async (req, res) => {
  const post = req.body;

  const newHistoryData = new HistoryData({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newHistoryData.save();
    res.status(201).json(newHistoryData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
