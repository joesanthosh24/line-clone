import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";
import messengerDataReducer from "../features/messenger-data/messengerDataSlice";

export default configureStore({
  reducer: {
    lineProducts: productReducer,
    messengerAppData: messengerDataReducer,
  },
});
