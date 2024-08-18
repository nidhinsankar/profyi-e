"use client";
import { CartButtonTypes } from "@/lib/types";
import {
  addCartItem,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import toast from "react-hot-toast";

interface ICartButton {
  type: CartButtonTypes;
  data?: any;
  children?: React.ReactNode;
  className?: string;
}

// CartButton components renders button based on different type of cart functionality and perform cart actions
// Based on type passed in the props we render the button
// functionality is defined in the switch statement , style and button name is defined using the if statement
const CartButton: React.FC<ICartButton> = ({
  type,
  children,
  className,
  data,
}) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === data?.id)
  );
  const handleClick = () => {
    switch (type) {
      case CartButtonTypes.ADD:
        dispatch(addCartItem({ ...data, quantity: 1 }));
        toast.success("Added to cart");
        break;
      case CartButtonTypes.INCREASE:
        dispatch(increaseQuantity({ id: data }));
        break;
      case CartButtonTypes.DECREASE:
        dispatch(decreaseQuantity({ id: data }));
        break;
      case CartButtonTypes.REMOVE:
        dispatch(removeCartItem({ id: data }));
        toast.error("Removed from cart");
        break;
      case CartButtonTypes.CLEAR:
        dispatch(clearCart());
        toast.error("Cart emptied");
        break;
      case CartButtonTypes.PROCEED:
        dispatch(clearCart());
        toast.success("Shipped successfully");
    }
  };

  let buttonText = children;
  let buttonClass = className || "";

  if (type === CartButtonTypes.ADD) {
    buttonText = isInCart ? "Already in Cart" : "Add to Cart";
    buttonClass = `bg-dark-blue/45 enabled:hover:bg-dark-blue enabled:hover:text-white disabled:bg-dark-blue/10 disabled:cursor-not-allowed enabled:transition-colors w-full rounded-lg py-3 px-5 ${
      className || ""
    }`;
  } else if (type === CartButtonTypes.REMOVE) {
    buttonText = "Remove";
    buttonClass = `hover:bg-dark-blue/75 bg-dark-blue/45 transition transform hover:-translate-y-2 hover:shadow-lg rounded-lg py-3 px-5 ${
      className || ""
    }`;
  } else if (type === CartButtonTypes.CLEAR) {
    buttonText = "Clear cart";
    buttonClass = `w-full bg-dark-blue/45 py-2 rounded-md hover:bg-dark-blue/75 transition duration-300 ${
      className || ""
    }`;
  } else if (type === CartButtonTypes.PROCEED) {
    buttonText = "Proceed to Checkout";
    buttonClass = `w-full bg-dark-blue/45 py-2 rounded-md mt-4 hover:bg-dark-blue/75 transition duration-300 ${
      className || ""
    }`;
  }
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={
        type === CartButtonTypes.ADD && buttonText === "Already in Cart"
      }
    >
      {buttonText}
    </button>
  );
};

export default CartButton;
