import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";
import { calculateUserShoppingCartOrUserCheckoutTotal } from "../../../helpers";
import axios from "axios";
import { loadStripe, confirmCardPayment } from "@stripe/stripe-js";
import { API, STRIPE_PK, STRIPE_SK } from "../../../constants";
import { useAuth } from "../../../Providers/userProvider";
import { UserShoppingCartItemCard } from "./UserShoppingCartItemCard";
import userShoppingCartImage from "../../../assets/market-scene-for-checkout.jpg";
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
        if (res?.request.response) {
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
        className="UserShoppingCart__img"
        src={userShoppingCartImage}
        alt="marketplace scene of Europeans buying bronze pots in a near-eastern bazaar"
      />
      <div>Total: {userShoppingCartTotal}</div>
      <button onClick={handleSubmitAtCheckout}>Place your order</button>
      <div className="UserShoppingCart__shoppingCartContainer">
        {userShoppingCart?.map((userShoppingCartItem) => {
          return (
            <UserShoppingCartItemCard
              key={userShoppingCartItem.id}
              userShoppingCartItem={userShoppingCartItem}
            />
          );
        })}

        <Link to="/dashboard">
          <button>Back to dashboard</button>
        </Link>
      </div>
    </div>
  );
};
