import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "images",
  initialState: {}, // Change null to an empty object
  reducers: {
    addItem: (state, action) => {
      state.initialState = action.payload;
    },
  },
});

export const { addItem } = imageSlice.actions;
export default imageSlice.reducer;
