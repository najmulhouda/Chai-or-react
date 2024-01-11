import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <div className="bg-red-500 text-white py-5 text-center text-3xl">
      User:{userId}
    </div>
  );
}

export default User;
