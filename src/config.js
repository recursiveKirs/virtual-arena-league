export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "unimplemented_UPLOADS_BUCKET_REGION",
      BUCKET: "unimplemented_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      //   Chapter "Deploy the APIs": https://serverless-stack.com/chapters/deploy-the-apis.html
      //   Example URL: https://ly55wbovq4.execute-api.us-east-
      //   EXAMPLE_API_GATEWAY_REGION = us-east-1
      REGION: "EXAMPLE_API_GATEWAY_REGION",
      //   EXAMPLE_API_GATEWAY_URL = 1.amazonaws.com/prod
      URL: "EXAMPLE_API_GATEWAY_URL"
    },
    cognito: {
      // EXAMPLE_COGNITO_REGION = Chapter "Create a Cognito identity pool": Create a Cognito identity pool
      REGION: "EXAMPLE_COGNITO_REGION",
      // EXAMPLE_COGNITO_USER_POOL_ID = "Pool Id"
      USER_POOL_ID: "EXAMPLE_COGNITO_USER_POOL_ID",
      // EXAMPLE_COGNITO_APP_CLIENT_ID = "App Client id"
      APP_CLIENT_ID: "EXAMPLE_COGNITO_APP_CLIENT_ID",
      // EXAMPLE_IDENTITY_POOL_ID = Chapter "Create a Cognito identity pool": https://serverless-stack.com/chapters/create-a-cognito-identity-pool.html
      IDENTITY_POOL_ID: "EXAMPLE_IDENTITY_POOL_ID"
    }
  };

