import { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";
import axios from "axios";

import { loadStripe, confirmCardPayment } from "@stripe/stripe-js";
import { API, STRIPE_PK, STRIPE_SK } from "../../../constants";

import { useAuth } from "../../../Providers/userProvider";

import { UserShoppingCartItemCard } from "./UserShoppingCartItemCard";
const userShoppingCartImage = require("../../../assets/market-scene-for-checkout.jpg");
import { calculateUserShoppingCartOrUserCheckoutTotal } from "../../../helpers";

import "./UserShoppingCart.scss";

export const UserShoppingCart = () => {
  const stripe = loadStripe(process.env.REACT_APP_STRIPE_PK);
  const navigate = useNavigate();
  const { loggedInUser, userShoppingCart } = useAuth();

  const [userShoppingCartTotal, setUserShoppingCartTotal] = useState(0);
  // const [stripeUserCheckoutSession, setStripeUserCheckoutSession] = useState(
  //   {}
  // );

  let lastShoppingCartItemData = {};
  if (userShoppingCart.length > 0) {
    lastShoppingCartItemData = {
      ...userShoppingCart[userShoppingCart.length - 1],
    };
  }

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
            "Content-Type": "application/json",
            authorization: process.env.REACT_APP_STRIPE_PK,
          },
        }
      )
      .then((res) => {
        console.log("RES FROM CHECKOUT POST", res);

        if (res?.request?.response) {
          // setStripeUserCheckoutSession(res.data);
          window.location.replace(`${res.data.url}`);
        }
      })

      .catch((err) => {
        console.error(err);
      });
  };

  // const handleSubmitAtCheckout = (e) => {
  //
  //   axios
  //     .post(
  //       `${API}/create-checkout-session`,
  //       {
  //         items: userShoppingCart,
  //       },
  //       {
  //         headers: {
  //           // "Access-Control-Allow-Origin": "*",
  //
  //         },
  //
  //       }
  //     )
  //     .then((res) => {
  //       console.log("RES FROM CHECKOUT POST", res);

  //       console.log(res.request.response);
  //       if (res?.request?.response) {
  //         // setStripeUserCheckoutSession(res.data);

  //         window.location.replace(`${res.data.url}`);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

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

      {userShoppingCart.length > 0 ? (
        <div className="UserShoppingCart__body">
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
              <button
                onClick={() =>
                  navigate(`/gallery/${lastShoppingCartItemData.item_id}`)
                }>
                Last Gallerie Item
              </button>
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
      ) : (
        <div className="noCartItemsMessage, largeFont">
          Nothing currently in your cart
        </div>
      )}
    </div>
  );
};
