import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import { ArtworkDetailsImageSelectorBar } from "./ArtworkDetailsImageSelectorBar";
import "./ArtworkDetails.scss";
const API = process.env.REACT_APP_API_URL;

const ArtworkDetails = () => {
  let { id } = useParams();
  // let navigate = useNavigate();
  const [artwork, setArtwork] = useState({});
  const [allArtworkImages, setAllArtworkImages] = useState([]);
  const [selectedArtworkImage, setSelectedArtworkImage] = useState("");
  const [selectedArtworkImageCaption, setSelectedArtworkImageCaption] =
    useState("");
  const [showComments, setShowComments] = useState(false);
  const {
    title,
    description,
    category,
    post_date,
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

  useEffect(() => {
    axios
      .get(`${API}/gallery/${id}/artImages`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setAllArtworkImages(res.data);
        setSelectedArtworkImage(res.data[0].image_url);
        setSelectedArtworkImageCaption(res.data[0].image_caption);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  return (
    <div className="ArtworkDetails">
      <img
        className="ArtworkDetails__image"
        src={selectedArtworkImage}
        alt="artwork"
      />
      <div className="ArtworkDetails__caption">
        {selectedArtworkImageCaption}
      </div>
      <ArtworkDetailsImageSelectorBar
        allArtworkImages={allArtworkImages}
        setSelectedArtworkImage={setSelectedArtworkImage}
        setSelectedArtworkImageCaption={setSelectedArtworkImageCaption}
      />
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
