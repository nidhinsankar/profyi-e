"use client";

import { removeCartItem } from "@/store/cartSlice";
import { useAppDispatch } from "@/store/store";

export const RemoveCartButton = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(removeCartItem({ id: data }));
  };
  return (
    <button className="bg-red-300 py-3 px-5" onClick={handleAddItem}>
      remove
    </button>
  );
};
