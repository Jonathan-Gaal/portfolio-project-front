import underConstructionImage from "../assets/art_portfolio_project_front_under_construction_image.jpg";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  return (
    <div className="UnderConstruction">
      <img
        className="UnderConstruction__img"
        id="UnderConstruction"
        src={underConstructionImage}
        alt="people repairing a mud brick building"
      />
      <h1>Page under construction...</h1>
    </div>
  );
};
export default UnderConstruction;
