import { Link } from "react-router-dom";
import navBarLogo from "../assets/navBar_logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/gallery">
        <div className="navBarHeader">
          <img id="navBarLogo" src={navBarLogo} alt="arabic teapot" />
          <h1> Jon's GALLERIE</h1>
        </div>
      </Link>

      <Link to="/">
        <h2 id="homeBtn">Home</h2>
      </Link>
      <Link to="/">
        <h2 id="aboutBtn">About</h2>
      </Link>
    </nav>
  );
};
export default NavBar;
