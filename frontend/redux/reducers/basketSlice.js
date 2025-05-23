import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("basket")) || [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existing = state.items.find((i) => i._id === action.payload._id);
      if (!existing) {
        state.items.push(action.payload);
        localStorage.setItem("basket", JSON.stringify(state.items));
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;