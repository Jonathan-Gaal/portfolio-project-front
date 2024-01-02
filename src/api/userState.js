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
    .delete(`${API}/users/${loggedInUserUID}/cart/${itemId}`)
    .then(window.alert("Item removed from your cart"))
    .catch((err) => {
      console.error(err);
    });
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
