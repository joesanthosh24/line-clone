import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    languageChosen: "jp",
  },
  reducers: {
    chooseLanguage: (state, action) => {
      state.languageChosen = action.payload;
    },
  },
});

export const { chooseLanguage } = languageSlice.actions;

export const selectCurrentLanguage = (state) => state.languages.languageChosen;

export default languageSlice.reducer;
