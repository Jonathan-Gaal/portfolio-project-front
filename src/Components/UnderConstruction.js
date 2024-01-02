import { Link, useNavigate } from "react-router-dom";
import underConstructionImage from "../assets/art_portfolio_project_front_under_construction_image.jpg";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  const pageHistory = useNavigate();
  return (
    <div className="UnderConstruction">
      <img
        className="UnderConstruction__img"
        id="UnderConstruction"
        src={underConstructionImage}
        alt="people repairing a mud brick building"
      />
      <div className="UnderConstruction__messageAndBackButton">
        {" "}
        <h2 className="UnderConstruction__mainMessage">
          Page under construction...
        </h2>
        <Link to="/dashboard">
          <button
            className="UnderConstruction__backButton"
            onClick={() => pageHistory.goBack()}>
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};
export default UnderConstruction;
