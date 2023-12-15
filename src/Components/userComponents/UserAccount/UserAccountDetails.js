import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../Providers/userProvider";

import "./UserAccountDetails.scss";

const API = process.env.REACT_APP_API_URL;

export const UserAccountDetails = () => {
  const navigate = useNavigate();
  const {
    loggedInUser,
    loggedInUserDataFromDB,
    setLoggedInUserDataFromDB,
    userSignOut,
  } = useAuth();

  const { firstname, email } = loggedInUserDataFromDB;

  console.log("DATA FROM DB IN ACCOUNT DETAILS", loggedInUserDataFromDB);

  useEffect(() => {
    axios
      .get(`${API}/users/${loggedInUser.uid}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setLoggedInUserDataFromDB(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedInUser]);

  return (
    <div className="UserAccountDetailsContainer">
      {loggedInUser ? (
        <div className="UserAccountDetails">
          <div className="UserAccountDetails__greeting">Hi {firstname}</div>
          <div className="UserAccountDetails__changeUserAccountDetailsdBtn">
            <Link to="/changeaccount">Change account settings</Link>
          </div>
          <div className="UserAccountDetails__backToDashboardBtn">
            <Link to="/dashboard">Back to Dashboard</Link>
          </div>
        </div>
      ) : (
        <div>Please Sign In</div>
      )}
    </div>
  );
};
