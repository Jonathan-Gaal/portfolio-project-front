import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const {
    loggedInUser,
    loggedInUserDataFromDB,
    setLoggedInUserDataFromDB,
    userSignOut,
  } = useAuth();

  useEffect(() => {}, [loggedInUser]);

  return (
    <div className="UserDashboard">
      UserDashboard
      <Link to="/account">
        <div className="UserDashboard_accountDetails">Account Details</div>
      </Link>
    </div>
  );
};
