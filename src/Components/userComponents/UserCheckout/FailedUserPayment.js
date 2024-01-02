import { Link } from "react-router-dom";

export const FailedUserPayment = () => {
  return (
    <div>
      Your payment was either canceled or failed, please try again.
      <Link to="/checkout">
        <button>Back to checkout</button>
      </Link>
      <Link to="/cart">
        <button>Back to cart</button>
      </Link>
    </div>
  );
};
