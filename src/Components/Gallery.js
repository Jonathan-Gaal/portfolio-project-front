import axios from "axios";
import { useState, useEffect } from "react";
import ArtworkCard from "./ArtworkCard";
import "./ArtSearchBar";
import ArtSearchBar from "./ArtSearchBar";
import "./Gallery.scss";
const API = process.env.REACT_APP_API_URL;

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [filteredGalleryData, setFilteredGalleryData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/gallery`)
      .then((res) => {
        setGallery(res.data);
        setFilteredGalleryData(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Gallery">
      <ArtSearchBar
        gallery={gallery}
        filteredGalleryData={filteredGalleryData}
        setFilteredGalleryData={setFilteredGalleryData}
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
