import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";
import { UserShoppingCartItemCard } from "./UserShoppingCartItemCard";
import "./UserShoppingCart.scss";

const API = process.env.REACT_APP_API_URL;

export const UserShoppingCart = () => {
  const { loggedInUser } = useAuth();

  const [userShoppingCart, setUserShoppingCart] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users/${loggedInUser.uid}/cart`)
      .then((res) => {
        console.log("RES FROM SHOPPING CART API CALL", res.data);
        setUserShoppingCart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="UserShoppingCart">
      {userShoppingCart?.map((userShoppingCartItem) => {
        return (
          <UserShoppingCartItemCard
            key={userShoppingCartItem.id}
            userShoppingCartItem={userShoppingCartItem}
          />
        );
      })}
    </div>
  );
};
