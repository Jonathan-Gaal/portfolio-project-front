import axios from "axios";
import { API } from "../constants";

export const getUserDataFromDB = async (
  loggedInUserUID,
  setUserDBDataCallback
) => {
  // TAKES setLoggedInUserDataFromDB AS CALLBACK
  await axios
    .get(`${API}/users/${loggedInUserUID}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserDBDataCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
export const getUserShoppingCart = async (
  loggedInUserUID,
  setUserShoppingCartCallback
) => {
  // TAKES setUserShoppingCart AS CALLBACK
  await axios
    .get(`${API}/users/${loggedInUserUID}/cart`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserShoppingCartCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

//CALLED IN removeItemFromUserShoppingCart() IN UserShoppingCartItemCard
export const deleteUserShoppingCartItem = async (loggedInUserUID, itemId) => {
  // TAKES setUserShoppingCart AS CALLBACK
  await axios
    .delete(`${API}/users/${loggedInUserUID}/cart/${itemId}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then(window.alert("Item removed from your cart"))
    .catch((err) => {
      console.error(err);
    });
};

//CALLED IN SuccessfulUserPayment ON COMPONENT LOAD
// export const clearUserShoppingCart = async (
//   loggedInUserUID,
//   setUserShoppingCartCallbackAfterPayment
// ) => {
//   await axios
//     .delete(`${API}/users/${loggedInUserUID}/cart`, {
//       headers: { "Access-Control-Allow-Origin": "*" },
//       data: { userUID: loggedInUserUID },
//     })
//     .then(
//       getUserShoppingCart(
//         loggedInUserUID,
//         setUserShoppingCartCallbackAfterPayment
//       )
//     )
//     .catch((err) => {
//       console.error(err);
//     });
// };

export const clearUserShoppingCart = async (
  loggedInUserUID,
  setUserShoppingCartCallbackAfterPayment
) => {
  try {
    // Make a DELETE request to clear the user's shopping cart
    await axios.delete(`${API}/users/${loggedInUserUID}/cart`, {
      headers: { "Access-Control-Allow-Origin": "*" },
      data: { userUID: loggedInUserUID },
    });

    // After successfully clearing the cart, update the user's shopping cart state
    getUserShoppingCart(
      loggedInUserUID,
      setUserShoppingCartCallbackAfterPayment
    );
  } catch (error) {
    console.error("Error clearing shopping cart:", error);
  }
};

export const getUserAddresses = async (
  loggedInUserUID,
  setUserAddressesCallback
) => {
  // TAKES setUserShoppingCart AS CALLBACK
  await axios
    .get(`${API}/users/${loggedInUserUID}/addresses`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserAddressesCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
