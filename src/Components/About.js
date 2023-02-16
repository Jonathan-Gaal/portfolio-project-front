import { Link } from "react-router-dom";
import homeImg from "../assets/home_image.jpg";
import jonathanGaal from "../assets/jon_g.jpeg";
import portrait from "../assets/portrait.jpeg";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <img id="homeImg" src={homeImg} alt="moroccan style room" />
      <h1>About</h1>
      <div className="jonLinks">
        <img
          className="devsPhoto"
          alt="App Dev Jonathan Gaal"
          src={jonathanGaal}
        />
        <img
          className="portrait"
          alt="App Dev Jonathan Gaal drawn portrait"
          src={portrait}
        />

        <h2>Jonathan Gaal</h2>
        <strong>Contact: </strong>
        <a
          className="devsEmail"
          target="blank"
          href={`mailto: jonathangaal@pursuit.org`}>
          jonathangaal@pursuit.org
        </a>
        <br></br>
        <strong>GitHub: </strong>
        <a
          className="devsGitHub"
          target="blank"
          href="https://github.com/Jonathan-Gaal">
          https://github.com/Jonathan-Gaal
        </a>
        <p className="bio">
          <strong>Bio:</strong> I am a growth-oriented Pursuit Fellow (Pursuit
          Fellowship is an intense 12-month software engineering program with a
          9% acceptance rate) with an interest in full-stack web development.{" "}
        </p>
      </div>
    </div>
  );
};
export default About;
