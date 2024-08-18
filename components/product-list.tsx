"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { ProductCard } from "./product-card";
import { useEffect } from "react";
import { setTotalPages } from "@/store/paginationSlice";
import { PaginationComponent } from "./pagination";
import { IProduct } from "@/lib/types";
import CategoryFilter from "./category";
import Search from "./search";

// This component renders all the products from the api
// It only displays 10 products per page and pagination is used to display remaining products
export const ProductList = ({ productList }: { productList: IProduct[] }) => {
  const dispatch = useAppDispatch();

  const {
    currentPage,
    itemsPerPage,
    searchQuery,
    selectedCategory,
    totalPages,
  } = useAppSelector((state) => state.pagination);

  //  categories from productlist and assign it to variable
  const categories = Array.from(
    new Set(productList.map((product) => product.category))
  );

  // filtering the products list based on search and selected category
  const filteredItems = productList.filter(
    (item) =>
      (searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );
  const totalItems = filteredItems.length;

  useEffect(() => {
    // dispatching setTotalPages action to set the total pages based on filteredItems and itemsPerPage
    dispatch(setTotalPages(Math.ceil(totalItems / itemsPerPage)));
  }, [dispatch, totalItems, itemsPerPage, searchQuery, selectedCategory]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  return (
    <div className="w-[90%] min-h-screen md:max-w-5xl mx-auto flex flex-col my-7">
      <div className="block sm:hidden my-4">
        <Search />
      </div>
      <CategoryFilter categories={categories} />
      <div className="flex justify-between border-b py-2">
        <h2>{totalItems} products found</h2>
        <h2>
          {currentPage} of {totalPages} pages
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-3">
        {currentItems.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
};
