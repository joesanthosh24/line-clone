import { configureStore } from "@reduxjs/toolkit";

import messengerDataReducer from "../features/messenger-data/messengerDataSlice";
import servicesReducer from "../features/services/serviceSlice";

export default configureStore({
  reducer: {
    messengerAppData: messengerDataReducer,
    services: servicesReducer,
  },
});
