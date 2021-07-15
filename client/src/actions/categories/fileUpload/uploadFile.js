import axios from "axios";

import { getPresignedURL } from "./getPresugnedURL";

import { UPLOAD_FILE } from "../../types";

export const uploadFile =
  (
    { file, fileType, fileSubject, fileTopic, fileCategory },
    onUploadProgress
  ) =>
  async (dispatch) => {
    const fileExtension = fileType.split("/")[1];
    const fileName = `${fileTopic}-${fileCategory}.${fileExtension}`;

    const res = await getPresignedURL({
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    });

    const {
      url,
      fields: { key },
    } = res.data;

    const formData = new FormData();
    formData.append("Content-Type", fileType);
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("file", file);

    await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });

    const S3_FILE_URL = `${url}/${key}`;

    dispatch({
      type: UPLOAD_FILE,
      payload: S3_FILE_URL,
    });
  };
