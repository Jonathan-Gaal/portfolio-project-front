import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useAuth,
  userShoppingCart,
  setUserShoppingCart,
} from "../../../Providers/userProvider";
import {
  getUserShoppingCart,
  deleteUserShoppingCartItem,
} from "../../../api/userState";
import { checkIfItemExistsInUserShoppingCart } from "../../../helpers";
import {
  getGalleryDataFromDB,
  getGalleryArtImagesFromDB,
} from "../../../api/appState";
import "./UserShoppingCartItemCard.scss";

export const UserShoppingCartItemCard = ({ userShoppingCartItem }) => {
  const { loggedInUser, userShoppingCart, setUserShoppingCart } = useAuth();
  const { item_id, item_price } = userShoppingCartItem;

  const [
    userShoppingCartItemCardMainImage,
    setUserShoppingCartItemCardMainImage,
  ] = useState("");

  const [userShoppingCartItemDetails, setUserShoppingCartItemDetails] =
    useState({});

  const removeItemFromUserShoppingCart = async (loggedInUserId, itemId) => {
    await deleteUserShoppingCartItem(loggedInUser.uid, item_id);

    //UPDATES USER SHOPPING CART STATE UPON REMOVAL OF AN ITEM FROM CART
    getUserShoppingCart(loggedInUser.uid, setUserShoppingCart);
  };

  useEffect(() => {
    //SETS THE USER SHOPPING CART IMAGES FOR EACH SHOPPING CART ITEM FROM GALLERY IMAGES TABLE
    getGalleryArtImagesFromDB(item_id, setUserShoppingCartItemCardMainImage);
    //SETS THE ITEM'S DETAILS BY FETCHING FROM THE GALLERY TABLE
    getGalleryDataFromDB(item_id, setUserShoppingCartItemDetails);
  }, [item_id]);

  const { title, category } = userShoppingCartItemDetails;

  return (
    <div className="applyBorderBtnsUserShoppingCartItemCard">
      <button
        className="applyBorderBtns"
        onClick={removeItemFromUserShoppingCart}>
        Remove
      </button>
      <Link
        className="UserShoppingCartItemCard__linkToGalleryItem"
        to={`/gallery/${item_id}`}>
        <img
          className="UserShoppingCartItemCard__image"
          src={userShoppingCartItemCardMainImage}
          alt="shopping cart item image"
        />
        <div className="UserShoppingCartItemCard__details">
          <div>{title}</div>
          <div>${item_price}</div>
        </div>
      </Link>
    </div>
  );
};
