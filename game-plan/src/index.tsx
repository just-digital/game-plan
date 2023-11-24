import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import reportWebVitals from "./reportWebVitals";

import GamePlan from "./components/GamePlan";
import Landing from "./components/Landing";
import Badminton from "./components/badminton/Badminton";
import ErrorPage from "./components/ErrorPage";
import { AuthenticationRequired } from "./components/AuthenticationRequired";

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <GamePlan />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "badminton/:contactId",
        element: <AuthenticationRequired component={Badminton} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
