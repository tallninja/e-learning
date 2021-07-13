const { S3 } = require("aws-sdk");
const uuid = require("uuid");

if (!process.env.BUCKET_NAME) {
  console.log("Environment variable BUCKET_NAME must be set");
}

export async function main(event) {
  console.log(`Event is: ${JSON.stringify(event, null, 2)}`);

  try {
    if (
      !event.queryStringParameters?.fileType ||
      !event.queryStringParameters?.fileTopic
    ) {
      throw new Error("File type and File topic must be specified");
    }

    const { fileType, fileTopic } = event.queryStringParameters;
    const fileName = uuid.v1();
    const presignedURL = await createPresignedURL({
      fileType,
      fileTopic,
      fileName,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...presignedURL,
        filePath,
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

export function createPresignedURL({ fileType, fileTopic, fileName }) {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Fields: { key: `${fileTopic}/${fileName}`, acl: "public-read" },
    Conditions: [
      ["content-length-range", 0, 10000000], // maximum allowable file size 10MB
      ["eq", "$Content-Type", fileType], // only PDF files will be allowed
    ],
    Expires: 15,
  };

  const s3 = new S3();

  return s3.createPresignedPost(params);
}
