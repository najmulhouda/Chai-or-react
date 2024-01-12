import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div>
        <h1>Please Login</h1>
      </div>
    );
  return <div>Wellcome {user.username}</div>;
}

export default Profile;
