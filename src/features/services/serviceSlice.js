import { createSlice } from "@reduxjs/toolkit";

import {
  servicesData,
  serviceHeaderInfo,
  services,
} from "../../data/services.data";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    categories: servicesData,
    servicesHeading: serviceHeaderInfo,
    chosenServiceItems: [],
  },
  reducers: {
    chooseCategory: (state, action) => {
      if (action.payload === "products") {
        const categoriesArray = Object.keys(services);
        let servicesArray = [];

        categoriesArray.forEach((category) => {
          servicesArray = [...servicesArray, ...services[category]];
        });

        state.chosenServiceItems = servicesArray;
      } else {
        state.chosenServiceItems = services[action.payload];
      }
    },
  },
});

export const { chooseCategory } = servicesSlice.actions;

export const selectAllCategories = (state) => state.services.categories;
export const selectChosenServiceItems = (state) =>
  state.services.chosenServiceItems;

export default servicesSlice.reducer;
