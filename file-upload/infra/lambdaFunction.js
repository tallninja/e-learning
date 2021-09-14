const { S3 } = require("aws-sdk");
const uuid = require("uuid");

if (!process.env.BUCKET_NAME) {
  console.log("Environment variable BUCKET_NAME must be set");
}

export async function main(event) {
  console.log(`Event is: ${JSON.stringify(event, null, 2)}`);

  try {
    if (
      !event.queryStringParameters?.key ||
      !event.queryStringParameters?.fileType ||
      !event.queryStringParameters?.contentLength ||
      !event.queryStringParameters?.fileName
    ) {
      throw new Error(
        "File host, contentType, type, subject, topic, category and name  must be specified"
      );
    }

    const { key, fileType, contentLength, fileName } =
      event.queryStringParameters;
    // const fileName = uuid.v1();
    const presignedURL = await createPresignedURL({
      key,
      fileType,
      contentLength,
      fileName,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...presignedURL,
        fileDetails: {
          key,
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

export function createPresignedURL({ key, fileType, contentLength, fileName }) {
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

  const s3 = new S3();
  s3.createPresignedPost(params);
}
