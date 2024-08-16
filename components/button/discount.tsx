"use client";

import { DISCOUNT_COUPON_LIST } from "@/lib/constants";
import { IDiscountCoupon } from "@/lib/types";
import {
  addDiscountPrice,
  calculateTotalPrice,
  removeDiscountPrice,
} from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

export const DiscountSelect = () => {
  const total = useAppSelector(calculateTotalPrice);
  const [selectedCoupon, setSelectedCoupon] = useState("");

  return (
    <div className="flex flex-col gap-4 border-y-2 py-3">
      {DISCOUNT_COUPON_LIST.map((discount) =>
        selectedCoupon && selectedCoupon !== discount.name ? null : (
          <DiscountCoupon
            key={discount.id}
            code={discount.name}
            discount={discount.discount}
            discountType={discount.type}
            setSelectedCoupon={setSelectedCoupon}
            selectedCoupon={selectedCoupon}
            total={total}
          />
        )
      )}
    </div>
  );
};

const DiscountCoupon: React.FC<IDiscountCoupon> = ({
  code,
  discountType,
  discount,
  total,
  setSelectedCoupon,
  selectedCoupon,
}) => {
  const dispatch = useAppDispatch();
  const [applied, setApplied] = useState(false);
  const handleDiscount = () => {
    if (total <= 0) {
      return;
    }
    if (discountType === "percentage") {
      const amount = (total * discount) / 100;
      dispatch(addDiscountPrice({ amount: amount }));
    } else if (discountType === "fixed") {
      dispatch(addDiscountPrice({ amount: discount }));
    }
    setApplied(true);
    setSelectedCoupon(code);
  };

  const cancelDiscount = () => {
    dispatch(removeDiscountPrice());
    setSelectedCoupon("");
    setApplied(false);
  };

  return (
    <div className=" bg-white rounded-xl shadow-md py-2 relative">
      <div className="flex items-center px-3 justify-between">
        <div className="uppercase flex flex-col items-center tracking-wide text-sm text-indigo-500 font-semibold">
          {/* <span className=" font-bold">{discount}% OFF</span> */}
          <span className="text-xl font-bold">{code}</span>
        </div>
        <div className="">
          <button
            onClick={handleDiscount}
            disabled={applied}
            className=" bg-blue-500  px-3 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            {applied ? "APPLIED" : "APPLY"}
          </button>
        </div>
      </div>
      {selectedCoupon && (
        <Image
          src={"/cross.svg"}
          width={20}
          height={20}
          alt="cross"
          className="bg-red-300 rounded-full p-0.5 absolute -top-2 cursor-pointer -right-2"
          onClick={cancelDiscount}
        />
      )}
    </div>
  );
};

// const handleFixedDiscount = () => {
//   dispatch(addDiscountPrice({ amount: 10 }));
// };
// const handlePercentDiscount = (discount: number) => {
//   const amount = (total * discount) / 100;
//   dispatch(addDiscountPrice({ amount: amount }));
// };
{
  /* <button
        className="bg-blue-300 px-4 py-2"
        onClick={() => handleFixedDiscount()}
      >
        fixed 10 discount
      </button>
      <button
        className="bg-blue-300 px-4 py-2 "
        onClick={() => handlePercentDiscount(10)}
      >
        10%
      </button> */
}
