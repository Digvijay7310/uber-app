import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContex";

function UserProtectedWrapper({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {}, [token]);

  if (!token) {
    navigate("/login");
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
