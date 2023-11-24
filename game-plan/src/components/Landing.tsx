import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container, Typography } from "@mui/material";

import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import LogoutButton from "./LogoutButton";


const Landing = () => {
  // if not authenticated show login button
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <Typography variant="h1">Welcome!</Typography>
      <Typography>Please select an option from the menu.</Typography>
      {!isAuthenticated && <LoginButton />}
      {!isAuthenticated && <SignupButton />}
      {isAuthenticated && <LogoutButton />}
    </Container>
  );
};

export default Landing;
