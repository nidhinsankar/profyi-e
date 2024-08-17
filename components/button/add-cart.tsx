"use client";

import { IProduct } from "@/lib/types";
import { addCartItem } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import toast from "react-hot-toast";

export const AddCartButton = ({ data }: { data: IProduct }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(addCartItem({ ...data, quantity: 1 }));
    toast.success("Added to cart");
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
