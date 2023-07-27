import { Link } from "react-router-dom";
import "./ArtworkCard.css";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const ArtworkCard = ({ artwork }) => {
  const { title, category, image } = artwork;

  return (
    <div className="ArtworkCard">
      <img className="galleryImage" src={image} alt="artwork" />
      <div>{title}</div>
      <div>Category: {category}</div>

      <Link to={`/gallery/${artwork.id}`}>
        <div className="seeArtworkDetails">View details!</div>
      </Link>
    </div>
  );
};

export default ArtworkCard;
