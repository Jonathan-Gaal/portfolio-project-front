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
    <nav className="NavBar">
      <Link to="/">
        <div className="navBarHeader">
          <img className="navBarLogo" src={navBarLogo} alt="arabic teapot" />
          <div className="navBarHeaderText"> Jon's Palace of Art</div>
        </div>
      </Link>

      <Link to="/gallery">
        <div className="seeGalleryBtn">Gallerie</div>
      </Link>

      <Link to="/signup">
        <div className="signUpBtn">Sign Up</div>
      </Link>

      <Link to="/signin">
        <div className="signInBtn">Sign In</div>
      </Link>

      {loggedInUser ? (
        <div className="signOutBtn" onClick={signOutButton}>
          Sign Out{" "}
        </div>
      ) : null}

      {loggedInUser ? <div>{loggedInUser.email}</div> : null}
    </nav>
  );
};
export default NavBar;
