"use client";

import { setSearchQuery } from "@/store/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent } from "react";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.pagination.searchQuery);

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full py-3 rounded-3xl px-3 outline-none  focus:ring-4 focus:ring-blue-400"
        placeholder="search products..."
        value={searchQuery}
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default Search;
