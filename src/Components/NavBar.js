import { Link } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import { useAuth } from "../Providers/userProvider";
import "./NavBar.scss";

const NavBar = () => {
  const { loggedInUser } = useAuth();

  console.log("LOGGED IN USER FROM NAVBAR", loggedInUser);

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

      {loggedInUser ? <div>{loggedInUser.email}</div> : null}
    </nav>
  );
};
export default NavBar;
