import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import { ArtworkDetailsImageSelectorBar } from "./ArtworkDetailsImageSelectorBar";
import { checkIfItemExistsInUserShoppingCart } from "../helpers";
import {
  useAuth,
  userShoppingCart,
  setUserShoppingCart,
} from "../Providers/userProvider";
import "./ArtworkDetails.scss";
import { UserShoppingCart } from "./UserComponents/UserCheckout/UserShoppingCart";
const API = process.env.REACT_APP_API_URL;

const ArtworkDetails = () => {
  const { id } = useParams();
  const { loggedInUser, userShoppingCart, setUserShoppingCart } = useAuth();
  const navigate = useNavigate();
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
    creation_date,
    post_date,
    diameter,
    width,
    height,
    depth,
    price,
  } = artwork;

  const displayComments = () => {
    setShowComments(!showComments);
  };

  const addGalleryItemToUserShoppingCart = async () => {
    if (!loggedInUser) {
      window.alert("Please sign in");
    }
    if (await checkIfItemExistsInUserShoppingCart(userShoppingCart, id)) {
      window.alert("Item is already in your cart.");
    } else {
      axios
        .post(`${API}/users/${loggedInUser.uid}/cart`, {
          item_id: id,
          user_id: loggedInUser.uid,
          item_price: price,
        })
        .then(window.alert("Item added to your cart!"))

        .catch((err) => {
          console.error(err);
        });

      axios
        .get(`${API}/users/${loggedInUser.uid}/cart`, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => {
          setUserShoppingCart(res.data);
          // console.log("RES DATA FROM ADD TO SHOPPING CART GET", res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
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
        console.error("catch", err);
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

  let convertDateToHumanReadableFormat = (artworkRelatedDate) => {
    if (artworkRelatedDate === "N/A" || artworkRelatedDate === "n/a") {
      return "N/A";
    } else {
      const artworkRelatedDateToDateType = new Date(artworkRelatedDate);
      return artworkRelatedDateToDateType.toDateString().slice(3);
    }
  };

  return (
    <div className="ArtworkDetails">
      <img
        className="applyBorder ArtworkDetails__image"
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
      <div className="ArtworkDetails__info"></div>
      <div className="ArtworkDetails__details">
        <div className="ArtworkDetails__categoryPriceContainer">
          <div className="ArtworkDetails__detail" id="category">
            Category: {category}
          </div>{" "}
          <div className="ArtworkDetails__detail" id="price">
            Price: ${price}
          </div>
        </div>

        <div className="ArtworkDetails__detail __dimensions">
          Dimensions: Width: {width} x Height: {height} x Depth: {depth}{" "}
          Diameter:
          {diameter}
        </div>
        <div className="ArtworkDetails__detail ArtworkCreatedAndPostedDates">
          Created on: {convertDateToHumanReadableFormat(creation_date)}
          Posted on: {convertDateToHumanReadableFormat(post_date)}
        </div>
        <div className="ArtworkDetails__detail __description">
          Description: {description}
        </div>
      </div>
      <div className="ArtworkDetails__showPageButtons">
        <button
          className="applyBorderBtns galleryBtn"
          onClick={() => navigate("/gallery")}>
          Gallerie
        </button>

        <button
          className="applyBorderBtns addToCartBtn"
          onClick={addGalleryItemToUserShoppingCart}>
          Add to Cart
        </button>
        <button
          className="applyBorderBtns cartBtn"
          onClick={() => navigate("/cart")}>
          Cart
        </button>
        <button
          className="applyBorderBtns commentBtn"
          onClick={displayComments}>
          Comments
        </button>
      </div>

      <Comments showComments={showComments} />
    </div>
  );
};

export default ArtworkDetails;
