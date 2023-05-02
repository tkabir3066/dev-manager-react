import React, { createContext, useState } from "react";
import { axiosPublicInstance } from "../config/axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const loadedUser = JSON.parse(localStorage.getItem("user"));
const loadedToken = JSON.parse(localStorage.getItem("token"));

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadedUser ? loadedUser : null);
  const [token, setToken] = useState(loadedToken ? loadedToken : null);
  const location = useLocation();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    // console.log(data);
    try {
      const response = await axiosPublicInstance.post(
        "auth/local/register",
        data
      );

      const { user, jwt } = response.data;

      // setting data to the localStorage
      // update state

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(jwt));
      setUser(user);
      setToken(jwt);

      toast.success("Register successfully redirecting...");
      // Redirecting the user
      navigate("/contacts");
    } catch (err) {
      toast.error(err.response?.data?.error?.message);
      console.log(err.response?.data?.error?.message);
    }
  };

  const login = async (data) => {
    try {
      const response = await axiosPublicInstance.post("auth/local/", data);

      const { user, jwt } = response.data;

      // setting data to the localStorage
      // update state

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(jwt));
      setUser(user);
      setToken(jwt);

      toast.success("Login successfully redirecting...");
      // Redirecting the user
      navigate(location?.state?.from ? location?.state?.from : "/contacts");
    } catch (err) {
      toast.error(err.response?.data?.error?.message);
      console.log(err.response?.data?.error?.message);
    }
  };
  const logout = () => {
    // Removing data from localStorage

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // remove data from state

    setUser(null);
    setToken(null);
    toast.success("Logout successfully redirecting...");
    navigate("/");
  };

  const value = {
    registerUser,
    login,
    logout,
    user,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
