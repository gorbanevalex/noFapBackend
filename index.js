import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log("Server started!");
});

mongoose
  .connect(
    `mongodb+srv://alexlinberg07:${process.env.MONGODB_PASSWORD}@nofap.tqjqyeu.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDb already!");
  });
