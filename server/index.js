import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import historyRoutes from "./routes/history.js"

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 1300;

app.use("/posts", postRoutes); 
app.use("/user", userRoutes);
app.use("/history", historyRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/assign";

mongoose
  //.connect(process.env.CONNECTION_URL)
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server started on 1300");
});

// This is the server setup
