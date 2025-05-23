import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVegeFoodsThunk = createAsyncThunk(
  "/vegefoods/get",
  async () => {
    const res = await axios.get("http://localhost:5000/vegefoods");
    return res.data;
  }
);

export const postVegeFoodsThunk = createAsyncThunk(
  "/vegefoods/post",
  async (data) => {
    const res = await axios.post("http://localhost:5000/vegefoods", data);
    return res.data;
  }
);

export const deleteVegeFoodsThunk = createAsyncThunk(
  "/vegefoods/delete",
  async (id) => {
    await axios.delete(`http://localhost:5000/vegefoods/${id}`);
    return id;
  }
);

const vegefoodsSlice = createSlice({
  name: "vegefoods",
  initialState: {
    winter: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVegeFoodsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVegeFoodsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.vegefoods = action.payload;
      })
      .addCase(getVegeFoodsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postVegeFoodsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.vegefoods.push(action.payload);
      })
      .addCase(deleteVegeFoodsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.vegefoods = state.vegefoods.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export default vegefoodsSlice.reducer;
