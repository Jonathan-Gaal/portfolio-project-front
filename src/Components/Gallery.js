import axios from "axios";
import { useState, useEffect } from "react";
import ArtworkCard from "./ArtworkCard";
import "./ArtSearchBar";
import ArtSearchBar from "./ArtSearchBar";
import "./Gallery.scss";
const API = process.env.REACT_APP_API_URL;

function filterArtworkTitlesByArtworkSearchBarInput(
  artworkTitleStringFromArtworkSearchBarInput,
  gallery
) {
  return gallery.filter((artwork) => {
    const { title } = artwork;
    const lowercasedArtworkTitle = `${title}`.toLowerCase();

    //WE CONSIDER A HITY TO BE IF EVERY WORD IN THE SEARCH TERM EXISTS SOMEWHERE IN THE TITLE

    //split the search term
    const splitSearchBarInput = artworkTitleStringFromArtworkSearchBarInput
      .toLowerCase()
      .split(" ");

    //iterate over the search term (with .every)
    return splitSearchBarInput.every((searchInputWord) => {
      return lowercasedArtworkTitle.match(searchInputWord);
    });
  });
}

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [
    searchArtworkTitleSearchBarInput,
    setSearchArtworkTitleSearchBarInput,
  ] = useState("");
  const [selectInputOption, setSelectInputOption] = useState("default");

  useEffect(() => {
    axios
      .get(`${API}/gallery`)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  const filteredGalleryData = filterArtworkTitlesByArtworkSearchBarInput(
    searchArtworkTitleSearchBarInput,
    gallery
  );

  // setFilteredGallery(...filteredGallery, filteredGalleryData);

  const selectHandleChange = (e) => {
    setSelectInputOption(e.target.value);
  };

  const testItOut = (selectOptionString) => {
    let filteredGalleryData = filterArtworkTitlesByArtworkSearchBarInput(
      searchArtworkTitleSearchBarInput,
      gallery
    );

    // let sortedArtByDate = filteredGalleryData.sort(
    //   (a, b) =>
    //     new Date(...a.initialRegistration.split("/").reverse()) -
    //     new Date(...b.initialRegistration.split("/").reverse())
    // );

    if (selectInputOption === "default") {
      return filteredGalleryData;
    } else {
      if (selectOptionString === "title") {
        return filteredGalleryData.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (selectOptionString === "category") {
        return filteredGalleryData.sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      }
      if (selectOptionString === "date") {
        return filteredGalleryData.sort(
          (a, b) =>
            new Date(...a.post_date.split("-")) -
            new Date(...b.post_date.split("-"))
        );
      }
    }
  };

  return (
    <div className="Gallery">
      <ArtSearchBar
        gallery={gallery}
        searchArtworkTitleSearchBarInput={searchArtworkTitleSearchBarInput}
        setSearchArtworkTitleSearchBarInput={
          setSearchArtworkTitleSearchBarInput
        }
      />
      <select
        className="Gallery__sortBySelection"
        name="flexCheck"
        onChange={selectHandleChange}
        // value={answer.sexual_orientation_preference}
        id="sortSelector">
        <option value={"default"}>Sort by</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
        <option value="date">Post date</option>
      </select>

      <div className="Gallery__data">
        {testItOut(selectInputOption)?.map((artwork) => {
          return <ArtworkCard key={artwork.id} artwork={artwork} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
