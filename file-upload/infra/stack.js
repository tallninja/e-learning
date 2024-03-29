const {
  HttpApi,
  CorsHttpMethod,
  HttpMethod,
} = require("@aws-cdk/aws-apigatewayv2");
const {
  LambdaProxyIntegration,
} = require("@aws-cdk/aws-apigatewayv2-integrations");
const { Runtime } = require("@aws-cdk/aws-lambda");
const { NodejsFunction } = require("@aws-cdk/aws-lambda-nodejs");
const { Bucket, HttpMethods } = require("@aws-cdk/aws-s3");
const { Stack, Duration, CfnOutput } = require("@aws-cdk/core");
const path = require("path");

const { STACK_PREFIX, DEPLOY_ENVIRONMENT, ALLOWED_ORIGIN, API_PATH } =
  require("../config/constants").constants;

class PdfUploadStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // our s3 bucket
    const s3bucket = new Bucket(this, id, {
      cors: [
        {
          allowedMethods: [
            HttpMethods.GET,
            HttpMethods.POST,
            HttpMethods.PUT,
            HttpMethods.DELETE,
          ],
          allowedOrigins: [ALLOWED_ORIGIN],
          allowedHeaders: ["*"],
        },
      ],
    });

    // our API Gateway
    const httpApi = new HttpApi(this, "api", {
      description: `___${DEPLOY_ENVIRONMENT}___ API for ${STACK_PREFIX}`,
      apiName: `${STACK_PREFIX}-api-${DEPLOY_ENVIRONMENT}`,
      corsPreflight: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: [
          CorsHttpMethod.PUT,
          CorsHttpMethod.GET,
          CorsHttpMethod.OPTIONS,
          CorsHttpMethod.POST,
          CorsHttpMethod.PATCH,
          CorsHttpMethod.DELETE,
        ],
        allowCredentials: true,
        allowOrigins: [ALLOWED_ORIGIN],
      },
    });

    // our lambda function
    const getPresignedUrlFunction = new NodejsFunction(
      this,
      "get-presigned-url",
      {
        runtime: Runtime.NODEJS_14_X,
        memorySize: 1024,
        timeout: Duration.seconds(5),
        handler: "main",
        entry: path.join(__dirname, "/lambdaFunction.js"),
        environment: { BUCKET_NAME: s3bucket.bucketName },
      }
    );

    // Other configurations

    s3bucket.grantPut(getPresignedUrlFunction);
    s3bucket.grantPutAcl(getPresignedUrlFunction);

    httpApi.addRoutes({
      path: `/${API_PATH}`,
      methods: [HttpMethod.GET],
      integration: new LambdaProxyIntegration({
        handler: getPresignedUrlFunction,
      }),
    });

    // Creates an CfnOutput value for this stack. -> From documentation
    new CfnOutput(this, "region", {
      value: Stack.of(this).region,
    });

    // api url
    new CfnOutput(this, "apiUrl", {
      value: httpApi.url,
    });

    // api path
    new CfnOutput(this, "apiPath", {
      value: API_PATH,
    });

    // bucket name
    new CfnOutput(this, "bucketName", {
      value: s3bucket.bucketName,
    });
  }
}

module.exports = PdfUploadStack;
