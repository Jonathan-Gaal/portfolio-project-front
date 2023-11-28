import { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
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
          <button className="changeAccountDetailsBtn">
            Change Account Details
          </button>
        </div>
      ) : (
        <div>Please Sign In</div>
      )}
    </div>
  );
};
