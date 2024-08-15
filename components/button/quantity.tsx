import { decreaseQuantity, increaseQuantity } from "@/store/cartSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";

export const IncreaseQuantityButton = ({
  data,
  children,
}: {
  data: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const handleQuantity = () => {
    dispatch(increaseQuantity({ id: data }));
  };

  return <button onClick={handleQuantity}>{children}</button>;
};

export const DecreaseQuantityButton = ({
  data,
  children,
}: {
  data: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const handleQuantity = () => {
    dispatch(decreaseQuantity({ id: data }));
  };

  return <button onClick={handleQuantity}>{children}</button>;
};
