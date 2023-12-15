import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../Providers/userProvider";

import "./UserAccountDetails.scss";

export const UserAccountDetails = () => {
  const navigate = useNavigate();
  const {
    loggedInUser,
    loggedInUserDataFromDB,
    setLoggedInUserDataFromDB,
    userSignOut,
  } = useAuth();

  const { firstname } = loggedInUserDataFromDB;

  console.log("DATA FROM DB IN ACCOUNT DETAILS", loggedInUserDataFromDB);

  useEffect(() => {}, [loggedInUser]);

  return (
    <div className="UserAccountDetails">
      {loggedInUser ? (
        <div>
          <div>Hello {loggedInUserDataFromDB.firstname}</div>
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
