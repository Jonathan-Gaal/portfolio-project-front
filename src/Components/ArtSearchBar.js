import React from "react";
import { useState } from "react";
import "./ArtSearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

const ArtSearchBar = ({
  gallery,
  filteredGalleryData,
  setFilteredGalleryData,
}) => {
  const [
    searchArtworkTitleSearchBarInput,
    setSearchArtworkTitleSearchBarInput,
  ] = useState("");

  function filterArtworkTitlesByArtworkSearchBarInput(
    artworkTitleStringFromArtworkSearchBarInput,
    gallery
  ) {
    return gallery.filter((artwork) => {
      const { title } = artwork;
      const lowercasedArtworkTitle = `${title}`.toLowerCase();
      return lowercasedArtworkTitle.match(
        searchArtworkTitleSearchBarInput.toLowerCase()
      );
    });
  }

  const handleSearchbarTextChange = (e) => {
    const artworkTitleFromSearchBar = e.target.value;
    const artworksThatMatchArtworkSearchInputString =
      artworkTitleFromSearchBar.length
        ? filterArtworkTitlesByArtworkSearchBarInput(
            artworkTitleFromSearchBar,
            gallery
          )
        : gallery;
    setFilteredGalleryData(artworksThatMatchArtworkSearchInputString);
    setSearchArtworkTitleSearchBarInput(artworkTitleFromSearchBar);
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
      <i className="searchIcon">
        <SearchIcon />
      </i>
    </div>
  );
};

export default ArtSearchBar;
