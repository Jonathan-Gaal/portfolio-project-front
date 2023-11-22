import { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
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
      <div>{loggedInUserDataFromDB.test}</div>
    </div>
  );
};
