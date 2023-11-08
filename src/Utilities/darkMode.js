import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    isDark: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { isDark } = darkSlice.actions;
export default darkSlice.reducer;
