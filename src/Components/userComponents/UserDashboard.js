import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import "./UserDashboard.scss";

export const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="UserDashboard">
      <div className="UserDashboard__dashboardNavigationBtns">
        <div className="UserDashboard__seeAccountDetailsBtn">
          {" "}
          <Link to="/account">Account</Link>
        </div>
        <div className="UserDashboard__seeFavoritesBtn">
          <Link to="/favorites">Favorites</Link>
        </div>
        <div className="UserDashboard__seeShoppingCartBtn">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
