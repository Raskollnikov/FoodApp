import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import darkReducer from "./darkMode";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    dark: darkReducer,
  },
});

export default appStore;
