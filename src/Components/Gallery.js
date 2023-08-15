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

  return (
    <div className="Gallery">
      <ArtSearchBar
        gallery={gallery}
        searchArtworkTitleSearchBarInput={searchArtworkTitleSearchBarInput}
        setSearchArtworkTitleSearchBarInput={
          setSearchArtworkTitleSearchBarInput
        }
      />
      <div className="Gallery__Data">
        {filteredGalleryData.map((artwork) => {
          return <ArtworkCard key={artwork.id} artwork={artwork} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
