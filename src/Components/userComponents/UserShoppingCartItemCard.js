import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const UserShoppingCartItemCard = ({ userShoppingCartItem }) => {
  const { item_id } = userShoppingCartItem;

  const [
    userShoppingCartItemCardMainImage,
    setUserShoppingCartItemCardMainImage,
  ] = useState("");

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

  return (
    <div>
      <Link to={`/gallery/${userShoppingCartItem.id}`}>
        <div className="UserShoppingCartItemCard">
          <img
            className="UserShoppingCartItemCard__Image"
            src={userShoppingCartItemCardMainImage}
            alt="shopping cart item image"
          />
          <div className="UserShoppingCartItemCard__details">
            {/* <div>{title}</div> */}
            {/* <div>Category: {category}</div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};
