import React from "react";
import { useState } from "react";
import "./ArtSearchBar.scss";

const ArtSearchBar = ({
  gallery,
  filteredGalleryData,
  setFilteredGalleryData,
}) => {
  const [searchArtworkTitle, setSearchArtworkTitle] = useState("");
  setFilteredGalleryData(gallery);

  function filterArtworkTitlesByArtworkSearchBarInput(
    artworkTitle,
    filteredGalleryData
  ) {
    return filteredGalleryData.filter((artwork) => {
      const { title } = artwork;
      const lowerCasedArtworkTitle = `${title}`.toLocaleLowerCase();
      lowerCasedArtworkTitle.match(artworkTitle.toLocaleLowerCase());
    });
  }

  console.log(
    filterArtworkTitlesByArtworkSearchBarInput("mor", filteredGalleryData)
  );

  // const handleTextChange = (e) => {
  //   const title = e.target.value;
  //   const result = title.length
  //     ? filterArtworkTitlesByArtworkSearchBarInput(title, filteredGalleryData)
  //     : gallery;
  //   setFilteredGalleryData(result);
  //   setSearchArtworkTitle(title);
  // };

  const handleSearchbarTextChange = (e) => {
    const artworkTitle = e.target.value;
    const artworksThatMatchArtworkSearchInputString = searchArtworkTitle.length
      ? filterArtworkTitlesByArtworkSearchBarInput(
          artworkTitle,
          filteredGalleryData
        )
      : gallery;
    setFilteredGalleryData(artworksThatMatchArtworkSearchInputString);
    setSearchArtworkTitle(artworkTitle);
  };

  //____________**********

  // function filterMovies(search, movies) {
  //   return movies.filter((movie) =>
  //     movie.title.toLowerCase().match(search.toLowerCase())
  //   );
  // }

  // const handleTextChange = (e) => {
  //   const title = e.target.value;
  //   const result = title.length ? filterMovies(title, allMovies) : allMovies;
  //   setMovies(result);
  //   setSearchTitle(title);
  // };

  //____________**********

  return (
    <div className="ArtworkSearchBar">
      <input
        type="text"
        id="searchArtworkTitle"
        value={searchArtworkTitle}
        className="ArtworkSearchBar__Input"
        placeholder="Search by name"
        onChange={handleSearchbarTextChange}></input>
    </div>
  );
};

export default ArtSearchBar;
