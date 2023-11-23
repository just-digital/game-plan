import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';


import reportWebVitals from "./reportWebVitals";

import GamePlan from "./components/GamePlan";

import '@fontsource/roboto/300.css';


const stripePromise = loadStripe("your-stripe-public-key");

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="nblue.au.auth0.com"
      clientId="Cur59D1RmfKtJf3jFo4I7Hx7xFgO1Uwz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Route exact path="/">
            <GamePlan />
          </Route>
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
