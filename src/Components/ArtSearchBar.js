import React from "react";
import "./ArtSearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

const ArtSearchBar = ({
  searchArtworkTitleSearchBarInput,
  setSearchArtworkTitleSearchBarInput,
}) => {
  const handleSearchbarTextChange = (e) => {
    setSearchArtworkTitleSearchBarInput(e.target.value);
  };

  return (
    <div className="ArtworkSearchBar">
      <input
        type="search"
        id="searchArtworkTitle"
        value={searchArtworkTitleSearchBarInput}
        className="ArtworkSearchBar__Input input-field"
        placeholder="Search by artwork"
        onChange={handleSearchbarTextChange}
      />
      <i className="ArtworkSearchBar__searchIcon">
        <SearchIcon />
      </i>
    </div>
  );
};

export default ArtSearchBar;
