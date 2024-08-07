import React from "react";
import { ArtworkDetailsImageSelectorBarCard } from "./ArtworkDetailsImageSelectorBarCard";
import "./ArtworkDetailsImageSelectorBar.scss";

export const ArtworkDetailsImageSelectorBar = ({
  allArtworkImages,
  setSelectedArtworkImage,
  setSelectedArtworkImageCaption,
}) => {
  return (
    <div className="ArtworkDetailsImageSelectorBar">
      {allArtworkImages.map((artworkImage) => {
        return (
          <ArtworkDetailsImageSelectorBarCard
            key={artworkImage.image_id}
            artworkImage={artworkImage}
            setSelectedArtworkImage={setSelectedArtworkImage}
            setSelectedArtworkImageCaption={setSelectedArtworkImageCaption}
          />
        );
      })}
    </div>
  );
};
