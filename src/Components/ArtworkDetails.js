import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";
const API = process.env.REACT_APP_API_URL;

const ArtworkDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [artwork, setArtwork] = useState({});

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
      <h4>{artwork.title}</h4>

      <h4>{artwork.description}</h4>

      <div className="showNavigation">
        <Link to={`/gallery`}>
          <button>Back</button>
        </Link>
      </div>
      <Comments />
    </article>
  );
};

export default ArtworkDetails;
