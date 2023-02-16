import { Link } from "react-router-dom";
import homeImg from "../assets/home_image.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <img id="homeImg" src={homeImg} alt="moroccan style room" />
    </div>
  );
};
export default About;
