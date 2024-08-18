"use client";

import { setSearchQuery } from "@/store/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEvent, useEffect, useState } from "react";

// This component is used to implement the search functionality feature
const Search = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.pagination.searchQuery);
  const [query, setQuery] = useState("");

  // This useEffect handles debouncing of the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(query));
    }, 300);
    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full py-3 rounded-lg px-3 outline-none border  focus:ring-4 focus:ring-blue-400"
        placeholder="search products..."
        value={query}
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default Search;
