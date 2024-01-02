import axios from "axios";
import { API } from "../constants";

export const getGalleryDataFromDB = async (
  itemId,
  setGalleryStateFromCallback
) => {
  // TAKES AN item_id AND A setGallery RELATED STATE AS CALLBACK
  await axios
    .get(`${API}/gallery/${itemId}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setGalleryStateFromCallback(res.data);
    })
    .catch((c) => console.warn("catch", c));
};

// TAKES AN item_id AND A setGalleryIMAGE RELATED STATE AS CALLBACK
export const getGalleryArtImagesFromDB = async (
  itemId,
  setGalleryImageStateFromCallback
) => {
  axios
    .get(`${API}/gallery/${itemId}/artImages`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setGalleryImageStateFromCallback(res.data[0].image_url);
    })
    .catch((err) => {
      console.warn("catch", err);
    });
};
