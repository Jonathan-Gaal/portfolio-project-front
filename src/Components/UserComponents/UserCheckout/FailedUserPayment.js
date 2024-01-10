import { useNavigate } from "react-router-dom";
import "./FailedUserPayment.scss";
const failedUserPaymentImage = require("../../../assets/failed_payment.jpg");
export const FailedUserPayment = () => {
  const navigate = useNavigate();
  return (
    <div className="FailedUserPayment">
      <img
        className="FailedUserPayment__image"
        src={failedUserPaymentImage}
        alt="marketplace scene in a near-eastern bazaar"
      />

      <div className="FailedUserPayment__message">
        Sorry, your payment was either canceled or failed, please try again.
      </div>

      <div className="FailedUserPayment__navButtonsContainer">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>
    </div>
  );
};
