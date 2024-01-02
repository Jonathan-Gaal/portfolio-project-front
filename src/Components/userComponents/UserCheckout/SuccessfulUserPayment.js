import { Link } from "react-router-dom";

export const SuccessfulUserPayment = () => {
  return (
    <div>
      Your payment was successful, thanks for shopping with us!
      <Link to="/dashboard">
        <button>Back to dashboard</button>
      </Link>
    </div>
  );
};
