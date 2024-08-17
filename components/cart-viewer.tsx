"use client";
import { useAppSelector } from "@/store/store";
import { ClearCartButton, RemoveCartButton } from "./button/remove-cart";
import {
  DecreaseQuantityButton,
  IncreaseQuantityButton,
} from "./button/quantity";
import { calculateDiscountPrice, calculateTotalPrice } from "@/store/cartSlice";
import Image from "next/image";
import { DiscountSelect } from "./button/discount";

export const CartViewer = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = useAppSelector((state) => state.cart.totalItems);
  const total = useAppSelector(calculateTotalPrice);
  return (
    <div>
      <h2>
        total items : {count} total price = {total.toFixed(2)}
      </h2>
      {items.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h2>{item.quantity}</h2>
          <h2>{item.price}</h2>
          <RemoveCartButton data={item.id} />
          {/* <IncreaseQuantityButton data={item.id} />
          <DecreaseQuantityButton data={item.id} /> */}
        </div>
      ))}
    </div>
  );
};

export const CartViewer1 = () => {
  const items = useAppSelector((state) => state.cart.items);
  const count = useAppSelector((state) => state.cart.totalItems);
  const subTotal = useAppSelector(calculateTotalPrice);
  const discountTotal = useAppSelector(calculateDiscountPrice);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items */}
        <div className="md:w-2/3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="mt-2 flex items-center gap-4">
                  <label htmlFor={`quantity`} className="mr-2">
                    Qty:
                    <span>{item.quantity}</span>
                  </label>
                  <IncreaseQuantityButton data={item.id}>
                    <Image
                      src={"/arrow-up.svg"}
                      alt="arrow-up"
                      width={0}
                      height={0}
                      className="w-6 h-6"
                    />
                  </IncreaseQuantityButton>
                  <DecreaseQuantityButton data={item.id}>
                    <Image
                      src={"/arrow-down.svg"}
                      width={0}
                      height={0}
                      alt="arrow-up"
                      className="w-6 h-6"
                    />
                  </DecreaseQuantityButton>
                </div>
              </div>
              <RemoveCartButton data={item.id} />
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          {items.length > 0 && <DiscountSelect />}

          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${discountTotal.toFixed(2)}</span>
            </div>
          </div>
          <ClearCartButton />
        </div>
      </div>
    </div>
  );
};
