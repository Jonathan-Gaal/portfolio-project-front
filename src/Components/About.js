// import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import homeImg1 from "../assets/home_image1.jpg";
import homeImg2 from "../assets/home_image2.jpg";
import homeImg3 from "../assets/home_image3.jpg";
import homeImg4 from "../assets/home_image4.jpg";
import homeImg5 from "../assets/home_image5.jpg";
import homeImg6 from "../assets/home_image6.jpg";
import homeImg7 from "../assets/home_image7.jpg";
import homeImg8 from "../assets/home_image8.jpg";
import homeImg9 from "../assets/home_image9.jpg";
import homeImg10 from "../assets/home_image10.jpg";
import jonathanGaal from "../assets/jon_g.jpeg";
import portrait from "../assets/portrait.jpeg";
import "./About.scss";

import { useContextUserProvider } from "../Providers/userProvider";

const About = () => {
  const { user } = useContextUserProvider();
  return (
    <div className="About">
      {/* <div>{user}</div> */}
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
            className="About__img"
            id="img1"
            src={homeImg1}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img2"
            src={homeImg2}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img3"
            src={homeImg3}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img4"
            src={homeImg4}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img5"
            src={homeImg5}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img6"
            src={homeImg6}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img7"
            src={homeImg7}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img8"
            src={homeImg8}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img9"
            src={homeImg9}
            alt="moroccan style room"
          />
          <img
            className="About__img"
            id="img10"
            src={homeImg10}
            alt="moroccan style room"
          />
          {/* <img src={image4} className="image4"/> */}
        </AliceCarousel>
      </div>

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
        <div className="About__devsName">Jonathan Gaal</div>

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
