import { Link } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <div className="navBarHeader">
          <img id="navBarLogo" src={navBarLogo} alt="arabic teapot" />
          <h1> Jon's Palace of Art</h1>
        </div>
      </Link>

      <Link to="/gallery">
        <div id="seegalleryBtn">Gallerie!</div>
      </Link>
    </nav>
  );
};
export default NavBar;
