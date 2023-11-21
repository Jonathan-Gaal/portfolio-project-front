import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const { loggedInUser, userSignOut } = useAuth();

  const testButtonSignOut = () => {
    userSignOut().then(() => {
      console.log("USER SIGN OUT FIRED");
    });
  };

  useEffect(() => {
    // const currentUser = loggedInUser;
    console.log("USE EFFECT RAN");
    console.log("CURRENTUSER FROM AUTH", loggedInUser);
    // console.log("AUTH FROM USER DASHBOARD", currentUser);
  }, [loggedInUser]);
  // console.log("CURRENTUWSET  FROM USER DASHBOARD", currentUser);
  // if !logged
  return (
    <div className="UserDashboard">
      UserDashboard
      <button onClick={testButtonSignOut}>CLICK</button>
    </div>
  );
};
