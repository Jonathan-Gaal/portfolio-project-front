import { Link } from "react-router-dom";
// import "./Artwork.css";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const Artwork = ({ artwork }) => {
  const { title, category, image } = artwork;

  return (
    <div>
      <img src={image} alt="artwork" />
      <h4>{title}</h4>
      <h4>Category: {category}</h4>

      <Link to={`/gallery/${artwork.id}`}>See artwork details!</Link>
    </div>
  );
};

export default Artwork;
