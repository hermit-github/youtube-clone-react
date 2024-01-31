import React from "react";
import { useSelector } from "react-redux";

const SearchSuggestions = () => {
    const searchResults = useSelector(state => state.search.searchResults)

    
  return (
    <div className="absolute z-999 top-[3.5rem] left-0 w-full rounded-lg border-gray-400 shadow-md bg-white">
        {searchResults.length > 0 && searchResults.map(suggestion => {
            return <p>{suggestion}</p>
        })}
    </div>
  );
};

export default SearchSuggestions;
