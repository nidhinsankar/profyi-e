"use client";
import { useAppSelector } from "@/store/store";
import { RemoveCartButton } from "./button/remove-cart";

export const CartViewer = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = useAppSelector((state) => state.cart.totalItems);
  const total = useAppSelector((state) => state.cart.totalPrice);
  console.log("items =>", items);

  return (
    <div>
      <h2>
        total items : {count} total price = {total}
      </h2>
      {items.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <RemoveCartButton data={item.id} />
        </div>
      ))}
    </div>
  );
};
