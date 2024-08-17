"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { ProductCard } from "./product-card";
import { useEffect } from "react";
import { setTotalPages } from "@/store/paginationSlice";
import { PaginationComponent } from "./pagination";
import { IProduct } from "@/lib/types";
import CategoryFilter from "./category";
import Search from "./search";

export const ProductList = ({ productList }: { productList: IProduct[] }) => {
  const dispatch = useAppDispatch();

  const { currentPage, itemsPerPage, searchQuery, selectedCategory } =
    useAppSelector((state) => state.pagination);

  const categories = Array.from(
    new Set(productList.map((product) => product.category))
  );

  const filteredItems = productList.filter(
    (item) =>
      (searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );
  const totalItems = filteredItems.length;

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(totalItems / itemsPerPage)));
  }, [dispatch, totalItems, itemsPerPage, searchQuery, selectedCategory]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  return (
    <div className="w-[90%] min-h-screen md:max-w-5xl mx-auto flex flex-col sm:my-7">
      <div className="block sm:hidden my-4">
        <Search />
      </div>
      <CategoryFilter categories={categories} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {currentItems.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
};
