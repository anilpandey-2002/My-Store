import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    remove(state, action) {
      const productId = action.payload;
      const index = state.findIndex((item) => item.id === productId);
      if (index > -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
