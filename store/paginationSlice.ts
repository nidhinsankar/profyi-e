import { createSlice } from "@reduxjs/toolkit";

interface paginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  searchQuery: string;
  selectedCategory: string;
}

const initialState: paginationState = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 10,
  selectedCategory: "",
  searchQuery: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setItemsPages: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page on new search
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1; // Reset to first page on category change
    },
  },
});
export const {
  setCurrentPage,
  setItemsPages,
  setTotalPages,
  setSearchQuery,
  setSelectedCategory,
} = paginationSlice.actions;
export default paginationSlice.reducer;
