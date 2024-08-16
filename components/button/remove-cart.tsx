"use client";

import { clearCart, removeCartItem } from "@/store/cartSlice";
import { useAppDispatch } from "@/store/store";

export const RemoveCartButton = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(removeCartItem({ id: data }));
  };
  return (
    <button
      className="hover:bg-primary bg-primary/35 transition transform hover:-translate-y-2 hover:shadow-lg rounded-lg py-3 px-5"
      onClick={handleAddItem}
    >
      remove
    </button>
  );
};

export const ClearCartButton = () => {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <button
      onClick={handleClearCart}
      className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-300"
    >
      Proceed to Checkout
    </button>
  );
};
