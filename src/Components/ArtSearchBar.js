import React from "react";
import { useState } from "react";
import "./ArtSearchBar.scss";

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
        className="ArtworkSearchBar__Input"
        placeholder="Search by artwork"
        onChange={handleSearchbarTextChange}></input>
    </div>
  );
};

export default ArtSearchBar;
