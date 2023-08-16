// import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import homeImg from "../assets/home_image.jpg";
import jonathanGaal from "../assets/jon_g.jpeg";
import portrait from "../assets/portrait.jpeg";
import "./About.scss";
const About = () => {
  return (
    <div className="About">
      <div className="About__aliceCarousel">
        <AliceCarousel
          infinite="true"
          autoPlay
          duration={1000}
          autoPlayInterval={5000}
          transitionDuration={70000}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          fadeOutAnimation="true"
          animationType="fadeout">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
          {/* <img src={image4} className="image4"/> */}
        </AliceCarousel>
      </div>

      {/* <div class="About__slider">
        <div class="slide" id="slide-1">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
        </div>
        <div class="slide" id="slide-2">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
        </div>
        <div class="slide" id="slide-3">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
        </div>
        <div class="slide" id="slide-4">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
        </div>
        <div class="slide" id="slide-5">
          <img
            className="About__homeImg"
            src={homeImg}
            alt="moroccan style room"
          />
        </div>
      </div> */}

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
