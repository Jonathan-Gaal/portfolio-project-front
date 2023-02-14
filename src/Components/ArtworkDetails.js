import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";
const API = process.env.REACT_APP_API_URL;

const ArtworkDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
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

  const displayComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    axios
      .get(`${API}/gallery/${id}`)
      .then((res) => {
        setArtwork(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  return (
    <article>
      <img src={image} alt="artwork"></img>
      <h4>Title: {title}</h4>
      <h4>Description: {description}</h4>
      <h4>Category: {category}</h4>
      <h3>Dimensions</h3>
      <h4>
        Width:{width} x Height:{height} x Depth:{depth} Diameter:{diameter}
      </h4>

      <div className="ShowPageButtons">
        <Link to={`/gallery`}>
          <button id="galleryBtn">Back to Gallery</button>
        </Link>
        <button id="commentBtn" onClick={displayComments}>
          Please Comment!
        </button>
      </div>
      <Comments showComments={showComments} />
    </article>
  );
};

export default ArtworkDetails;
