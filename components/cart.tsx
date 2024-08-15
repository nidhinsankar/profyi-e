"use client";

import { useAppSelector } from "@/store/store";

export const Cart = () => {
  const items = useAppSelector((state) => state.cart.totalItems);

  return (
    <span className="absolute -top-3 -right-3 bg-primary rounded-full w-5 h-5 p-3 flex justify-center items-center">
      {items}
    </span>
  );
};
