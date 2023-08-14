import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import "./ArtworkDetails.scss";
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
      <img className="artworkImage" src={image} alt="artwork"></img>
      <div className="ArtworkDetails__heading">{title}</div>
      <div className="ArtworkDetails__details">
        <div className="ArtworkDetails__detail">Category: {category}</div>{" "}
        <div>
          Dimensions: Width:{width} x Height:{height} x Depth:{depth} Diameter:
          {diameter}
        </div>
        <div className="ArtworkDetails__detail">Date Posted: {post_date}</div>
        <div className="ArtworkDetails__detail">Description: {description}</div>
      </div>
      <div className="ArtworkDetails__showPageButtons">
        <Link to={`/gallery`}>
          <button className="galleryBtn">Gallery</button>
        </Link>
        <button className="commentBtn" onClick={displayComments}>
          Comments
        </button>
      </div>
      <Comments showComments={showComments} />
    </div>
  );
};

export default ArtworkDetails;
