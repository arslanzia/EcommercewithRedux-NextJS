import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
      console.log("Data Received Hello from the ProductSlice component");
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
