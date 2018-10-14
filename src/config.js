export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "virtual-arena-league-uploads"
    },
    apiGateway: {
      //   Chapter "Deploy the APIs": https://serverless-stack.com/chapters/deploy-the-apis.html
      //   Example URL: https://ly55wbovq4.execute-api.us-east-
      //   EXAMPLE_API_GATEWAY_REGION = us-east-1
      REGION: "us-east-2",
      //   EXAMPLE_API_GATEWAY_URL = 1.amazonaws.com/prod
      URL: "https://lhykklvy97.execute-api.us-east-2.amazonaws.com/prodL"
    },
    cognito: {
      // EXAMPLE_COGNITO_REGION = Chapter "Create a Cognito identity pool": Create a Cognito identity pool
      REGION: "us-east-2",
      // EXAMPLE_COGNITO_USER_POOL_ID = "Pool Id"
      USER_POOL_ID: "us-east-2_UqtG9UA7P",
      // EXAMPLE_COGNITO_APP_CLIENT_ID = "App Client id"
      APP_CLIENT_ID: "1ittcqp2d4m072174moppfpnmr",
      // EXAMPLE_IDENTITY_POOL_ID = Chapter "Create a Cognito identity pool": https://serverless-stack.com/chapters/create-a-cognito-identity-pool.html
      IDENTITY_POOL_ID: "us-east-2:81f8f75e-030a-4a2c-8c0c-fae68707aede"
    }
  };

