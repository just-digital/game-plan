import { Outlet } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "../auth0";

import "@fontsource/roboto/300.css";

export default function GamePlan() {
  return (
    <>
      <Auth0ProviderWithNavigate>
        <Outlet />
      </Auth0ProviderWithNavigate>
    </>
  );
}
