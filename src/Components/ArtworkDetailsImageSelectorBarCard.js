import { useState } from "react";

import "./ArtworkDetailsImageSelectorBarCard.scss";

export const ArtworkDetailsImageSelectorBarCard = ({
  artworkImage,
  setSelectedArtworkImage,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const image = artworkImage.image_url;
  const classNames = ["ArtworkDetailsImageSelectorBarCard"];

  const selectThisImageOnClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={classNames.join(" ")} onClick={selectThisImageOnClick}>
      <img
        className="ArtworkDetailsImageSelectorBarCard__Image"
        src={image}
        alt="artwork"
      />
    </div>
  );
};
