import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../reducers/basketSlice";
import vegefoodsReducer from "../reducers/vegefoodsSlice";
import wishlistReducer from "../reducers/wishlistSlice"
const store = configureStore({
  reducer: {
    vegefoods: vegefoodsReducer,
    basket: basketReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
