"use client";

import { addDiscountPrice, calculateTotalPrice } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export const DiscountSelect = () => {
  const total = useAppSelector(calculateTotalPrice);
  const dispatch = useAppDispatch();
  const handleFixedDiscount = () => {
    dispatch(addDiscountPrice({ amount: 10 }));
  };
  const handlePercentDiscount = (discount: number) => {
    const amount = (total * discount) / 100;
    dispatch(addDiscountPrice({ amount: amount }));
  };
  return (
    <div>
      <button
        className="bg-blue-300 px-4 py-2 mx-5"
        onClick={() => handleFixedDiscount()}
      >
        fixed 10 discount
      </button>
      <button
        className="bg-blue-300 px-4 py-2 "
        onClick={() => handlePercentDiscount(10)}
      >
        10%
      </button>
    </div>
  );
};
