"use client";

import { removeCartItem } from "@/store/cartSlice";
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
