import { Link } from "react-router-dom";
import homeImg from "../assets/home_image.jpg";
import jonathanGaal from "../assets/jon_g.jpeg";
import portrait from "../assets/portrait.jpeg";
import "./About.scss";
const About = () => {
  return (
    <div className="About">
      <img className="About__homeImg" src={homeImg} alt="moroccan style room" />
      <div className="About__header">About Moi!</div>
      <div className="About__devPhotos">
        <img
          className="About__devsPhoto"
          alt="App Dev Jonathan Gaal"
          src={jonathanGaal}
        />
        <img
          className="About__portrait"
          alt="App Dev Jonathan Gaal drawn portrait"
          src={portrait}
        />
      </div>

      <div className="About__jonDetails">
        <div className="devsName">Jonathan Gaal</div>

        <div className="About__jonLinks">
          <div className="devsEmail">
            <strong>Contact: </strong>
            <a
              className="devsEmailLink"
              target="blank"
              href={`mailto: jonathangaal@pursuit.org`}>
              jonathangaal@pursuit.org
            </a>
          </div>

          <div className="devsGitHub">
            <strong>GitHub: </strong>
            <a
              className="devsGitHubLink"
              target="blank"
              href="https://github.com/Jonathan-Gaal">
              https://github.com/Jonathan-Gaal
            </a>
          </div>
        </div>

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
