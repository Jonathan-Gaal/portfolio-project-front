import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Artwork from "./Artwork";
const API = process.env.REACT_APP_API_URL;

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    console.log(API);
    axios
      .get(`${API}/gallery`)
      .then((res) => setGallery(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Gallery">
      <section>
        {gallery.map((artwork) => {
          return <Artwork key={artwork.id} artwork={artwork} />;
        })}
      </section>
    </div>
  );
};

export default Gallery;
