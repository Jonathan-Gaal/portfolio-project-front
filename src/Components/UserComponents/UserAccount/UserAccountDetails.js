import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Providers/userProvider";

import "./UserAccountDetails.scss";

export const UserAccountDetails = () => {
  const navigate = useNavigate();
  const { loggedInUser, loggedInUserDataFromDB } = useAuth();

  const { firstname, email } = loggedInUserDataFromDB;

  return (
    <div className="UserAccountDetailsContainer">
      {loggedInUser ? (
        <div className="UserAccountDetails">
          <div className="UserAccountDetails__greeting">Hi {firstname}</div>
          <div className="UserAccountDetails__changeUserAccountDetailsdBtn">
            <Link to="/changeaccount">
              <button>Change account settings</button>
            </Link>
          </div>
          <div className="UserAccountDetails__backToDashboardBtn">
            <Link to="/dashboard">
              <button>Back to Dashboard</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>Please Sign In</div>
      )}
    </div>
  );
};
