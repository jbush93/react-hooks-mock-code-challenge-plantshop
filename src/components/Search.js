import React from "react";

function Search({ searchInput, handleSearchInput })
{
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search;
