import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
