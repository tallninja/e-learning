import axios from "axios";

import getPresignedURL from "./getPresugnedURL";

import { UPLOAD_FILE } from "../../types";

export const uploadFile =
  (
    { host, contentType, file, fileType, fileSubject, fileTopic, fileCategory },
    onUploadProgress
  ) =>
  async (dispatch) => {
    const fileExtension = fileType.split("/")[1];
    fileSubject = fileSubject.trim().split(" ").join("-");
    fileTopic = fileTopic.trim().split(" ").join("-");
    const fileName = `${fileSubject}-${fileTopic}-${fileCategory}.${fileExtension}`;

    const res = await getPresignedURL({
      host,
      contentType,
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    });

    const { url, fields } = res;

    const formData = new FormData();
    formData.append("Content-Type", fileType);
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("file", file);

    console.log(url);

    await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });

    const S3_FILE_URL = `${url}/${fields.key}`;

    dispatch({
      type: UPLOAD_FILE,
      payload: S3_FILE_URL,
    });
  };
