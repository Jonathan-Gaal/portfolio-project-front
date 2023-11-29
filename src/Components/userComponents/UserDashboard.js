import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Providers/userProvider";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { loggedInUser, loggedInUserDataFromDB, setLoggedInUserDataFromDB } =
    useAuth();

  const uid = loggedInUser.uid;

  const getUserDataFromDB = async (uid) => {
    await axios
      .get(`${API}/users/${uid}`)
      .then((res) => {
        console.log(res);
        setLoggedInUserDataFromDB(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (uid) {
      getUserDataFromDB(uid);
    }
  }, [loggedInUser]);

  return (
    <div className="UserDashboard">
      Hello {loggedInUser.email}!
      <Link to="/account">
        <div className="UserDashboard_accountDetails">Account Details</div>
      </Link>
    </div>
  );
};
