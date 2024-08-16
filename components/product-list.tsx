"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { ProductCard1 } from "./product-card";
import { useEffect } from "react";
import { setTotalPages } from "@/store/paginationSlice";
import { PaginationComponent } from "./pagination";

export const ProductList = ({ productList }: { productList: any }) => {
  const dispatch = useAppDispatch();

  const { currentPage, itemsPerPage } = useAppSelector(
    (state) => state.pagination
  );

  const totalItems = productList.length;

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(totalItems / itemsPerPage)));
  }, [dispatch, totalItems, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productList.slice(startIndex, endIndex);

  return (
    <div className="max-w-5xl mx-auto flex flex-col py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {currentItems.map((product: any) => (
          <ProductCard1 product={product} key={product.id} />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
};
