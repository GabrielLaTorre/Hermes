import express from "express";
import dotenv from "dotenv";
import { receiveMessage } from "../controllers/MessageController";

dotenv.config();

const PORT = process.env.PORT || 443;


export default function startServer() {
  const app = express();

  app.use(express.json());

  app.post('/receiveMessage', receiveMessage)

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log("Server is running on port 443!");
  });
}



