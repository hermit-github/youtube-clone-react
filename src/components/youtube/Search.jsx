import React, { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  displaySearchSuggestions,
  hideSearchSuggestions,
  setSearchQuery,
  setSearchResults,
} from "../../store/searchSlice";
import SearchSuggestions from "./SearchSuggestions";

const Search = () => {
  const { searchQuery, showSearchSuggestions } = useSelector(
    (state) => state.search
  );
  const dispatcher = useDispatch();

  // debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions(searchQuery);
    }, 500);
    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery).then((res) =>
      res.json()
    );
    dispatcher(setSearchResults(data[1]));
  };

  return (
    <div className="w-[40%] px-2 py-2 flex gap-2 border rounded-full relative">
      <input
        type="text"
        className="w-[90%] text-black/60 text-lg focus:outline-none"
        value={searchQuery}
        onFocus={() => dispatcher(displaySearchSuggestions())}
        onBlur={() => dispatcher(hideSearchSuggestions())}
        onChange={(e) => dispatcher(setSearchQuery(e.target.value))}
      />
      <button className=" w-[10%]  flex justify-center items-center">
        <img src="/icons/search.svg" alt="search-icon" width="30px" />
      </button>
      {showSearchSuggestions && <SearchSuggestions />}
    </div>
  );
};

export default Search;
