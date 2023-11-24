import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const AuthenticationRequired = ({ component }: { component: any }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <CircularProgress />,
  });

  return <Component />;
};
