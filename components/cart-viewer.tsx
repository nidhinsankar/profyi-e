"use client";
import { useAppSelector } from "@/store/store";
import { calculateDiscountPrice, calculateTotalPrice } from "@/store/cartSlice";
import Image from "next/image";
import { DiscountSelect } from "./discount";
import CartButton from "./cart-button";
import { CartButtonTypes } from "@/lib/types";
import { CartItem, EmptyCart } from "./cart";

// This component is used to display list of cart items,cart total and perform different cart action
export const CartViewer = () => {
  const items = useAppSelector((state) => state.cart.items);
  const subTotal = useAppSelector(calculateTotalPrice);
  const discountTotal = useAppSelector(calculateDiscountPrice);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {items.length > 0 && (
          <CartButton
            className="w-[200px] md:w-[320px]"
            type={CartButtonTypes.CLEAR}
          />
        )}
      </div>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Cart Items */}
          <div className="md:w-2/3">
            {items.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="md:w-1/3 bg-secondary/30 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>
                {subTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>

            {items.length > 0 && <DiscountSelect />}

            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  {discountTotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            </div>
            <CartButton type={CartButtonTypes.PROCEED} />
          </div>
        </div>
      )}
    </div>
  );
};
