import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { calculateUserShoppingCartOrUserCheckoutTotal } from "../../helpers";
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

  const proceedToCheckoutHandleSubmit = () => {};

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
        calculateUserShoppingCartOrUserCheckoutTotal(userShoppingCart)
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
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};
