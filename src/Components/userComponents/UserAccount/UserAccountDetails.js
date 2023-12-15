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

  useEffect(() => {}, [loggedInUser]);

  return (
    <div className="UserAccountDetails">
      {loggedInUser ? (
        <div>
          User Account Details <div>{loggedInUserDataFromDB.test}</div>
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
