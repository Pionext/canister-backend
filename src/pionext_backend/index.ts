import cors from "cors";
import express from "express";
import globalRouter from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (_, res) => {
  res.status(200).json({
    message: "Welcome 🟢",
  });
});

app.use("/", globalRouter);

app.listen();
