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
  setFilteredGalleryData([gallery]);

  function filterArtworkTitlesByArtworkSearchBarInput(
    artworkTitleStringFromArtworkSearchBarInput,
    filteredGalleryData
  ) {
    return filteredGalleryData.filter((artwork) => {
      const { title } = artwork;
      const lowercasedArtworkTitle = `${title}`.toLocaleLowerCase();
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

  console.log(
    filterArtworkTitlesByArtworkSearchBarInput("mor", filteredGalleryData)
  );

  return (
    <div className="ArtworkSearchBar">
      <input
        type="text"
        id="searchArtworkTitle"
        value={searchArtworkTitleSearchBarInput}
        className="ArtworkSearchBar__Input"
        placeholder="Search by name"
        onChange={handleSearchbarTextChange}></input>
    </div>
  );
};

export default ArtSearchBar;
