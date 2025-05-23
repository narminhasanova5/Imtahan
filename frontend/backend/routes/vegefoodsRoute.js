import express from "express";
import {deleteVegeFoods,postVegeFoods,getVegeFoods} from "../controllers/vegefoodsControllers.js"
const router = express.Router();

router
  .get("/vegefoods", getVegeFoods)
  .post("/vegefoods", postVegeFoods)
  .delete("/vegefoods/:id", deleteVegeFoods);
export default router