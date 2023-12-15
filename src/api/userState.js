import axios from "axios";
import { API } from "../constants";

export const getUserDataFromDB = async (uid, setUserDBDataCallback) => {
  // TAKES setLoggedInUserDataFromDB AS CALLBACK
  await axios
    .get(`${API}/users/${uid}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserDBDataCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
export const getUserShoppingCart = async (uid, setUserShoppingCartCallback) => {
  // TAKES setUserShoppingCart AS CALLBACK
  await axios
    .get(`${API}/users/${uid}/cart`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserShoppingCartCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUserAddresses = async (uid, setUserAddressesCallback) => {
  // TAKES setUserShoppingCart AS CALLBACK
  await axios
    .get(`${API}/users/${uid}/addresses`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setUserAddressesCallback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
