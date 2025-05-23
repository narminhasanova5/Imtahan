import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (!existItem) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    clearWishlist: (state) => {
      state.items = [];
    },

    fetchWishlistStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchWishlistSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    fetchWishlistFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} = wishlistSlice.actions;

export const fetchWishlist = () => async (dispatch) => {
  try {
    dispatch(fetchWishlistStart());
    const response = await fetch("/api/wishlist");
    const data = await response.json();

    dispatch(fetchWishlistSuccess(data));
  } catch (error) {
    dispatch(fetchWishlistFailure(error.message));
  }
};

export default wishlistSlice.reducer;
