import { useNavigate } from "react-router-dom";
import underConstructionImage from "../assets/art_portfolio_project_front_under_construction_image.jpg";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="UnderConstruction">
      <img
        className="UnderConstruction__image"
        id="UnderConstruction"
        src={underConstructionImage}
        alt="people repairing a mud brick building"
      />
      <div className="UnderConstruction__messageAndBackButton">
        {" "}
        <div className="UnderConstruction__mainMessage">
          Page under construction...
        </div>
        <button
          className="UnderConstruction__backButton"
          onClick={() => navigate("/dashboard")}>
          Back
        </button>
      </div>
    </div>
  );
};
export default UnderConstruction;
