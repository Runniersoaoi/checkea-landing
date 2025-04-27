import { fileUpload } from "../../helpers/fileUpload";
import { setDniBack, setDniFront, setFacePhoto } from "./validationSlice";

export const startUploadingDniFrontFiles = (file = "") => {
  return async (dispatch) => {
    const photoUrl = await fileUpload(file);
    dispatch(setDniFront(photoUrl));
  };
};

export const startUploadingDniBackFiles = (file = "") => {
  return async (dispatch) => {
    const photoUrl = await fileUpload(file);
    dispatch(setDniBack(photoUrl));
  };
};

export const startUploadingFaceFiles = (file = "") => {
  return async (dispatch) => {
    const photoUrl = await fileUpload(file);
    dispatch(setFacePhoto(photoUrl));
  };
};
