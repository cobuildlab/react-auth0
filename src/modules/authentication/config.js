import auth0 from 'auth0-js';
import { Auth0Lock } from 'auth0-lock';

/**
 * Setting our application with auth0.
 */
export const app = new auth0.WebAuth({
  domain: "tutorial-react-auth0.auth0.com",
  clientID: "1R3s7KCM0Ol5uaXa0kyL1TlYadSYYf6t",
  redirectUri: "http://localhost:3000/callback",
  responseType: "token id_token",
  scope: "openid profile email update:current_user_metadata read:current_user"
});

const options 

