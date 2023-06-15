import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const IsAlreadyLogin = ({ children }) => {
  const user = Cookies.get("user");
//   console.log(user);
  if (user) return <Navigate to={"/"} />;
  else return children;
};

export default IsAlreadyLogin;
