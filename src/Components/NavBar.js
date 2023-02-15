import { Link } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <div className="navBarHeader">
          <img id="navBarLogo" src={navBarLogo} alt="arabic teapot" />
          <h1> Welcome to Jon's GALLERIE</h1>
        </div>
      </Link>

      <Link to="/gallery">
        <h2 id="homeBtn">Gallery!</h2>
      </Link>
    </nav>
  );
};
export default NavBar;
