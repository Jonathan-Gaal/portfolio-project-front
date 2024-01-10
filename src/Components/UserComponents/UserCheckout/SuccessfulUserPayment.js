import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Providers/userProvider";
import {
  clearUserShoppingCart,
  getUserShoppingCart,
} from "../../../api/userState";
import "./SuccessfulUserPayment.scss";
const successfulUserPaymentImage = require("../../../assets/successful_payment.jpg");

export const SuccessfulUserPayment = () => {
  const { loggedInUser, setUserShoppingCart } = useAuth();

  useEffect(() => {
    clearUserShoppingCart(loggedInUser.uid, setUserShoppingCart);
  }, [loggedInUser.uid]);

  return (
    <div className="SuccessfulUserPayment">
      <img
        className="SuccessfulUserPayment__image"
        src={successfulUserPaymentImage}
        alt="marketplace scene in a near-eastern bazaar"
      />
      <div className="SuccessfulUserPayment__messageAndNavigationButtonsContainer">
        <div className="SuccessfulUserPayment__message">
          Successful payment, thanks for shopping with us! Keep exploring our
          site!
        </div>
      </div>
    </div>
  );
};
