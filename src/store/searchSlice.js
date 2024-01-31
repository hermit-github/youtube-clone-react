import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    showSearchSuggestions: false,
    searchResults: [],
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    displaySearchSuggestions: (state) => {
      state.showSearchSuggestions = true;
    },
    hideSearchSuggestions: (state) => {
      state.showSearchSuggestions = false;
    },
    setSearchResults:(state,action) => {
        state.searchResults = action.payload;
    }
  },
});

export const {
  setSearchQuery,
  displaySearchSuggestions,
  hideSearchSuggestions,
  setSearchResults
} = searchSlice.actions;
export default searchSlice.reducer;
