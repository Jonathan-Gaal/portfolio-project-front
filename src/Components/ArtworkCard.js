import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ArtworkCard.scss";
const API = process.env.REACT_APP_API_URL;

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const ArtworkCard = ({ artwork }) => {
  const { id, title, category } = artwork;

  const [artworkCardMainImage, setArtworkCardMainImage] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/gallery/${id}/artImages`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setArtworkCardMainImage(res.data[0].image_url);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  return (
    <Link to={`/gallery/${artwork.id}`}>
      <div className="ArtworkCard">
        <img
          className="galleryImage"
          src={artworkCardMainImage}
          alt="artwork"
        />
        <div className="artWorkCard__details">
          <div>{title}</div>
          <div>Category: {category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
