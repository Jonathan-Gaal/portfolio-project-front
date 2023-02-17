import { Link } from "react-router-dom";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const Artwork = ({ artwork }) => {
  const { title, category, image } = artwork;

  return (
    <div>
      <img id="galleryImage" src={image} alt="artwork" />
      <h1>{title}</h1>
      <h3>Category: {category}</h3>

      <Link to={`/gallery/${artwork.id}`}>
        <h4 id="seeArtworkDetails">See artwork details!</h4>
      </Link>
    </div>
  );
};

export default Artwork;
