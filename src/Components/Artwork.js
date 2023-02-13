import { Link } from "react-router-dom";
// import "./Artwork.css";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const Artwork = ({ artwork }) => {
  return (
    <div>
      <h4>{artwork.title}</h4>

      <Link to={`/gallery/${artwork.id}`}>✏️</Link>
    </div>
  );
};

export default Artwork;
