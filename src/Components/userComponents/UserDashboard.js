import { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const { loggedInUser, userSignOut } = useAuth();

  useEffect(() => {
    // const currentUser = loggedInUser;
    console.log("USE EFFECT RAN");
    console.log("CURRENTUSER FROM AUTH", loggedInUser);
    // console.log("AUTH FROM USER DASHBOARD", currentUser);
  }, [loggedInUser]);
  // console.log("CURRENTUWSET  FROM USER DASHBOARD", currentUser);
  // if !logged
  return <div className="UserDashboard">UserDashboard</div>;
};
