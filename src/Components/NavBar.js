import { useNavigate } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import { useAuth } from "../Providers/userProvider";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const { loggedInUser, userSignOut } = useAuth();

  const signOutButton = () => {
    userSignOut().then(() => {
      console.log("USER SIGN OUT FIRED");
    });
    navigate("/");
  };

  return (
    <div className="NavBar">
      <img className="NavBar__logo" src={navBarLogo} alt="arabic teapot" />
      <div className="NavBar__positioningDiv"></div>
      <div className="NavBar__headerTextAndnavigationButtonsContainer">
        <div
          className="NavBar__headerTextAndnavigationButtonsContainer__headerText"
          onClick={() => navigate("/")}>
          Jon's Palace Of Art
        </div>

        <div className="NavBar__headerTextAndnavigationButtonsContainer__navigationButtonsContainer">
          <div className="NavBar__headerTextAndnavigationButtonsContainer__navigationButtonsContainer__navigationButtons">
            <button className="homeBtn" onClick={() => navigate("/")}>
              Home
            </button>

            <button
              className="seeGalleryBtn"
              onClick={() => navigate("/gallery")}>
              Gallerie
            </button>

            {loggedInUser ? (
              <button
                className="NavBar__dashboardBtn"
                onClick={() => navigate("/dashboard")}>
                Dashboard
              </button>
            ) : null}

            <button
              className="NavBar__signUpBtn"
              onClick={() => navigate("/signup")}>
              Sign Up
            </button>

            {loggedInUser ? (
              <button className="NavBar__signOutBtn" onClick={signOutButton}>
                Sign Out
              </button>
            ) : (
              <button
                className="NavBar__signInBtn"
                onClick={() => navigate("/signin")}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
