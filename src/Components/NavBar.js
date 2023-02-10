import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/gallery">
        <h1>Jon's Gallery</h1>
      </Link>

      <Link to="/">
        <h3>Home</h3>
      </Link>
    </nav>
  );
};
export default NavBar;
