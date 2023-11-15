import { useState, useEffect } from "react";
import axios from "axios";
// import { useContextUserProvider } from "../../../Providers/userProvider";
import { auth } from "../../firebase";
import { useAuth } from "../../Providers/userProvider";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const { loggedInUser } = useAuth;

  useEffect(() => {
    // const currentUser = loggedInUser;
    console.log("USE EFFECT RAN");
    console.log("CURRENTUSER FROM AUTH", auth.currentUser);
    // console.log("AUTH FROM USER DASHBOARD", currentUser);
  }, [loggedInUser]);
  // console.log("CURRENTUWSET  FROM USER DASHBOARD", currentUser);
  // if !logged
  return <div className="UserDashboard">UserDashboard</div>;
};
