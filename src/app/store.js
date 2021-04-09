import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";
import messengerDataReducer from "../features/messenger-data/messengerDataSlice";
import servicesReducer from "../features/services/serviceSlice";

export default configureStore({
  reducer: {
    lineProducts: productReducer,
    messengerAppData: messengerDataReducer,
    services: servicesReducer,
  },
});
