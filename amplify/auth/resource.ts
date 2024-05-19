import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "welcome to djourney! - verify your email",
    },
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        attributeMapping: {
          email: "email",
          fullname: "fullName",
        },
        scopes: ["email"],
      },

      callbackUrls: [
        "http://localhost:3000/auth",
        "https://mywebsite.com/auth",
      ],
      logoutUrls: [
        "http://localhost:3000/logout",
        "https://mywebsite.com/logout",
      ],
    },
  },
});
