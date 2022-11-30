import express from "express";
import cors from "cors";
import solveRoutes from "./routes/solve.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/solve", solveRoutes);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
