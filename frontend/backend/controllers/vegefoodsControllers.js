import vegefoodsModel from "../models/vegefoodsModels.js";
const getVegeFoods = async (req, res) => {
  const vegefoods = await vegefoodsModel.find();
  res.json(vegefoods);
};
const postVegeFoods = async (req, res) => {
  const { name, price, image } = req.body;
  const vegefoods = { name, price, image };
  await vegefoodsModel.create(vegefoods);
  res.json(vegefoods);
};
const deleteVegeFoods = async (req, res) => {
  const { id } = req.params;
  await vegefoodsModel.findByIdAnddelete(id);
  res.json(`${id} has been deleted`);
};
export { getVegeFoods, postVegeFoods, deleteVegeFoods };
