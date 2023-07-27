import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import "./ArtworkDetails.css";
const API = process.env.REACT_APP_API_URL;

const ArtworkDetails = () => {
  let { id } = useParams();
  // let navigate = useNavigate();
  const [artwork, setArtwork] = useState({});
  const [showComments, setShowComments] = useState(false);
  const {
    title,
    description,
    category,
    post_date,
    image,
    diameter,
    width,
    height,
    depth,
  } = artwork;

  console.log(image);

  const displayComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    axios
      .get(`${API}/gallery/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setArtwork(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  return (
    <div className="Artwork">
      <img id="artworkImage" src={image} alt="artwork"></img>
      <h1>{title}</h1>
      <h3>Category: {category}</h3>

      <h3>Description: {description}</h3>
      <h3>Date Posted: {post_date}</h3>

      <h3>
        Dimensions: Width:{width} x Height:{height} x Depth:{depth} Diameter:
        {diameter}
      </h3>

      <div className="ShowPageButtons">
        <Link to={`/gallery`}>
          <button id="galleryBtn">Back to Gallery</button>
        </Link>
        <button id="commentBtn" onClick={displayComments}>
          Please Comment!
        </button>
      </div>
      <Comments showComments={showComments} />
    </div>
  );
};

export default ArtworkDetails;
