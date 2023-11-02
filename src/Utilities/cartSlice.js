import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeTest: (state, action) => {
      const itemsToRemove = action.payload;
      const itemToRemove = itemsToRemove[0]; // Get the first item to remove

      // Find the index of the item to be removed
      const indexToRemove = state.items.findIndex(
        (item) => item.id === itemToRemove.id
      );

      if (indexToRemove !== -1) {
        if (state.items[indexToRemove].quantity > 1) {
          // If the item has a quantity greater than 1, decrease the quantity by 1
          state.items[indexToRemove].quantity -= 1;
        } else {
          // If the item has a quantity of 1, remove it from the cart
          state.items.splice(indexToRemove, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, removeTest, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
