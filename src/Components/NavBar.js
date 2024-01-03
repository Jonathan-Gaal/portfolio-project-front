import { Link, Navigate, useNavigate } from "react-router-dom";
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
      <div className="navBarHeader">
        <img className="navBarLogo" src={navBarLogo} alt="arabic teapot" />
        <Link to="/">
          <div className="navBarHeaderText"> Jon's Palace of Art</div>
        </Link>
      </div>

      <div className="navBarButtons">
        <button className="seeGalleryBtn" onClick={() => navigate("/gallery")}>
          Gallerie
        </button>

        {loggedInUser ? (
          <button
            className="dashboardBtn"
            onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        ) : null}

        <button className="signUpBtn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>

        {loggedInUser ? (
          <button className="signOutBtn" onClick={signOutButton}>
            Sign Out
          </button>
        ) : (
          <button className="signInBtn" onClick={() => navigate("/signin")}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};
export default NavBar;
