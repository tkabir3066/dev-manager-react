import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Auth.Context";
function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const loadedComp = user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
  return <div>{loadedComp}</div>;
}

export default PrivateRoute;
