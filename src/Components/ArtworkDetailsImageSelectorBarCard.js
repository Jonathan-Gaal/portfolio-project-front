import { useState } from "react";

import "./ArtworkDetailsImageSelectorBarCard.scss";

export const ArtworkDetailsImageSelectorBarCard = ({
  artworkImage,
  setSelectedArtworkImage,
  setSelectedArtworkImageCaption,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const image = artworkImage.image_url;
  const caption = artworkImage.image_caption;
  const classNames = ["ArtworkDetailsImageSelectorBarCard"];

  const selectThisImageOnClick = () => {
    setIsSelected(!isSelected);
    setSelectedArtworkImage(image);
    setSelectedArtworkImageCaption(caption);
  };

  return (
    <div className={classNames.join(" ")}>
      <img
        className="ArtworkDetailsImageSelectorBarCard__Image"
        src={image}
        alt="artwork"
        onClick={selectThisImageOnClick}
      />
    </div>
  );
};
