import { createSlice } from "@reduxjs/toolkit";

export interface iCartState {
  totalItems: number;
  items: any[];
  totalPrice: number;
}

const initialState: iCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems = state.items.length;
      state.totalPrice += state.items.reduce(
        (sum, product) => sum + product.price,
        0
      );
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems = state.items.length;
      state.totalPrice -= state.items.reduce(
        (sum, product) => sum + product.price,
        0
      );
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
