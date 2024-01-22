import React, { useEffect, useState } from "react";
// import { UseSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authenticatation = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = UseSelector((state) => state.auth.status);

  useEffect(() => {
    if (authenticatation && authStatus !== authenticatation) {
      navigate("/login");
    } else if (!authenticatation && authStatus !== authenticatation) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authenticatation]);

  return loader ? <h1>Loading..</h1> : <>{children}</>;
}
