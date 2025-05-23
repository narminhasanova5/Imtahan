import mongoose from "mongoose";
const vegefoodsSchema = mongoose.Schema(
  {
    price: { type:Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const vegefoodsModel = mongoose.model("vegefoods", vegefoodsSchema);
export default vegefoodsModel;
