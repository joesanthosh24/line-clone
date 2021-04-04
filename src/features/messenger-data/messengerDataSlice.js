import { createSlice } from "@reduxjs/toolkit";

import { messengerData, messengerAppInfo } from "../../data/messenger-app.data";

export const messengerDataSlice = createSlice({
  name: "messengerAppData",
  initialState: {
    messengerData,
    messengerHeading: messengerAppInfo,
  },
});

export const selectAllData = (state) => state.messengerAppData.messengerData;
export const selectHeadingData = (state) =>
  state.messengerAppData.messengerHeading;

export default messengerDataSlice.reducer;
