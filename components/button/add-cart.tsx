"use client";

import { addCartItem } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const AddCartButton = ({ data }: { data: any }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(addCartItem({ ...data, quantity: 1 }));
  };
  const find = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === data.id)
  );

  return (
    <button
      className="bg-primary/40 enabled:hover:bg-primary enabled:transition-colors w-full rounded-lg py-3 px-5"
      onClick={handleAddItem}
      disabled={find}
    >
      {find ? "already in cart" : "add to cart"}
    </button>
  );
};
