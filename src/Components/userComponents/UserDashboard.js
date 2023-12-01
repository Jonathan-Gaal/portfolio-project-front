import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";
import { UserShoppingCart } from "./UserShoppingCart";
import { UserFavorites } from "./UserFavorites";
import { UserAccountDetails } from "./UserAccount/UserAccountDetails";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { loggedInUser, loggedInUserDataFromDB, setLoggedInUserDataFromDB } =
    useAuth();

  const { firstname, lastname, email } = loggedInUserDataFromDB;
  const uid = loggedInUser.uid;

  const [selectedUserComponent, setSelectedUserComponent] =
    useState("favorites");

  const setUserComponentToShoppingCart = () => {
    setSelectedUserComponent("shoppingcart");
  };
  const setUserComponentToFavorites = () => {
    setSelectedUserComponent("favorites");
  };
  const setUserComponentToAccountDetails = () => {
    setSelectedUserComponent("accountdetails");
  };

  const getUserDataFromDB = async (uid) => {
    await axios
      .get(`${API}/users/${uid}`)
      .then((res) => {
        // console.log(res);
        setLoggedInUserDataFromDB(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (uid) {
      getUserDataFromDB(uid);
    }
  }, [loggedInUser]);

  return (
    <div className="UserDashboard">
      <div className="UserDashboard__dashboardNavigationBtns">
        <div
          className="UserDashboard__seeAccountDetailsBtn"
          onClick={setUserComponentToAccountDetails}>
          {" "}
          Account Details
        </div>
        <div
          className="UserDashboard__seeFavoritesBtn"
          onClick={setUserComponentToFavorites}>
          Your Favorites
        </div>
        <div
          className="UserDashboard__seeShoppingCartBtn"
          onClick={setUserComponentToShoppingCart}>
          Your Cart
          {/* <Link to="/cart">Your Cart</Link> */}
        </div>
      </div>
      <div className="UserDashboard__selectedUserComponent">
        {selectedUserComponent === "accountdetails" ? (
          <UserAccountDetails />
        ) : null}
      </div>

      <div className="UserDashboard__selectedUserComponent">
        {selectedUserComponent === "shoppingcart" ? <UserShoppingCart /> : null}
      </div>

      <div className="UserDashboard__selectedUserComponent">
        {selectedUserComponent === "favorites" ? <UserFavorites /> : null}
      </div>
    </div>
  );
};
