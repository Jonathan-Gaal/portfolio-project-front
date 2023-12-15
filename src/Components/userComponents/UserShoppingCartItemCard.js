import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useAuth,
  userShoppingCart,
  setUserShoppingCart,
} from "../../Providers/userProvider";
import { checkIfItemExistsInUserShoppingCart } from "../../helpers";
import "../UserShoppingCartItemCard.scss";

const API = process.env.REACT_APP_API_URL;

export const UserShoppingCartItemCard = ({ userShoppingCartItem }) => {
  const { loggedInUser, userShoppingCart, setUserShoppingCart } = useAuth();
  const { item_id } = userShoppingCartItem;

  const [
    userShoppingCartItemCardMainImage,
    setUserShoppingCartItemCardMainImage,
  ] = useState("");

  const [userShoppingCartItemDetails, setUserShoppingCartItemDetails] =
    useState({});

  const removeItemFromUserShoppingCart = async (loggedInUserId, itemId) => {
    await axios
      .delete(`${API}/users/${loggedInUser.uid}/cart/${item_id}`)
      .then(window.alert("Item removed from your cart!"))

      .catch((err) => {
        console.error(err);
      });

    axios
      .get(`${API}/users/${loggedInUser.uid}/cart`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setUserShoppingCart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
  }, [item_id]);

  const { title, category } = userShoppingCartItemDetails;

  return (
    <div className="UserShoppingCartItemCard">
      <button onClick={removeItemFromUserShoppingCart}>Remove</button>
      <Link to={`/gallery/${item_id}`}>
        <img
          className="UserShoppingCartItemCard__image"
          src={userShoppingCartItemCardMainImage}
          alt="shopping cart item image"
        />
        <div className="UserShoppingCartItemCard__details">
          <div>{title}</div>
        </div>
      </Link>
    </div>
  );
};
