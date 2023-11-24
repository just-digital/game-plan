import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function BasicProfile() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="content-layout">
      code={JSON.stringify(user, null, 2)}
      <img src={user.picture} alt="Profile" className="profile__avatar" />
      <h2 className="profile__title">{user.name}</h2>
      <span className="profile__description">{user.email}</span>
    </div>
  );
}
