import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Auth0Provider } from "@auth0/auth0-react";

const stripePromise = loadStripe("your-stripe-public-key");

function App() {
  return (
    <Auth0Provider
      domain="nblue.au.auth0.com"
      clientId="Cur59D1RmfKtJf3jFo4I7Hx7xFgO1Uwz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
}

export default App;
