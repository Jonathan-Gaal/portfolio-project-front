import fourOfourImage from "../assets/404-page-image.jpg";
import "./FourOFour.scss";

const FourOFour = () => {
  return (
    <div className="fourOfour">
      <img
        className="fourOfour__img"
        id="fourOfour"
        src={fourOfourImage}
        alt="man with horse in a desert"
      />
      <h1>Sorry, page not found...</h1>
    </div>
  );
};
export default FourOFour;
