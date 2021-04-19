import { createSlice } from "@reduxjs/toolkit";

import { messengerData } from "../../data/messenger-app.data";

export const messengerDataSlice = createSlice({
  name: "messengerAppData",
  initialState: {
    messengerData,
  },
});

export const selectAllData = (state) => state.messengerAppData.messengerData;

export default messengerDataSlice.reducer;
