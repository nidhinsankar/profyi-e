"use client";

import { CartButtonTypes, iCartItem } from "@/lib/types";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import React from "react";
import CartButton from "./cart-button";
import Link from "next/link";

// This component is used to display the total number of cart items to be used in navbar
export const Cart = () => {
  const items = useAppSelector((state) => state.cart.totalItems);

  return (
    <span className="absolute -top-3 -right-3 bg-dark-blue  text-white font-semibold rounded-full w-5 h-5 p-3 flex justify-center items-center">
      {items}
    </span>
  );
};

// This component is used to display the cart item details and feature to increase,decrease,remove cart from the cart reducer
export const CartItem: React.FC<iCartItem> = (item) => {
  return (
    <div
      key={item.id}
      className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center border-b py-4"
    >
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
          <CartButton type={CartButtonTypes.INCREASE} data={item.id}>
            <Image
              src={"/arrow-up.svg"}
              alt="arrow-up"
              width={0}
              height={0}
              className="w-6 h-6"
            />
          </CartButton>
          <CartButton type={CartButtonTypes.DECREASE} data={item.id}>
            <Image
              src={"/arrow-down.svg"}
              width={0}
              height={0}
              alt="arrow-up"
              className="w-6 h-6"
            />
          </CartButton>
        </div>
      </div>
      <CartButton type={CartButtonTypes.REMOVE} data={item.id} />
    </div>
  );
};

// This component is used to render empty cart image and link to products page
export const EmptyCart = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-200px)] justify-center items-center">
      <Image
        width={10}
        height={0}
        className="w-[300px] h-[300px]"
        src={"/empty-cart.svg"}
        alt="empty-cart"
      />
      <Link
        href={"/"}
        className="hover:bg-dark-blue/75 bg-dark-blue/45 transition transform hover:-translate-y-2 hover:shadow-lg rounded-lg py-3 px-5"
      >
        Add Products
      </Link>
    </div>
  );
};
