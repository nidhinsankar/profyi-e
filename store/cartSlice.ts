import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { iCartItem } from "@/lib/types";

export interface iCartState {
  totalItems: number;
  items: iCartItem[];
  discount: number;
}
const initialState: iCartState = {
  items: [],
  totalItems: 0,
  discount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems = state.items.length;
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalItems = state.items.length;
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
    },
    removeDiscountPrice: (state) => {
      state.discount = 0;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const calculateTotalPrice = (state: RootState) => {
  const subTotal = state.cart.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return subTotal;
};

export const calculateDiscountPrice = (state: RootState) => {
  const subTotal = state.cart.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  if (state.cart.items.length === 0) return 0;
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
  removeDiscountPrice,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
