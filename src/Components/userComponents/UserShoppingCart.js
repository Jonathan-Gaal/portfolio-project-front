import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useAuth,
  userShoppingCart,
  setUserShoppingCart,
} from "../../Providers/userProvider";
import { UserShoppingCartItemCard } from "./UserShoppingCartItemCard";
import "./UserShoppingCart.scss";

const API = process.env.REACT_APP_API_URL;

export const UserShoppingCart = () => {
  const { loggedInUser, userShoppingCart, setUserShoppingCart } = useAuth();

  useEffect(() => {
    axios
      .get(`${API}/users/${loggedInUser.uid}/cart`)
      .then((res) => {
        setUserShoppingCart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedInUser]);

  return (
    <div className="UserShoppingCart">
      <div className="UserShoppingCart__shoppingCartContainer">
        {userShoppingCart?.map((userShoppingCartItem) => {
          return (
            <UserShoppingCartItemCard
              key={userShoppingCartItem.id}
              userShoppingCartItem={userShoppingCartItem}
            />
          );
        })}
      </div>
    </div>
  );
};
