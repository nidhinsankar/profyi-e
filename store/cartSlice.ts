import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface iCartState {
  totalItems: number;
  items: any[];
  totalPrice: number;
  discount: number;
  discountEnabled: boolean;
}

const initialState: iCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  discount: 0,
  discountEnabled: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems = state.items.length;
      state.totalPrice = state.items.reduce(
        (sum, product) => sum + product.price,
        0
      );
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems = state.items.length;
      state.totalPrice = state.items.reduce(
        (sum, product) => sum + product.price,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== product.id);
        }
      }
    },
    addDiscountPrice: (state, action) => {
      state.discount = action.payload.amount;
      state.discountEnabled = true;
    },
    removeDiscountPrice: (state) => {
      state.discount = 0;
      state.discountEnabled = false;
    },
  },
});

export const calculateTotalPrice = (state: RootState) => {
  const subTotal = state.cart.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const discountPrice = state.cart.discount;
  const total = subTotal - discountPrice;
  return total;
};

export const {
  addCartItem,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
  addDiscountPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
