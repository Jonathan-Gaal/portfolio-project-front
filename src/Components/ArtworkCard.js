import { Link } from "react-router-dom";
import "./ArtworkCard.scss";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const ArtworkCard = ({ artwork }) => {
  const { title, category, image } = artwork;

  return (
    <Link to={`/gallery/${artwork.id}`}>
      <div className="ArtworkCard">
        <img className="galleryImage" src={image} alt="artwork" />
        <div className="artWorkCard__details">
          <div>{title}</div>
          <div>Category: {category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
