import { Link } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import "./NavBar.css";

const NavBar = () => {
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
    </nav>
  );
};
export default NavBar;
