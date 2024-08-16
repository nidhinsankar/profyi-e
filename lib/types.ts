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

export interface IDiscountCoupon {
  code: string;
  discountType: string;
  discount: number;
  total: number;
  setSelectedCoupon: Dispatch<SetStateAction<string>>;
  selectedCoupon: string;
}
