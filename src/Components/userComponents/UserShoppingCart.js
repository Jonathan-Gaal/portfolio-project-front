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

export const UserShoppingCart = () => {
  const { userShoppingCart } = useAuth();
  const [userShoppingCartTotal, setUserShoppingCartTotal] = useState(0);

  const calculateUserShoppingCartDisplayTotal = (userShoppingCart) => {
    return userShoppingCart.reduce(
      (userShoppingCartTotalAccumulator, userShoppingCartItemPrice) => {
        return (
          userShoppingCartTotalAccumulator +
          Number(userShoppingCartItemPrice.item_price)
        );
      },
      0
    );
  };

  useEffect(() => {
    const formattedUserShoppingCartDisplayTotal = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    );

    setUserShoppingCartTotal(
      formattedUserShoppingCartDisplayTotal.format(
        calculateUserShoppingCartDisplayTotal(userShoppingCart)
      )
    );
  }, [userShoppingCart]);

  return (
    <div className="UserShoppingCart">
      <div>Total: {userShoppingCartTotal}</div>
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
