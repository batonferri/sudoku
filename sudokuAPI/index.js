import express from "express";
import cors from "cors";
import solveRoutes from "./routes/solve.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/solve", solveRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running in port: ${PORT}`);
});
