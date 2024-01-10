import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import userDahboardImage from "../../assets/snake-charmer.jpg";

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
      <img
        className="UserDashboard__img"
        src={userDahboardImage}
        alt="scene of men ina middle eastern palace room watching an adolescent boy holding a large snake"
      />
    </div>
  );
};
