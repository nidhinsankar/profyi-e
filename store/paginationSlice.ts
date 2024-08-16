import { createSlice } from "@reduxjs/toolkit";

interface paginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

const initialState: paginationState = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 10,
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
  },
});
export const { setCurrentPage, setItemsPages, setTotalPages } =
  paginationSlice.actions;
export default paginationSlice.reducer;
