import axios from "axios";
import { API } from "../constants";

export const getGalleryDataFromDB = async (
  item_id,
  setGalleryStateFromCallback
) => {
  // TAKES a setGallery RELATED STATE AS CALLBACK
  await axios
    .get(`${API}/gallery/${item_id}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => {
      setGalleryStateFromCallback(res.data);
    })
    .catch((c) => console.warn("catch", c));
};
