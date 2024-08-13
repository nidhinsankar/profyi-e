"use client";

import { addCartItem } from "@/store/cartSlice";
import { useAppDispatch } from "@/store/store";

export const AddCartButton = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(addCartItem(data));
  };
  return (
    <button className="bg-red-300 py-3 px-5" onClick={handleAddItem}>
      add to cart
    </button>
  );
};
