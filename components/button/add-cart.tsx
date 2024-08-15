"use client";

import { addCartItem } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const AddCartButton = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(addCartItem({ ...data, quantity: 1, inCart: true }));
  };
  const find = useAppSelector((state) =>
    state.cart.items.findIndex((item) => item.id === data.id)
  );
  console.log("find", find);

  return (
    <button
      className="bg-primary/40 enabled:hover:bg-primary enabled:transition-colors w-full rounded-lg py-3 px-5"
      onClick={handleAddItem}
      disabled={find >= 0}
    >
      {find >= 0 ? "already in cart" : "add to cart"}
    </button>
  );
};
