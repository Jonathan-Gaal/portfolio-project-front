import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../UserShoppingCartItemCard.scss";

const API = process.env.REACT_APP_API_URL;

export const UserShoppingCartItemCard = ({ userShoppingCartItem }) => {
  const { item_id } = userShoppingCartItem;

  const [
    userShoppingCartItemCardMainImage,
    setUserShoppingCartItemCardMainImage,
  ] = useState("");

  const [userShoppingCartItemDetails, setUserShoppingCartItemDetails] =
    useState({});

  useEffect(() => {
    axios
      .get(`${API}/gallery/${item_id}/artImages`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setUserShoppingCartItemCardMainImage(res.data[0].image_url);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [item_id]);

  useEffect(() => {
    axios
      .get(`${API}/gallery/${item_id}`)
      .then((res) => {
        setUserShoppingCartItemDetails(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  const { title, category } = userShoppingCartItemDetails;

  return (
    <div className="UserShoppingCartItemCard">
      <Link to={`/gallery/${item_id}`}>
        <img
          className="UserShoppingCartItemCard__image"
          src={userShoppingCartItemCardMainImage}
          alt="shopping cart item image"
        />
        <div className="UserShoppingCartItemCard__details">
          <div>{title}</div>

          <div>Category: {category}</div>
        </div>
      </Link>
    </div>
  );
};
