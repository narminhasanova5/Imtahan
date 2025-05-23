import express from "express";
import cors from "cors";
import { connectDB } from "./configs/config.js";
import vegefoodsRoute from "./routes/vegefoodsRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"));

app.use("/", vegefoodsRoute);


connectDB();

app.listen(5000, () => {
  console.log("backend qalxdi");
});
