import "./UserCheckout.scss";
import axios from "axios";
import { API, STRIPE_PK, STRIPE_SK } from "../../../../constants";
import { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";
import { calculateUserShoppingCartOrUserCheckoutTotal } from "../../../../helpers";
import { loadStripe } from "@stripe/stripe-js";
// import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  useAuth,
  userShoppingCart,
  setUserShoppingCart,
  userShoppingCartTotal,
} from "../../../../Providers/userProvider";
// Fill out the checkout page
// use stripe library here
/* below the elements object is a param for the useStripe function
// This part would load but you need a button for an onclick to initiate stripe


// Not required, but highly recommended, add the metadata which is data about
your purchased objects
 */

export const UserCheckout = () => {
  const navigate = useNavigate();
  const [userCheckoutTotal, setUserCheckoutTotal] = useState(0);
  const [stripePromise, setStripePromise] = useState("");
  const [successfulUserPayment, setSuccessfulUserPayment] = useState(null);
  const {
    loggedInUser,
    userShoppingCart,
    userShoppingCartTotal,
    setUserShoppingCartTotal,
  } = useAuth();

  // var elements = stripe.elements({
  //   mode: "payment",
  //   currency: "usd",
  //   amount: userShoppingCartTotal, // the total that the user is paying (from Context)
  // });

  useEffect(() => {
    if (loggedInUser.uid) {
      const formattedUserCheckoutTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      setUserCheckoutTotal(
        formattedUserCheckoutTotal.format(
          calculateUserShoppingCartOrUserCheckoutTotal(userShoppingCart)
        )
      );
    }
  }, [userShoppingCart]);

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
        // window.location.href = res.data.url;
        console.log(res.request.response);
        if (res?.request.response) {
          const stripePaymentSessionURL = res?.request.response;
          window.location = `${stripePaymentSessionURL}`;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="UserCheckout">
      <section>
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
            <h3>Stubborn Attachments</h3>
            <h5>{userCheckoutTotal}</h5>
          </div>
        </div>
      </section>
      <button onClick={handleSubmitAtCheckout}>Checkout</button>
    </div>
  );
};

// if ALL ELSE FAILS
// use stripe checkout and pass the amount as a parameter
