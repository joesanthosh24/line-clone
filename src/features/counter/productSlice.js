import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "lineProducts",
  initialState: {
    products: [],
  },
  reducers: {
    initializeValues: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products = action.payload;
    },
  },
});

export const { initializeValues } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAllProducts = (state) => state.lineProducts.products;

export const selectById = (state, filterId) =>
  state.lineProducts.products.filter((item) => item.id === filterId)[0];

export default productsSlice.reducer;
