import { Dispatch, SetStateAction } from "react";

export interface IProduct {
  id: number;
  title: string;
  price: 109.95;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface iCartItem extends IProduct {
  quantity: number;
}
export interface IDiscountCoupon {
  code: string;
  discountType: string;
  discount: number;
  total: number;
  setSelectedCoupon: Dispatch<SetStateAction<string>>;
  selectedCoupon: string;
}

export enum CartButtonTypes {
  ADD = "add",
  INCREASE = "increase",
  DECREASE = "decrease",
  REMOVE = "remove",
  CLEAR = "clear",
  PROCEED = "proceed",
}
