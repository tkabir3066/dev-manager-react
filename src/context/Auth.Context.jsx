import React, { createContext, useState } from "react";
import { axiosPublicInstace } from "../config/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const registerUser = async (data) => {
    try {
      const response = await axiosPublicInstace.post(
        "/auth/local/register",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  const login = (data) => {};
  const logout = () => {};

  const value = {
    registerUser,
    login,
    logout,
    user,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
