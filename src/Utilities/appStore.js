import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import darkReducer from "./darkMode";
import imageSlice from "./ImageSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    dark: darkReducer,
    image: imageSlice,
  },
});

export default appStore;
