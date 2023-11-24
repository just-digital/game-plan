import { Paper, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <Paper>
      <Typography variant="h3">{error.statusText}</Typography>
      <Typography variant="body1">{error.data}</Typography>
    </Paper>
  );
}
