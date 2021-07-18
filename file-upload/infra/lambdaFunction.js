const { S3 } = require("aws-sdk");
const uuid = require("uuid");

if (!process.env.BUCKET_NAME) {
  console.log("Environment variable BUCKET_NAME must be set");
}

export async function main(event) {
  console.log(`Event is: ${JSON.stringify(event, null, 2)}`);

  try {
    if (
      !event.queryStringParameters?.host ||
      !event.queryStringParameters?.contentType ||
      !event.queryStringParameters?.fileType ||
      !event.queryStringParameters?.fileSubject ||
      !event.queryStringParameters?.fileTopic ||
      !event.queryStringParameters?.fileCategory ||
      !event.queryStringParameters?.fileName
    ) {
      throw new Error(
        "File host, contentType, type, subject, topic, category and name  must be specified"
      );
    }

    const {
      host,
      contentType,
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    } = event.queryStringParameters;
    // const fileName = uuid.v1();
    const presignedURL = await createPresignedURL({
      host,
      contentType,
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...presignedURL,
        fileDetails: {
          fileSubject,
          fileTopic,
          fileCategory,
          fileName,
        },
      }),
    };
  } catch (error) {
    console.log("ERROR is:", error);
    if (error instanceof Error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: error.message }),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({ error: JSON.stringify(error) }),
    };
  }
}

export function createPresignedURL({
  host,
  contentType,
  fileType,
  fileSubject,
  fileTopic,
  fileCategory,
  fileName,
}) {
  const setParams = (contentLength, key) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Fields: {
        key: key,
        acl: "public-read",
      },
      Conditions: [
        ["content-length-range", 0, contentLength * 1000000],
        ["eq", "$Content-Type", fileType],
      ],
      Expires: 15,
    };
    return params;
  };

  const s3 = new S3();

  if (contentType === "document") {
    const key = `${host}/${contentType}/${fileSubject}/${fileTopic}/${fileCategory}/${fileName}`;
    const params = setParams(10, key); // 10MB
    return s3.createPresignedPost(params);
  } else if (contentType === "image") {
    const key = `${host}/${contentType}/${fileSubject}/${fileName}`;
    const params = setParams(2, key); // 2MB
    return s3.createPresignedPost(params);
  } else if (contentType === "video") {
    const key = `${host}/${contentType}/${fileSubject}/${fileTopic}/${fileCategory}/${fileName}`;
    const params = setParams(1000, key); // 1GB
    return s3.createPresignedPost(params);
  } else {
    return {
      url: contentType,
      fields: "nothing",
      message: "invalid content type",
    };
  }
}
