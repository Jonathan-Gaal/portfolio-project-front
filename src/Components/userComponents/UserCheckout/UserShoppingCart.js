import { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";
import axios from "axios";

import { loadStripe, confirmCardPayment } from "@stripe/stripe-js";
import { API, STRIPE_PK, STRIPE_SK } from "../../../constants";

import { useAuth } from "../../../Providers/userProvider";

import { UserShoppingCartItemCard } from "./UserShoppingCartItemCard";
import userShoppingCartImage from "../../../assets/market-scene-for-checkout.jpg";

import { calculateUserShoppingCartOrUserCheckoutTotal } from "../../../helpers";

import "./UserShoppingCart.scss";

export const UserShoppingCart = () => {
  const navigate = useNavigate();
  const { loggedInUser, userShoppingCart } = useAuth();

  const [userShoppingCartTotal, setUserShoppingCartTotal] = useState(0);
  const [stripeUserCheckoutSession, setStripeUserCheckoutSession] = useState(
    {}
  );

  const handleSubmitAtCheckout = () => {
    axios
      .post(
        `${API}/create-checkout-session`,
        {
          items: userShoppingCart,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log("RES FROM CHECKOUT POST", res);

        console.log(res.request.response);
        if (res?.request?.response) {
          setStripeUserCheckoutSession(res.data);

          window.open(`${res.data.url}`, "_blank");
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
        calculateUserShoppingCartOrUserCheckoutTotal(userShoppingCart)
      )
    );
  }, [userShoppingCart]);

  return (
    <div className="UserShoppingCart">
      <img
        className="UserShoppingCart__image"
        src={userShoppingCartImage}
        alt="marketplace scene of Europeans buying bronze pots in a near-eastern bazaar"
      />

      <div className="UserShoppingCart__totalAndCheckoutButton">
        <div className="UserShoppingCart__total">
          Total: {userShoppingCartTotal}
        </div>
        <button
          className="UserShoppingCart__checkoutButton, largeFont"
          onClick={handleSubmitAtCheckout}>
          Place order
        </button>
      </div>
      <div className="UserShoppingCart__navigationButtonsContainer">
        <div className="UserShoppingCart__backGalleryButton, largeFont">
          <button onClick={() => navigate("/gallery")}>Gallery</button>
        </div>
        <div className="UserShoppingCart__backToDashboardButton, largeFont">
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
      </div>

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
