import "./UserCheckout.scss";
// Fill out the checkout page
// use stripe library here
/* below the elements object is a param for the useStripe function
// This part would load but you need a button for an onclick to initiate stripe
var elements = stripe.elements({
  mode: 'payment',
  currency: 'usd',
  amount: 1099, // the total that the user is paying (from Context)
});

// Not required, but highly recommended, add the metadata which is data about
your purchased objects
 */

export const UserCheckout = () => {
  return <div className="UserCheckout">UserCheckout</div>;
};

// if ALL ELSE FAILS
// use stripe checkout and pass the amount as a parameter
