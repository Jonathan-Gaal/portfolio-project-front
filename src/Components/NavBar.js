import { Link, Navigate, useNavigate } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import { useAuth } from "../Providers/userProvider";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const { loggedInUser, userSignOut } = useAuth();

  const signOutButton = () => {
    userSignOut().then(() => {
      navigate("/");
      console.log("USER SIGN OUT FIRED");
    });
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
        <div className="seeGalleryBtn">
          <Link to="/gallery">Gallerie</Link>
        </div>

        <div className="signUpBtn">
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="signInBtn">
          <Link to="/signin">Sign In</Link>
        </div>

        {loggedInUser ? (
          <div className="signOutBtn" onClick={signOutButton}>
            Sign Out{" "}
          </div>
        ) : null}
      </div>

      {/* {loggedInUser ? <div>{loggedInUser.email}</div> : null} */}
    </div>
  );
};
export default NavBar;
